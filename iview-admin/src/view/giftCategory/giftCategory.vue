<template>
  <div>
    <Button type="info" @click="showAdd = true">新增</Button>
    <Table :data="dataList" :columns='columns'></Table>
    <div style="text-align: right">
      <Page :total="count" :page-size="offect" show-total class="paging" @on-change="changepage"></Page>
    </div>

    <Modal v-model="showAdd" title="新增礼品类别" @on-ok="okAdd" >
      <Form ref="addForm" :rules="rule" :model="addForm" :label-width="130">
        <FormItem label='类别名称' prop='category_name'>
          <Input type="text" @on-keyup.enter='okAdd' v-model="addForm.category_name" :maxlength="20" placeholder="请输入礼品类别名称" style="width: 250px;" />
        </FormItem>

        <FormItem label='类别名称' prop='category_description'>
          <textarea @keydown.enter="okAdd" v-model="addForm.category_description" placeholder="请输入礼品类别描述" maxlength="1000" style="width: 250px;"></textarea>
        </FormItem>
      </Form>
    </Modal>

    <Modal v-model="showEdit" title="编辑礼品类别" @on-ok="okEdit" >
      <Form ref="editForm" :rules="rule" :model="editForm" :label-width="130">
        <FormItem label='类别名称' prop='category_name'>
          <Input type="text" @on-keyup.enter='okEdit' v-model="editForm.category_name" :maxlength="20" placeholder="请输入礼品类别名称" style="width: 250px;" />
        </FormItem>

        <FormItem label='类别名称' prop='category_description'>
          <textarea @keydown.enter="okEdit" v-model="editForm.category_description" placeholder="请输入礼品类别描述" maxlength="1000" style="width: 250px;"></textarea>
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>

<script>
export default {
  data () {
    const that = this
    return {
      showAdd: false,
      showEdit: false,
      page: 1,
      offect: 20,
      count:0,
      dataList: [],
      columns: [
        {title: '类别名', key: "category_name"},
        {title: "类别描述", key: "category_description"},
        {title: "操作",
          render: (h, params) => {
             return h(
                "div",
                [
                  h("Button",
                    {
                      props: {
                        type:'info',
                        size: "small"
                      },
                      on: {
                        click: () => {that.edit(params.row) }
                      }
                    },
                    '编辑'
                  ),
                  h("Button",
                    {
                      props: {
                        type: "error",
                        size: "small"
                      },
                      on: {
                        click: () => {that.delete(params.row)}
                      },
                      style: {
                        "margin-left": "7px"
                      }
                    },
                    "删除"
                  )
                ]
             )
          }
        }
      ],
      rule: {
        category_name: [
          {required: true, message: "请输入礼品类别名称", trigger: "blur"}
        ],
        category_description: [
          {required: true, message: "请输入礼品类别描述", trigger: "blur"}
        ]
      },
      addForm: {
        category_name: "",
        category_description: ""
      },
      editForm: {
        category_name: "",
        category_description: ""
      },
      id: ""
    }
  },
  created () {
    this.showTable()
  },
  methods: {
    showTable () {
      this.$axios({
        url: "admin/giftCategory/all",
        method: "POST",
        data: {
          page: this.page,
          offect: this.offect,
          token: localStorage.getItem("jwt")
        }
      }).then(res => {
        console.log(res)
        if (res.data.code == 200) {
          //删除最后一条，自动返回上一页
          if (res.data.data.length == 0 && this.page >= 2) {
              this.page--
              this.showTable()
          }
          this.dataList = res.data.data
          this.count = res.data.count
        } else {
          this.$Message.warning(res.data.msg)
        }
      })
    },
    changepage (e) {
      this.page = e
      this.showTable()
      document.getElementsByClassName("content-wrapper")[0].scrollTop = 0
    },
    okAdd () {
      const that = this
      that.$refs.addForm.validate(flag => {
        if (flag) {
          that.$axios({
            url: "admin/giftCategory/create",
            method: "POST",
            data: {
              category_name: that.addForm.category_name,
              category_description: that.addForm.category_description,
              token: localStorage.getItem("jwt")
            }
          }).then(res => {
            if (res.data.code == 200) {
              that.$Message.success("新增成功")
              this.showAdd = false
              that.showTable()
            } else {
              that.$Message.warning(res.data.msg)
            }
          })
        } else {
          that.$Message.warning("格式不正确")
        }
      })
    },
    delete (list) {
      this.$Modal.confirm({
        title: '删除',
        content: "确定删除？",
        onOk: () => {
          this.$axios({
            url: "admin/giftCategory/delete",
            method: "POST",
            data: {
              token: localStorage.getItem("jwt"),
              id: list.id
            }
          }).then(res => {
            console.log(res)
            if (res.data.code == 200) {
              this.$Message.success('删除成功')
            } else {
              this.$Message.warning('删除失败')
            }
            this.showTable()
          }).catch((err) => {
            this.$Message.error("网络错误，请重试")
          })
        }
      })
    },
    edit(list) {
      console.log(list)
      this.showEdit = true
      this.editForm.category_name = list.category_name
      this.editForm.category_description = list.category_description
      this.id = list.id
    },
    okEdit () {
      const that = this
      this.$refs.editForm.validate(flag => {
        if (flag) {
          that.$axios({
            url: "admin/giftCategory/edit",
            method: "POST",
            data: {
              id: that.id,
              token: localStorage.getItem("jwt"),
              category_name: that.editForm.category_name,
              category_description: that.editForm.category_description
            }
          })
          .then(res => {
            console.log('编辑', res)
            if (res.data.code == 200) {
              that.$Message.success('修改成功')
              that.showTable()
              that.showEdit = false
            } else {
              that.$Message.warning(res.data.msg)
            }
          }).catch(err => {
            that.$Message.error("网络错误")
          })
        } else {
          that.$Message.warning("格式错误")
        }
      })
    }
  }
}
</script>

<style>

</style>