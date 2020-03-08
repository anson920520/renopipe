<template>
  <div>
    <Button type="info" style="margin-bottom: 20px" @click="showAddModal">新增高铁信息</Button>

    <!-- 新增 -->
    <Modal v-model="add_modal"
      :width='400'
      title="新增高铁信息"
      @on-ok="okAdd">
      <div class='add_wrap'>
        <Form 
          :model="addForm"
          :rules="rule"
          :label-width='100'
          ref='addForm'>
          <FormItem label="高铁站名" prop="name">
            <Input v-model="addForm.name" style="width:200px" :maxlength="20"></Input>
          </FormItem>
          <FormItem label="省份" prop="province">
            <Select v-model="province_id" 
              @on-change="choose_city"
              style="width: 200px;">
              <Option v-for="item in province_list" 
                v-model="item.id"
                :key="item.id">{{item.name}}</Option>
            </Select>
          </FormItem>
          <FormItem label='城市' prop="city">
            <Select v-model="addForm.city" style="width: 200px">
              <Option v-for="item in city_list" 
                :key="item.id" 
                :value="item.name">{{item.name}}</Option>
            </Select>
          </FormItem>
          
          <FormItem label="高铁站地址" prop="address" :maxlength="40">
            <Input v-model="addForm.address" style="width: 200px"></Input>
          </FormItem>
        </Form>
      </div>
    </Modal>
    <!-- 编辑 -->
    <Modal v-model="edit_modal"
      :width="400"
      title="修改高铁站信息"
      :rules="rule"
      :label-width='100'
      @on-ok="okEdit">
      <Form 
        :model="editForm"
        :rules="rule"
        :label-width='100'
        ref='editForm'>
        <FormItem label="高铁站名" prop="name">
          <Input placeholder="请输入高铁站名称" v-model="editForm.name" style="width:200px" :maxlength="20"></Input>
        </FormItem>
        <FormItem label="省份" prop="province">
          <Select v-model="edit_province" 
            @on-change="choose_city"
            style="width: 200px;">
            <Option v-for="item in province_list" 
              v-model="item.id"
              :key="item.id">{{item.name}}</Option>
          </Select>
        </FormItem>
        <FormItem label='城市' prop="city">
          <Select v-model="editForm.city" style="width: 200px">
            <Option v-for="item in city_list"
              :key="item.id" 
              :value="item.name">{{item.name}}</Option>
          </Select>
        </FormItem>
        <FormItem label="高铁站地址" prop="address" :maxlength="40">
          <Input placeholder="请输入高铁站地址" v-model="editForm.address" style="width: 200px"></Input>
        </FormItem>
      </Form>
    </Modal>

    <!-- 展示数据表格 -->
    <Table :data="train_list" :columns="title_list"></Table>

    <!-- 分页 -->
    <Page class="Page" 
      :current="page"
      show-total
      align="right"
      :total="total" 
      :pageSize="20" 
      @on-change="changePage"></Page>
  </div>
