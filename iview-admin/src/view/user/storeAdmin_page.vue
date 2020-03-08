<template>
  <div>
    <!-- 新增商户账号 -->
    <Modal
      v-model="showAddModal"
      title="添加门店管理员"
      @on-ok="okAdd"
      :width='400'>
      <Form :model="formData" ref="formData" :rules="rules" :label-width='100'>
        <FormItem label="公司名">
          <div class="showName">{{store_provider_name}}</div>
        </FormItem>

        <FormItem label="等级">
          <div class="showRole">{{role}}</div>
        </FormItem>

        <FormItem label="用户名" prop="username">
          <Input v-model="formData.username" style="width: 200px" :maxlength="30"></Input>
        </FormItem>

        <FormItem label="密码" prop="password">
          <div class="passwordWrap">
            <Input :type='inputType' v-model="formData.password" style="width: 200px" :maxlength="20"></Input>
            <Icon @click="changeEye('text')" size='20' v-if="inputType=='password'" class="passwordEye" type="md-eye-off" />
            <Icon @click="changeEye('password')" size='20' v-if="inputType=='text'" class="passwordEye" type="md-eye" />
          </div>
        </FormItem>
      </Form>
    </Modal>

    <!-- 展示数据表格 -->
    <Table
      :columns="columns"
      :data="dataList"
      ></Table>

    <!-- 分页器 -->
    <div style="text-align: right">
      <Page :page-size='offect'
        :total='total'
        @on-change="changePage"></Page>
    </div>
  </div>
</template>

<script>
export default {
  name: "storeAdmin_page",
  data () {
    return {
      inputType: "password",
      page: 1,
      offect: 20,
      total: 1,
      showAddModal: false,
      columns: [
        {title: "公司", key: "store_provider_name"},
        {title: "门店", key: "name"},
        {title: "省份", key: "province"}, 
        {title: "市", key: "city"},
        {title: "区/县", key: "area"},
        {title: "门店地址", key: "store_address"},
        {title: "操作", key: '123',align: "center", render: (h, list) => {
          return h(
            'div',{},
            [
              h(
                'Button',
                {
                  props: {
                    type: "info",
                    size: "small"
                  },
                  on: {
                    click: () => {
                      this.addAdministrator(list.row)
                    }
                  }
                },
                "添加门店管理员"
              )
            ]
          )
        }}
      ],
      dataList: [],
      role: '',           //表单门店等级
      role_id: 2,         
      store_provider_name: "",
      store_id: "",
      company_id: "",
      formData: {           //  表单数据
        username: "",
        password: ""
      },
      rules: {
        username: [
          {required: true,message: "不能为空", trigger: "blur"},
        ],
        password: [
          {required: true,message: "不能为空", trigger: "blur"},
          {pattern: /^\w+$/, message: "请输入数字或英文", trigger: "blur"}
        ]
      },
    }
  },
  created () {
    this.showTable()
  },
  methods: {
    changeEye (data) {           //修改密码框的眼睛icon
      this.inputType = data
    },
    changePage (e) {            //修改当前页数
      this.page = e
      this.showTable()
      document.getElementsByClassName("content-wrapper")[0].scrollTop = 0
    },
    addAdministrator (list) {    //显示新增商户账号Modal
      // console.log(list)
      this.formData.username = ""
      this.formData.password = ""
      this.store_provider_name = list.store_provider_name
      this.store_id = list.id
      this.company_id = list.store_provider
      this.$Loading.start()

      //获取门店的 role_id
      this.$axios({
        url: "admin/suser/roles",
        method: "POST",
        data: {
          token: localStorage.getItem('jwt'),
          company_id: list.store_provider
        }
      }).then(res => {
        // console.log(2, res)
        if (res.data.code == 200) {
          res.data.data.forEach(item => {
            item.id == 2?this.role = item.role : null
          })
          this.showAddModal = true
        } else {
          this.$Message.error("网络错误，请稍后重试")
        }
        this.$Loading.finish()
      }).catch(err => {
        console.log(err)
        this.$Loading.finish()
        this.$Message.error("网络错误，请稍后重试")
      })
    },
    okAdd () {                   //确定新增
      this.$refs.formData.validate(flag => {
        if (flag) {
          this.$axios({
            url: "admin/add/suser",
            method: "POST",
            data: {
              token: localStorage.getItem("jwt"),
              role_id: this.role_id,
              company_id: this.company_id,
              store_id: this.store_id,
              username: this.formData.username,
              password: this.formData.password
            }
          }).then(res => {
            // console.log(res)
            if (res.data.code == 200) {
              this.$Message.success(res.data.msg)
              this.showTable()
            } else {
              this.$Message.error(res.data.msg)
              this.showTable()
            }
          }).catch(err => {
            console.log(err)
            this.$Message.error("网络错误，请稍重试")
          })
        } else {
          this.$Message.warning('格式错误')
        }
      })
    },
    showTable () {               //获取展示数据
      this.$axios({
        url: "admin/store/unbind/" ,
        method: "POST",
        data: {
          token: localStorage.getItem('jwt'),
          page: 1,
          offect: 8
        }
      }).then(res => {
        // console.log(res)
        this.total = res.data.counts       //将数据总条数 赋值给分页器
        this.dataList = res.data.data
      })
    }
  },
}
</script>

<style>
.showName, .showRole {
  border: solid #DCDEE2 1px;
  width: 200px;
  border-radius: 3px;
  padding-left: 9px;
}
.passwordWrap {
  position: relative;
}
.passwordEye {
  position: absolute;
  left: 174px;
  top: 7px;
}
</style>