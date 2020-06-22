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
    <Modal v-model="showAdd" title="新增工頭賬戶" :width='400'>
      <Form :model="addForm" :rules='rule' :label-width="100">
        <FormItem label="工人編號" prop="number">
          <Input type="text" style="width: 200px;" v-model="addForm.number" />
        </FormItem>

        <FormItem label="工人名稱" prop="name">
          <Input type="text" style="width: 200px;" v-model="addForm.name" />
        </FormItem>

        <FormItem label="工作種類" prop="password">
          <Input type="text" style="width: 200px;" v-model="addForm.type" />
        </FormItem>

        <FormItem label="所屬工頭" prop="password2">
          <Input type="text" style="width: 200px;" v-model="addForm.master" />
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
        { title: "工人編號", key:"idNo" },
        { title: "全名", key:"fullname" },
        { title: "中文名", key:"cName" },
        { title: "暱稱", key:"nickname" },
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

      },
    }
  },
  created () {
    this.showTable()
  },
  methods:{
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
  }
}
</script>

<style lang="less" scoped>

</style>