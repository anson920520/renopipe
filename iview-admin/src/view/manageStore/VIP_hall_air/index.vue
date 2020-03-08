<template>
  <div>
    <Button type="info" style="margin-bottom: 20px" @click="showAddModal">新增机场贵宾厅信息</Button>

    <!-- 新增 -->
    <Modal v-model="add_modal"
      :width='600'
      title="新增机场贵宾厅信息"
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

          <FormItem label="航站楼" prop="terminal">
            <Input placeholder="请输入航站楼" v-model="addForm.terminal" style="width:300px" :maxlength="40"></Input>
          </FormItem>
          
          <FormItem label="贵宾厅地址" prop="address" :maxlength="50">
            <Input placeholder="请输入贵宾厅地址" v-model="addForm.address" style="width: 300px"></Input>
          </FormItem>

          <FormItem label="开放时间" prop="openingtime">
            <!-- <Time-picker :value="time" 
              format="HH:mm"
              v-model="time"
              type="timerange" 
              placement="bottom-end" 
              placeholder="选择时间" 
              style="width: 200px"></Time-picker> -->
              <Input placeholder="请输入开放时间" v-model="addForm.openingtime" style="width: 300px" :maxlength="40"></Input>
          </FormItem>
          
          <div style="text-align: center;">
            <RadioGroup v-model="position" @on-change="choosePosition">
              <Radio label="安检内"></Radio>
              <Radio label="安检外"></Radio>
            </RadioGroup>
          </div>
        </Form>
      </div>
    </Modal>
    <!-- 编辑 -->
    <Modal v-model="edit_modal"
      :width='600'
      title="修改机场贵宾厅信息"
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

          <FormItem label="航站楼" prop="terminal">
            <Input v-model="editForm.terminal" style="width:300px" :maxlength="40"></Input>
          </FormItem>
          
          <FormItem label="贵宾厅地址" prop="address" :maxlength="40">
            <Input v-model="editForm.address" style="width: 300px"></Input>
          </FormItem>

          <FormItem label="开放时间" prop="openingtime">
            <!-- <Time-picker :value="time" 
              format="HH:mm"
              v-model="e_time"
              type="timerange" 
              placement="bottom-end" 
              placeholder="选择时间" 
              style="width: 200px"></Time-picker> -->
              <Input v-model="editForm.openingtime" style="width: 300px" :maxlength="40"></Input>
          </FormItem>
          
          <div style="text-align: center;">
            <RadioGroup v-model="e_position" @on-change="e_choosePosition">
              <Radio label="安检内"></Radio>
              <Radio label="安检外"></Radio>
            </RadioGroup>
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
      token: localStorage.getItem("jwt"),
      add_modal: false,
      edit_modal: false,
      data_list: [],
      page: 1,
      total: 0,
      title_list: [
        {title:"贵宾厅名", key: "name"},
        {title:"航站楼", key: "terminal"},
        {title:"位置", key: "position"},
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
        name: "",
        terminal: "",       //航站楼
        address: "",
        openingtime: ''
      },
      position: '安检内',
      rule: {
        name: [
          {required: true, message: "不能为空", trigger: "blur"}
        ],
        terminal: [
          {required: true, message: "不能为空", trigger: "blur"}
        ],
        address: [
          {required: true, message: "不能为空", trigger: "blur"}
        ],
        openingtime: [
          {required: true, message: "不能为空", trigger: "blur"}
        ]
      },
      editForm: {
        name: "",
        terminal: "",       //航站楼
        address: "",
        openingtime: ""
      },
      e_position: "安检内",
      id: ""
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
        url: "admin/viproom/airport",
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
      this.e_position = list.position
      this.editForm.terminal = list.terminal
      this.editForm.openingtime =list.openingtime
      this.e_position = list.position
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
            url: "admin/viproom/airport/del",
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
            url: "admin/viproom/airport/add",
            method: "POST",
            data: {
              token: this.token,
              name: this.addForm.name,
              address: this.addForm.address,
              position: this.position,
              terminal: this.addForm.terminal,
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
            url: "admin/viproom/airport/update",
            method: "POST",
            data: {
              token: this.token,
              name: this.editForm.name,
              address: this.editForm.address,
              terminal: this.editForm.terminal,
              openingtime: this.editForm.openingtime,
              position: this.e_position,
              id: this.id
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
    choosePosition (e) {
      this.position = e
    },
    e_choosePosition (e) {
      this.e_position = e
    }
  }
}
</script>

<style>

</style>