<template>
  <div>
    <Button type="info" style="margin-bottom: 20px" @click="showAddModal">新增停车场信息</Button>

    <!-- 新增 -->
    <Modal v-model="add_modal"
      :width='400'
      title="新增停车场信息"
      @on-ok="okAdd">
      <div class='add_wrap'>
        <Form 
          :model="addForm"
          :rules="rule"
          :label-width='100'
          ref='addForm'>
          <FormItem label="停车场名" prop="parking_name">
            <Input v-model="addForm.parking_name" style="width:200px" :maxlength="20"></Input>
          </FormItem>
          <FormItem label="电话" prop="park_phone">
            <Input v-model="addForm.park_phone" style="width:200px" :maxlength="20"></Input>
          </FormItem>
          <FormItem label="停车场地址" prop="address" :maxlength="40">
            <Input v-model="addForm.address" style="width: 200px"></Input>
          </FormItem>
          <FormItem label="停车场ID" prop="ID" :maxlength="40">
            <Input v-model="addForm.ID" style="width: 200px"></Input>
          </FormItem>
          <div style="padding: 0 20px;">
            <div class="formItemWrap">
              <RadioGroup v-model="parking_indoor" @on-change="chooseIndoor">
                <Radio label="室内"></Radio>
                <Radio label="室外"></Radio>
              </RadioGroup>
            </div>
            <div class="formItemWrap">
              <RadioGroup v-model="park_type" @on-change="chooseType">
                <Radio label="AIRPORT"></Radio>
                <Radio label="TRAIN"></Radio>
                <Radio label="AIRPORT,TRAIN"></Radio>
              </RadioGroup>
            </div>
            <div>
              <RadioGroup v-model="status" vertical='false' @on-change="chooseStatus">
                <Radio label="车场正常运行，可以收单"></Radio>
                <Radio label="车场车位已满或其他原因，暂不收单"></Radio>
              </RadioGroup>
            </div>
          </div>
        </Form>
      </div>
    </Modal>
    <!-- 编辑 -->
    <Modal v-model="edit_modal"
      :width='400'
      title="修改停车场信息"
      @on-ok="okEdit">
      <div class='add_wrap'>
        <Form 
          :model="editForm"
          :rules="rule"
          :label-width='100'
          ref='editForm'>
          <FormItem label="停车场名" prop="parking_name">
            <Input placeholder="请输入停车场名称" v-model="editForm.parking_name" style="width:200px" :maxlength="20"></Input>
          </FormItem>
          <FormItem label="电话" prop="park_phone">
            <Input placeholder="请输入电话" v-model="editForm.park_phone" style="width:200px" :maxlength="20"></Input>
          </FormItem>
          <FormItem label="停车场地址" prop="address" maxlength="40">
            <Input placeholder="请输入停车场地址" v-model="editForm.address" style="width: 200px"></Input>
          </FormItem>
          <FormItem label="停车场ID" prop="ID" maxlength="40">
            <Input placeholder="请输入停车场ID" v-model="editForm.ID" style="width: 200px"></Input>
          </FormItem>
          <div style="padding: 0 20px;">
            <div class="formItemWrap">
              <RadioGroup v-model="e_parking_indoor" @on-change="e_chooseIndoor">
                <Radio label="室内"></Radio>
                <Radio label="室外"></Radio>
              </RadioGroup>
            </div>
            <div class="formItemWrap">
              <RadioGroup v-model="e_park_type" @on-change="e_chooseType">
                <Radio label="AIRPORT"></Radio>
                <Radio label="TRAIN"></Radio>
                <Radio label="AIRPORT,TRAIN"></Radio>
              </RadioGroup>
            </div>
            <div>
              <RadioGroup v-model="e_status" vertical='false' @on-change="e_chooseStatus">
                <Radio label="车场正常运行，可以收单"></Radio>
                <Radio label="车场车位已满或其他原因，暂不收单"></Radio>
              </RadioGroup>
            </div>
          </div>
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
      company_id: localStorage.getItem("company_id"),
      token: localStorage.getItem("jwt"),
      add_modal: false,
      edit_modal: false,
      page: 1,
      total: 10,
      data_list: [],
      title_list: [
        {title:"停车场名", key: "parking_name"},
        {title:"电话", key: "park_phone"},
        {title:"室内/室外", key: "park_indoor"},
        {title:"车位状态", key: "status"},
        {title:"停车场类别", key: "park_type"},
        {title:"地址", key: "address"},
        // {title: "ID", key: "parking_area_id"},
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
      parking_indoor: "室内",
      park_type: "AIRPORT",
      status: "车场正常运行，可以收单",

      e_parking_indoor: "室内",
      e_park_type: "AIRPORT",
      e_status: "车场正常运行，可以收单",

      addForm: {
        address: "",
        parking_name: "",
        park_indoor: "室内",
        park_phone: "",
        ID: "",
        park_type: "AIRPORT",
        status: "车场正常运行，可以收单"
      },
      editForm: {
        address: "",
        parking_name: "",
        park_indoor: "室内",
        park_phone: "",
        parking_area_id: "",
        ID: "",
        park_type: "AIRPORT",
        status: "车场正常运行，可以收单"
      },

      park_id: "",
      rule: {
        address: [
          {required: true, message: "不能为空", trigger: "blur"}
        ],
        parking_name: [
          {required: true, message: "不能为空", trigger: "blur"}
        ],
        park_indoor: [
          {required: true, message: "不能为空", trigger: "blur"}
        ],
        park_phone: [
          {required: true, message: "不能为空", trigger: "blur"}
        ],
        park_type: [
          {required: true, message: "不能为空", trigger: "blur"}
        ],
        ID: [
          {required: true, message: "不能为空"}
        ]
      }
    }
  },
  created () {
    this.showTable()
  },
  methods: {
    showAddModal () {
      this.resetData()
      this.add_modal = true
    },
    showTable () {
      this.$axios({
        url: "admin/parking",
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
      this.edit_modal = true
      window.console.log(list)
      this.editForm.address = list.address,
      this.editForm.parking_name = list.parking_name,
      this.e_parking_indoor = list.park_indoor,
      this.editForm.park_phone = list.park_phone,
      this.editForm.park_indoor = list.park_indoor,
      this.e_park_type = list.park_type,
      this.e_status = list.status,
      this.editForm.status = list.status,
      this.editForm.ID = list.id
      this.editForm.parking_area_id = list.parking_area_id
    },
    delete (list) {                     //确定删除
      window.console.log(list)
      const that = this
      this.$Modal.confirm({
        title: "提示",
        content: "确定删除？",
        onOk () {
          this.$axios({
            url: "admin/parking/del",
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
              that.$Message.error(res.data.msg)
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
            url: "admin/parking/add",
            method: "POST",
            data: {
              token: this.token,
              address: this.addForm.address,
              parking_name: this.addForm.parking_name,
              park_indoor: this.addForm.park_indoor,
              park_phone: this.addForm.park_phone,
              park_type: this.addForm.park_type,
              pic_list: null,
              status: this.addForm.status,
              parking_area_id: this.addForm.ID
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
            url: "admin/parking/update",
            method: "POST",
            data: {
              token: this.token,
              id: this.editForm.ID,
              parking_area_id: this.editForm.parking_area_id,
              address: this.editForm.address,
              parking_name: this.editForm.parking_name,
              park_indoor: this.editForm.park_indoor,
              park_phone: this.editForm.park_phone,
              park_type: this.editForm.park_type,
              pic_list: null,
              status: this.editForm.status
            }
          }).then(res => {
            // console.log(res)
            if (res.data.code == 200) {
              this.$Message.success("修改成功")
              this.edit_modal = false
              this.showTable()
            } else {
              this.$Message.warning("修改失败")
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
    resetData () {
      this.addForm = {
        address: "",
        parking_name: "",
        park_indoor: "室内",
        park_phone: "",
        park_type: "AIRPORT",
        pic_list: null,
        status: "车场正常运行，可以收单",
        ID: ""
      }
      this.parking_indoor = "室内"
      this.park_type = 'AIRPORT',
      this.status = "车场正常运行，可以收单"
    },
    chooseIndoor (e) {
      this.addForm.park_indoor = e
    },
    chooseStatus (e) {
      this.addForm.status = e
    },
    chooseType (e) {
      this.addForm.park_type = e
    },
    e_chooseIndoor (e) {
      this.editForm.park_indoor = e
    },
    e_chooseStatus (e) {
      this.editForm.status = e
    },
    e_chooseType (e) {
      this.editForm.park_type = e
    }
  }
}
</script>

<style>
.Radio {
  display: block;
}
.formItemWrap {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  border-bottom: 1px #DCDEE2 solid;
  margin: 10px 0;
  padding: 10px 0;
}
</style>