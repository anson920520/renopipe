<template>
  <div>
    <Button type="info" style="margin-bottom: 20px" @click="showAddModal">新增个高铁贵宾厅信息</Button>

    <!-- 新增 -->
    <Modal v-model="add_modal"
      :width='600'
      title="新增高铁贵宾厅信息"
      @on-ok="okAdd">
      <div class='add_wrap'>
        <Form 
          :model="addForm"
          :rules="rule"
          :label-width='150'
          ref='addForm'>
          <FormItem label="贵宾厅名" prop="name">
            <Input placeholder="请输入贵宾厅名称" v-model="addForm.name" style="width:300px" :maxlength="40"></Input>
          </FormItem>

          <FormItem label="省份" prop="province">
            <Select v-model="province_id" 
              @on-change="choose_city"
              style="width: 300px;">
              <Option v-for="item in province_list" 
                v-model="item.id"
                :key="item.id">{{item.name}}</Option>
            </Select>
          </FormItem>

          <FormItem label='城市' prop="city">
            <Select v-model="addForm.city" style="width: 300px">
              <Option v-for="item in city_list"
                :key="item.id" 
                :value="item.name">{{item.name}}</Option>
            </Select>
          </FormItem>

          <FormItem label="贵宾厅地址" prop="address" :maxlength="50">
            <Input placeholder="请输入机贵宾厅地址" v-model="addForm.address" style="width: 300px"></Input>
          </FormItem>

          <FormItem label="开放时间" prop="openingtime">
              <Input placeholder="请输入开放时间" v-model="addForm.openingtime" style="width: 300px" :maxlength="40"></Input>
          </FormItem>
        </Form>
      </div>
    </Modal>
    <!-- 编辑 -->
    <Modal v-model="edit_modal"
      :width='600'
      title="修改高铁贵宾厅信息"
      @on-ok="okEdit">
      <div class='add_wrap'>
        <Form 
          :model="editForm"
          :rules="rule"
          :label-width='150'
          ref='editForm'>
          <FormItem label="贵宾厅名" prop="name">
            <Input v-model="editForm.name" style="width:300px" :maxlength="40"></Input>
          </FormItem>

          <!-- <FormItem label="省份" prop="province">
            <Select v-model="e_province_id" 
              @on-change="e_choose_city"
              style="width: 300px;">
              <Option v-for="item in province_list" 
                v-model="item.id"
                :key="item.id">{{item.name}}</Option>
            </Select>
          </FormItem>
          
          <FormItem label='城市' prop="city">
            <Select v-model="e_city" style="width: 300px" @on-change="selectCity">
              <Option v-for="item in e_city_list"
                :key="item.id" 
                :value="item.name">{{item.name}}</Option>
            </Select>
          </FormItem> -->

          <FormItem label="贵宾厅地址" prop="address" :maxlength="40">
            <Input v-model="editForm.address" style="width: 300px"></Input>
          </FormItem>

          <FormItem label="开放时间" prop="openingtime">
            <Input v-model="editForm.openingtime" style="width: 300px" :maxlength="40"></Input>
          </FormItem>
        </Form>
      </div>
    </Modal>
    <!-- 展示数据表格 -->
    <Table :data="data_list" :columns="title_list"></Table>

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
      province_id: '', 
      province_list: [],
      city_list: [],
      e_city_list: [],
      token: localStorage.getItem("jwt"),
      add_modal: false,
      edit_modal: false,
      data_list: [],
      page: 1,
      total: 0,
      title_list: [
        {title:"省份", key: "province"},
        {title:"城市", key: "city"},
        {title:"高铁名", key: "name"},
        {title:"开放时间", key: "openingtime"},
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
        province: "",
        city: '',
        name: "",
        address: "",
        openingtime: ""
      },
      rule: {
        name: [
          {required: true, message: "不能为空", trigger: "blur"}
        ],
        province: [
          {required: true, message: "不能为空", trigger: "change"}
        ],
        address: [
          {required: true, message: "不能为空", trigger: "blur"}
        ],
        openingtime: [
          {required: true, message: "不能为空", trigger: "blur"}
        ],
        city: [
          {required: true, message: "不能为空", trigger: "blur"}
        ]
      },
      editForm: {
        name: "",
        address: "",
        openingtime: "",
        province: "",
        city: ""
      },
      e_province_id: "",
      e_city: "",
      id: "",

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
    },
    showTable () {
      this.$axios({
        url: "admin/viproom/station",
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
          this.data_list = res.data.data
        } else {
          this.$Message.error(res.data.msg)
        }
        
      }).catch(err => {
        this.$Message.error('登录信息已过期，请重新登录')
      })
    },
    edit (list) {
      window.console.log(list)
      this.editForm.name = list.name
      this.editForm.address = list.address
      this.editForm.openingtime =list.openingtime
// this.e_province_id = 4
      this.editForm.province = list.province
      this.e_city = list.city
      this.editForm.city = list.city
      
      this.edit_modal = true
      this.id = list.id
      window.console.log(list)
    },
    delete (list) {                     //确定删除
      // window.console.log(list)
      const that = this
      this.$Modal.confirm({
        title: "提示",
        content: "确定删除？",
        onOk () {
          this.$axios({
            url: "admin/viproom/station/del",
            method: "POST",
            data: {
              token: that.token,
              id: list.id
            }
          }).then(res => {
            // console.log(res)
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
      this.$refs.addForm.validate(flag => {
        if (flag) {
          this.$axios({
            url: "admin/viproom/station/add",
            method: "POST",
            data: {
              token: this.token,
              name: this.addForm.name,
              address: this.addForm.address,
              openingtime: this.addForm.openingtime,
              province: this.addForm.province,
              city: this.addForm.city,
              openingtime: this.addForm.openingtime
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
            url: "admin/viproom/station/update",
            method: "POST",
            data: {
              token: this.token,
              name: this.editForm.name,
              address: this.editForm.address,
              openingtime: this.editForm.openingtime,
              id: this.id,
              province: this.editForm.province,
              city: this.editForm.city
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
    resetData () {         //重置表单数据
      this.addForm = {
        name: "",
        terminal: "",
        address: ""
      }
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
        this.$Message.error("网络错误，请稍后重试")
      })
    },
    choose_city (e) {
      this.province_list.forEach(item => {
        if (item.id == e) {
          this.addForm.province = item.name
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
    e_choose_city (e) {
      this.province_list.forEach(item => {
        if (item.id == e) {
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
          this.e_city_list = res.data.city_list
        } else {
          this.$Message.error(res.data.msg)
        }
      })
    },
    selectCity (e) {
      console.log(e)
      this.editForm.province = e
    }
  }
}
</script>

<style>

</style>