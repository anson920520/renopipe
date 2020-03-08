<template>
  <div id="App">
    <!-- 修改 -->
    <Button style="margin-left: 10px;margin-right: 5px" type="info" @click="add">新增商户</Button> 

    <Modal
      v-model="showAdd"
      title="添加商户"
      @on-ok="okAdd"
      :width='400'>
      <Form :model="formData" ref="formData" :rules="rule" :label-width='100'>
        <FormItem label="供应商" prop="sp_id">
          <Select v-model="formData.sp_id" style="width:200px">
            <Option v-for="item in sp_list" :value="item.id" :key="item.id">{{ item.sp_name }}</Option>
          </Select>
        </FormItem>

        <FormItem label="门店名称" prop="name">
          <Select v-model="formData.name" style="width:200px">
            <Option v-for="item in new_store" :value="item.id" :key="item.id">{{ item.name }}</Option>
          </Select>
        </FormItem>

        <FormItem label="用户名" prop="username">
          <Input type="text" placeholder="'请输入用户名" v-model="formData.username" style="width: 200px" :maxlength="30"  @on-keyup="enter"/>
        </FormItem>

        <FormItem label="密码" prop="password">
          <div class="passwordWrap">
            <Input placeholder="'请输入密码" :type='inputType' v-model="formData.password" style="width: 200px" :maxlength="20" @on-keyup="enter"></Input>
            <Icon @click="changeEye('text')" size='20' v-if="inputType=='password'" class="passwordEye" type="md-eye-off" />
            <Icon @click="changeEye('password')" size='20' v-if="inputType=='text'" class="passwordEye" type="md-eye" />
          </div>
        </FormItem>
      </Form>

      <div>
        <h5>提示:</h5>
        <p>　　需要先在服务网点管理内的<span @click="toService_CXJ" class="toService_CXJ"> 车享家服务 </span>页面添加新门店，再到此处为新门店设置绑定账号</p>
      </div>
    </Modal>

    <Modal title="修改" v-model="showEdit" :width="400" @on-ok="okEdit">
      <Form
        :label-width="100"
        :rules="rule"
        ref="editData"
        :model="editData">
        <FormItem label="旧密码" prop="old_password">
          <Input placeholder="'请输入旧密码" v-model="editData.old_password" style="width: 200px" :maxlength="30" @on-keyup="enter"></Input>
        </FormItem>
        <FormItem label="新密码" prop="password">
          <Input v-model="editData.password" placeholder="'请输入新密码" style="width: 200px" :maxlength="30" @on-keyup="enter"></Input>
        </FormItem>
      </Form>
    </Modal>

    <!-- 展示数据表格 -->
    <Table
      :columns="columns"
      style="marginTop: 10px"
      :data="dataList"></Table>

    <!-- 分页器 -->
    <div class="pageWrap">
      <Page
        :total="total"  
        :page-size="20" 
        :current.sync="page" 
        show-total
        @on-change="changePage"
      ></Page>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: "store_page",
  data () {
    return {
      showAdd: false,
      showEdit: false,
      editData: {
        id: "",
        username: "",
        old_password: "",
        password: ""
      },
      formData: {           //  表单数据
        sp_id: null,
        name: "",
        username: "",
        password: ""
      },
      rule: {
        sp_id: [
          {required: true,message: "不能为空"}
        ],
        name: [
          {required: true,message: "不能为空"}
        ],
        username: [
          {required: true,message: "不能为空", trigger: "blur"},
        ],
        password: [
          {required: true,message: "不能为空", trigger: "blur"},
          {pattern: /^\w+$/, message: "请输入数字或英文", trigger: "blur"}
        ],
        old_password: [
          {required: true, message: "不能为空", trigger: 'blur'},
        ],
        password: [
          {required: true, message: "不能为空", trigger: 'blur'},
          {min: 6, message: "密码不得少于6位", trigger: 'blur'}
        ]
      },
      page: 1,
      offect: 20,
      total: 0,
      dataList: [],
      columns: [
        {
          title:"公司",
          key:"company_name"
        },
        {
          title: "账号",
          key: "username"
        },
        {
          title:"门店",
          key: "store_name",
          render: (h, data) => {
            return h(
              "div",
              {},
              data.row.store_id ? data.row.store_name : ""
            )
          }
        },
        {
          title:"是否绑定微信",
          key: "wechat_union",
          render: (h, data) => {
            return h(
              "Tag",
              {
                props: {
                  color: data.row.wechat_union ? "success" : "error"
                }
              },
              data.row.wechat_union ? "已绑定" : "未绑定"
            )
          }
        },
        {
          title: "操作",
          render: (h, params) => {
            return h(
              "div",{
                style: {
                  // border: "solid black 1px",
                  display: 'flex'
                }
              },
              [
                h(
                  "Button",
                  {
                    props: {
                      type: "info",
                      size: "small"
                    },
                    style: {
                      margin: "5px",
                    },
                    on: {
                      click: () => {
                        this.edit(params.row)
                      }
                    }
                  },
                  '修改密码'
                ),
                h(
                  "Button",
                  {
                    props: {
                      type: "error",
                      size: "small"
                    },
                    style: {
                      margin: "3px",
                      
                    },
                    on: {
                      click: () => {
                        this.delete(params.row)
                      }
                    }
                  },
                  "删除"
                ), 
                !params.row.wechat_union ? null : h(
                  "Button",
                  {
                    props: {
                      type: "error",
                      size: "small"
                    },
                    style: {
                      margin: "3px"
                    },
                    on: {
                      click: () => {
                        this.unbind(params.row)
                      }
                    }
                  },
                  "解绑微信"
                )
              ]
            )
          }
        }
      ],
      new_store: [],
      new_store_id: '',
      sp_list: [
        {id: 2, sp_name: '车享家'},
        {id: 4, sp_name: '小橘养车'}
      ],
      sp_id: "",
      inputType: 'password'
    }
  },
  created () {
    this.showTable()
  },
  methods: {
    enter (e) {
      if (e.keyCode == 13) {
        if (this.showAdd) {
          this.okAdd()
        } else if (this.showEdit) {
          this.okEdit()
        }
      }
    },

    toService_CXJ () {
      this.$router.push({
        path: "/service_CXJ"
      })
    },
    add () {
      this.showAdd = true
      //获取所有未绑定账号的门店
      this.$axios({
        url: "admin/store/unbind/" ,
        method: "POST",
        data: {
          token: localStorage.getItem('jwt'),
          page: 1,
          offect: 8
        }
      }).then(res => {
        this.new_store = res.data.data
      })
      //获取所有供应商
      this.getProvider()
    },
    okAdd () {
      this.$refs.formData.validate(flag => {
        if (flag) {
          this.$axios({
            url: "admin/add/suser",
            method: "POST",
            data: {
              // token: null,
              token: localStorage.getItem("jwt"),
              role_id: 2,
              company_id: this.formData.sp_id,
              store_id: this.formData.name,
              username: this.formData.username,
              password: this.formData.password,
              name: this.formData.name
            }
          }).then(res => {
            // console.log(res)
            if (res.data.code == 200) {
              this.$Message.success(res.data.msg)
              this.showAdd = false
              this.showTable()
            } else {
              this.$Message.error(res.data.msg)
            }
          }).catch(err => {
            console.log(err)
            this.$Message.error("网络错误，请稍重试")
          })
        } else {
          this.$Message.warning('信息填写不完整')
        }
      })
    },
    edit (list) {                      //修改信息
      // console.log(list)
      for (let attr in this.editData) {
        this.editData[attr] = ''
      }
      this.editData.username = list.username
      this.showEdit = true
      this.editData.id = list.id
    },
    okEdit () {
      this.$refs['editData'].validate(flag => {
        if (flag) {
          this.$axios({
            url: "admin/update/suser",
            method: "POST",
            data: {
              id: this.editData.id,
              username: this.editData.username,
              old_password: this.editData.old_password,
              password: (this.editData.password),
              token: localStorage.getItem('jwt')
            }
          }).then(res => {
            // console.log(res)
            if (res.data.code == 400) {
              //原密码不正确 || 修改失败
              this.$Message.error(res.data.msg)
            } else if (res.data.code == 200) {
              this.$Message.success(res.data.msg)
              this.showTable()
              this.showEdit = false
            }
          })
        } else {
          this.$Message.error('信息填写不完整')
        }
      })
    },
    delete (list) {                     //删除信息
      // console.log(list)
      this.$Modal.confirm({
        title: "提示",
        content: "确定删除？",
        onOk: () => {
          this.$axios({
            url: "admin/delete/suser",
            method: "POST",
            data: {
              token: localStorage.getItem("jwt"),
              id: list.id
            }
          }).then(res => {
            // console.log(res)
            if (res.data.code == 200) {
              this.showTable()
              this.$Message.success(res.data.msg)
            } else {
              this.$Message.error(res.data.msg)
            }
          })
        }
      })
    },
    unbind (list) {
      console.log(list)
      this.$Modal.confirm({
          title: "提示",
          content: "确定解除微信绑定？",
          onOk: () => {
              this.$axios({
                  url: "admin/store/relieve_wechat",
                  method: "POST",
                  data: {
                      token: localStorage.getItem("jwt"),
                      id: list.id
                  }
              }).then(res => {
                  console.log(222, res)
                  if (res.data.code == 200) {
                      this.showTable()
                      this.$Message.success(res.data.msg)
                  } else {
                      this.$Message.error(res.data.msg)
                  }
              })
          }
      })
    },
    showTable () {                      //获取展示数据
      this.$axios({
        method: "POST",
        url: "admin/show/suser/",
        data: {
          token: localStorage.getItem("jwt"),
          page: this.page,
          offect: this.offect
        }
      }).then(res => {
        if (res.data.code == 420 || res.data.code != 200) {
            this.$Message.warning('登录信息已过期，请重新登录')
            return
        }
        // console.log(res)
        this.total = res.data.counts      //修改分页器总数
        this.dataList = res.data.data
        if (res.data.data.length == 0 && this.page >= 2) {
            this.page--
            this.showTable()
        }
      }).catch(err => {
        console.log(err)
        this.$Message.error('登录信息已过期，请重新登录')
      })
    },
    changePage (e) {                      //修改当前页数
      this.page = e
      this.showTable()
      document.getElementsByClassName("content-wrapper")[0].scrollTop = 0
    },
    changeEye (data) {
      this.inputType = data
    },
    getProvider () {
      this.$axios({
        url: "admin/stores/provider",
        method: "POST",
        data: {
          token: localStorage.getItem("jwt")
        }
      }).then(res => {
        console.log("供应商", res)
        this.sp_list = res.data.data
      })
    },
  }
}
</script>

<style>
.pageWrap {
  display: flex;
  justify-content: flex-end;
}
.passwordWrap {
  position: relative;
}
.passwordEye {
  position: absolute;
  right: 72px;
  top: 7px; 
}
.toService_CXJ {
  color: #1A73E8;
  font-size: 13px;
  font-weight: bold;
  cursor: pointer;
}
</style>