</template>
<script>
import { METHODS } from 'http'
export default {
  data () {
    const that = this
    return {
      province_list:[],
      province_id: "",
      city_list: [],
      token: localStorage.getItem("jwt"),
      add_modal: false,
      edit_modal: false,
      page: 1,
      total: 0,
      train_list: [],
      title_list: [
        {title:"高铁名称", key: "name"},
        {title:"省份", key: "province"},
        {title:"城市", key: "city"},
        {title:"地址", key: "address"},
        {
          title: "操作",
          align: "center",
          render(h, params) {
            return h(
              "div",
              {
                class:"btnwrap",
              },
              [
                h(
                  "Button", {
                    props: {type: "info", size: "small"},
                    style: {
                      marginRight: "5px"
                    },
                    on: {
                      click: () => {
                        that.edit(params.row)
                      }
                    }
                  }, "编辑"
                ),
                h(
                  "Button", {
                    props: {type: "error", size: "small"},
                    on: {
                      click: () => {
                        that.delete(params.row)
                      }
                    }
                  }, "删除"
                ),
              ]
            )
          }
        }
      ],
      addForm: {
        name: "",
        province: "",
        city: "",
        address: ""
      },
      rule: {
        name: [
          {required: true, message: "不能为空", trigger: "blur"}
        ],
        province: [
          {required: true, message: "不能为空"}
        ],
        city: [
          {required: true, message: "不能为空"}
        ],
        address: [
          {required: true, message: "不能为空", trigger: "blur"}
        ]
      },
      editForm: {
        name: "",
        province: "",
        city: "",
        address: ""
      },
      station_id: '',
      edit_province: "",
      edit_city: "",
    }
  },
  created () {
    this.showTable()
    this.getProvince()
  },
  methods: {
    showAddModal () {
      this.resetData()
      this.add_modal = true
      this.getProvince()
    },
    showTable () {
      this.$axios({
        url: "admin/station",
        method: "POST",
        data: {
          token: this.token,
          page: this.page,
          offect: "20"
        }
      }).then(res => {
        console.log(res)
        if (res.data.code == 420 || res.data.code != 200) {
          this.$Message.warning('登录信息已过期，请重新登录')
          return
        }
        if (res.data.code == 200) {
          this.total = res.data.count
          this.train_list = res.data.data
        } else {
          this.$Message.error(res.data.msg)
        }
      }).catch(err => {
        this.$Message.error('登录信息已过期，请重新登录')
      })
    },
    edit (list) {
      const that = this
      this.getProvince()
      this.editForm.name = list.name
      this.station_id = list.id
      this.editForm.address = list.address
      this.editForm.province = list.province
      this.editForm.city = list.city
      this.edit_modal = true
      window.console.log(list)

      this.province_list.forEach(item => {
        console.log(item.name, list.province)
        if (item.name.slice(0,2) == list.province.trim().slice(0, 2)) {
          that.edit_province = item.id
          this.editForm.province = item.name
        }
      })
      console.log(that.edit_province)
      this.$axios({
        url: "admin/city/all",
        method: "POST",
        data: {
          token: this.token,
          province_id: this.edit_province
        }
      }).then(res => {
        // console.log(res)
        if (res.data.code == 200) {
          this.city_list = res.data.city_list
          this.city_list.forEach(attr => {
            if (attr.name.trim().slice(0, 2) == list.city.trim().slice(0, 2)) {
              this.edit_city = attr.name
              this.editForm.city = attr.name
            }
          })
        } else {
          this.$Message.error(res.data.msg)
        }
      })
    },
    delete (list) {                     //确定删除
      // window.console.log(list)
      const that = this
      this.$Modal.confirm({
        title: "提示",
        content: "确定删除？",
        onOk () {
          this.$axios({
            url: "admin/station/del",
            method: "POST",
            data: {
              token: that.token,
              id: list.id
            }
          }).then(res => {
            console.log(res)
            if (res.data.code == 200) {
              this.$Message.success(res.data.msg)
              that.showTable()
            } else {
              this.$Message.error(res.data.msg)
            }
          })
        }
      })
    },
    okAdd () {                          //确定添加
      // window.console.log(123)
      this.$refs.addForm.validate(flag => {
        if (flag) {
          this.$axios({
            url: "admin/station/add",
            method: "POST",
            data: {
              token: this.token,
              province: this.addForm.province,
              city: this.addForm.city,
              name: this.addForm.name,
              address: this.addForm.address,
            }
          }).then(res => {
             if (res.data.code == 200) {
              this.$Message.success("新增成功")
              this.add_modal = false
              this.showTable()
            } else {
              this.$Message.warning(res.data.msg)
            }
          })
        } else {
          this.$Message.warning("信息填写不完整")
        }
      })
    },
    okEdit () {                         //确定编辑
      this.$refs.editForm.validate(flag => {
        if (flag) {
          this.$axios({
            url: "admin/station/update",
            method: "POST",
            data: {
              token: this.token,
              id: this.station_id,
              name: this.editForm.name,
              province: this.editForm.province,
              city: this.editForm.city,
              address: this.editForm.address,
            }
          }).then(res => {
            // console.log(res)
            if (res.data.code == 200) {
              this.$Message.success("修改成功")
              this.edit_modal = false
              this.showTable()
            } else {
              this.$Message.warning(res.data.msg)
            }
          })
        } else {
          this.$Message.warning('信息填写不完整')
        }
      })
    },
    changePage (e) {
      this.page = e
      this.showTable()
      document.getElementsByClassName("content-wrapper")[0].scrollTop = 0
    },
    //获取省份列表
    getProvince () {
      this.$axios({
        url: "admin/province/all",
        method: "POST",
        data: {
          token: this.token
        }
      }).then(res => {
        if (res.data.code == 200) {
          this.province_list = res.data.province_list
        } else {
          this.$Message.error(res.data.msg)
        }
      }).catch(err => {
        console.log(err)
        // this.$Message.error("网络错误，请稍后重试")
      })
    },
    //获取城市列表
    choose_city (e) {
      // console.log(e)
      this.province_list.forEach(item => {
        if (item.id == e) {
          this.addForm.province = item.name
          this.editForm.province = item.name
        }
      })
      this.$axios({
        url: "admin/city/all",
        method: "POST",
        data: {
          token: this.token,
          province_id: e
        }
      }).then(res => {
        console.log(res)
        if (res.data.code == 200) {
          this.city_list = res.data.city_list
        } else {
          this.$Message.error(res.data.msg)
        }
      })
    },
    resetData () {         //重置表单数据
      this.addForm = {
        name: "",
        province: "",
        city: "",
        address: ""
      }
    },
  }
}
</script>

<style>

</style>