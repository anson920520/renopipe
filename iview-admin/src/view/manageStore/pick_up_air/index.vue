<template>
  <div>
    <Button type="info" style="margin-bottom: 20px" @click="showAddModal">新增机场信息</Button>
    <!-- 新增 -->
    <Modal v-model="add_modal"
      :width='400'
      title="新增机场"
      @on-ok="okAdd">
      <div class='add_wrap'>
        <Form 
          :model="addForm"
          :rules="rule"
          :label-width='100'
          ref='addForm'>
          <FormItem label="机场名" prop="name">
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
          <FormItem label='三字码' prop="code">
            <Input v-model="addForm.code" style="width: 200px;" :maxlength="10"></Input>
          </FormItem>
          <FormItem label="机场地址" prop="address" maxlength="40">
            <Input v-model="addForm.address" style="width: 200px"></Input>
          </FormItem>
        </Form>
      </div>
    </Modal>
    <!-- 编辑 -->
    <Modal v-model="edit_modal"
      :width="400"
      title="修改机场信息"
      :rules="rule"
      :label-width='100'
      @on-ok="okEdit">
      <Form 
        :model="editForm"
        :rules="rule"
        :label-width='100'
        ref='editForm'>
        <FormItem label="机场名" prop="name">
          <Input v-model="editForm.name" placeholder="请输入机场名称" style="width:200px" :maxlength="20"></Input>
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
          <Select v-model='edit_city' style="width: 200px">
            <Option v-for="item in city_list"
              :key="item.id" v-model='item.name'
              :value="item.name">{{item.name}}</Option>
          </Select>
        </FormItem>
        <FormItem label='三字码' prop="code">
          <Input placeholder="三字码" v-model="editForm.code" style="width: 200px;" :maxlength="10"></Input>
        </FormItem>
        <FormItem label="机场地址" prop="address" :maxlength="40">
          <Input placeholder="请输入机场地址" v-model="editForm.address" style="width: 200px"></Input>
        </FormItem>
      </Form>
    </Modal>

    <!-- 展示数据表格 -->
    <Table :data="airport_list" :columns="title_list"></Table>

    <!-- 分页 -->
    <Page class="Page" 
      :current="page"
      align="right"
      show-total
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
      province_list: [],
      province_id: "",
      city_list: "",
      airport_id: "",
      token: localStorage.getItem("jwt"),
      add_modal: false,
      edit_modal: false,
      page: 1,
      total: 0,
      airport_list: [],
      title_list: [
        {title:"机场名", key: "name"},
        {title:"省份", key: "province"},
        {title:"城市", key: "city"},
        {title:"地址", key: "address"},
        {title:"三字码", key: "code"},
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
                    props: {type: "info", size: 'small'},
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
                    props: {type: "error",size: "small"},
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
        address: "",
        code: ""
      },
      editForm: {
        name: "",
        province: "",
        city: "",
        address: "",
        code: ""
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
        ],
        code: [
          {required: true, message: "不能为空", trigger: "blur"}
        ]
      },
      edit_province: "",
      edit_city: "",
      // edit_province_name: "",
      // edit_city_name: ""
    }
  },
  created () {
    this.showTable()
    this.getProvince()
  },
  methods: {
    resetData () {         //重置表单数据
      this.addForm = {
        name: "",
        province: "",
        city: "",
        address: "",
        code: ""
      }
    },
    showAddModal () {
      this.resetData()
      this.getProvince()
      this.add_modal = true
    },
    showTable () {
      this.$axios({
        url: "admin/airport",
        method: "POST",
        data: {
          page: this.page,
          offect: 20,
          token: this.token
        }
      }).then(res => {
        if (res.data.code == 420 || res.data.code != 200) {
          this.$Message.warning('登录信息已过期，请重新登录')
          return
        }
        // console.log(res)
        if (res.data.code == 200) {
          this.airport_list = res.data.data
          this.total = res.data.count
        } else {
          this.$Message.error(res.data.msg)
        }
        
      }).catch(err => {
        console.log(err)
        this.$Message.error('登录信息已过期，请重新登录')
      })
    },
    edit (list) {                   //编辑
      const that = this
      this.getProvince()
      this.edit_modal = true
      window.console.log(list)
      this.editForm.name = list.name
      this.airport_id = list.id
      this.editForm.address = list.address
      this.editForm.province = list.province
      this.editForm.city = list.city
      this.editForm.code = list.code

      this.province_list.forEach(item => {
        // console.log(item.name, list.province)
        if (item.name.slice(0,2) == list.province.trim().slice(0, 2)) {
          that.edit_province = item.id
          this.editForm.province = item.name
        }
      })
      // console.log(that.edit_province)
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
    delete (list) {                     //删除
      this.airport_id = list.id
      // window.console.log(list)
      const that = this
      this.$Modal.confirm({
        title: "提示",
        content: "确定删除？",
        onOk () {
          this.$axios({
            url: "admin/airport/del",
            method:"POST",
            data: {
              token: that.token,
              id: that.airport_id
            }
          }).then(res => {
            console.log(res)
            if (res.data.code == 200) {
              this.$Message.success(res.data.msg)
              this.showTable()
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
            url: 'admin/airport/add',
            method: "POST",
            data: {
              token: this.token,
              province: this.addForm.province,
              city: this.addForm.city,
              address: this.addForm.address,
              name: this.addForm.name,
              code: this.addForm.code,
            }
          }).then(res => {
            // console.log(res)
            if (res.data.code == 200) {
              this.$Message.success("新增成功")
              this.add_modal= false
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
            url: "admin/airport/update",
            method: "POST",
            data: {
              token: this.token,
              province: this.editForm.province,
              address: this.editForm.address,
              id: this.airport_id + "",
              name: this.editForm.name,
              city: this.edit_city,
              code: this.editForm.code
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
  }
}
</script>

<style>

</style>