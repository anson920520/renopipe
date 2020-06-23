<template>
  <div>
    <div class="sb al">
      <div></div>
      <Button type="info" class="addBtn" @click="showAdd=true">新增工人</Button>
    </div>
    <!-- 表格展示 -->
    <Table :columns="columns" :data="dataList" >
      <template slot-scope="{row}" slot="operation">
        <div>
          <Button size="small" class="editBtn" @click="edit(row)">編輯</Button>
          <Button size="small" type="error" @click="Delete(row)">刪除</Button>
        </div>
      </template>
    </Table>

    <!-- 新增 -->
    <Modal v-model="showAdd" @on-ok="okAdd" title="新增工人賬戶" :width='400'>
      <Form :model="addForm" ref="addForm" :rules='rule' :label-width="100">
        <FormItem label="工人全名" prop="fullname">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="addForm.fullname" placeholder="請輸入全名" />
        </FormItem>

        <FormItem label="工人中文名" prop="cName">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="addForm.cName" placeholder="請輸入中文名" />
        </FormItem>

        <FormItem label="暱稱" prop="nickname">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="addForm.nickname" placeholder="請輸入暱稱" />
        </FormItem>

        <FormItem label="身份證號" prop="idNo">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="addForm.idNo" placeholder="請輸入身份證號" />
        </FormItem>

        <FormItem label="聯繫電話" prop="phone">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="addForm.phone" placeholder="請輸入聯繫電話" />
        </FormItem>

        <FormItem label="position" prop="position">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="addForm.position" placeholder="請輸入position" />
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showAdd: false,
      showEdit:false,
      columns: [
        { title: "創建日期", key:"createdAt" },
        { title: "身份證號", key:"idNo" },
        { title: "全名", key:"fullname" },
        { title: "中文名", key:"cName" },
        { title: "暱稱", key:"nickname" },
        { title: "聯繫電話", key:"phone" },
        { title: "position", key:"position" },
        // { title: "工頭(經理)", key:"master" },
        { title: "操作", slot:"operation" },
      ],
      dataList: [],
      addForm:{
        "fullname": "",
        "cName": "",
        "nickname": "",
        "idNo": "",
        "position": ""
      },
      editForm:{
        "fullname": "",
        "cName": "",
        "nickname": "",
        "idNo": "",
        "position": ""
      },
      rule:{
        fullname: [
          {required:true, message: "請輸入全名",trigger:"blur" },
        ],
        cName: [
          {required:true, message: "請輸入中文名",trigger:"blur" },
        ],
        nickname: [
          {required:true, message: "請輸入暱稱",trigger:"blur" },
        ],
        phone: [
          {required:true, message: "請輸入聯繫電話",trigger:"blur" },
        ],
        staffNo: [
          {required:true, message: "請輸入工人編號",trigger:"blur" },
        ],
        idNo: [
          {required:true, message: "請輸入身份證號",trigger:"blur" },
        ],
        position: [
          {required:true, message: "請輸入position",trigger:"blur" },
        ],
      },
    }
  },
  created () {
    this.showTable()
  },
  methods:{
    okAdd () {
      let that = this
      that.$refs.addForm.validate(flag => {
        if (flag) {
          that.$axios({
            url:'worker',
            method:"POST",
            data: {
              "fullname": that.addForm.fullname,
              "cName": that.addForm.cName,
              "nickname": that.addForm.nickname,
              "idNo": that.addForm.idNo,
              "position": that.addForm.position,
              phone: that.addForm.phone
            },
          }).then(res => {
            console.log("add",res)
            if (res.data) {
              that.$Message.success('已新增工人')
              that.showTable()
              that.showAdd = false
            } else {
              that.$Message.warning("新增失敗")
            }
          }).catch(() => {
            that.$Message.error("新增失敗")
          })
        }
        that.hideLoading()
      }) 
      
    },
    okEdit () {

    },
    showTable () {
      this.$axios({
        url:"worker",
        method:"GET"
      }).then(res => {
        console.log(res,"worker")
        if (res.data) {
          this.dataList = res.data
        }
      }).catch(() => {
        this.$Message.error("獲取工人失敗")
      })
    },
    hideLoading() {
      this.loading = false
      this.$nextTick(() => {
        this.loading = true
      })
    },
    keydown () {
      if (this.showAdd) {
        this.okAdd()
      } else if (this.editForm) {
        this.okEdit()
      }
    },
  }
}
</script>

<style lang="less" scoped>

</style>