<template>
  <div>
    <div class="sb al">
      <div></div>
      <Button type="info" class="addBtn" @click="showAdd=true">新增工頭賬戶</Button>
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
        <FormItem label="工頭名稱" prop="name">
          <Input type="text" style="width: 200px;" v-model="addForm.name" />
        </FormItem>

        <FormItem label="工頭賬戶" prop="username">
          <Input type="text" style="width: 200px;" v-model="addForm.username" />
        </FormItem>

        <FormItem label="密碼" prop="password">
          <Input type="password" style="width: 200px;" v-model="addForm.password" />
        </FormItem>

        <FormItem label="確認密碼" prop="password2">
          <Input type="password" style="width: 200px;" v-model="addForm.password2" />
        </FormItem>
      </Form>
    </Modal>

    <!-- 新增 -->
    <Modal v-model="showEdit" title="編輯工頭賬戶" :width='400'>
      <Form :model="editForm" :rules='rule' :label-width="100">
        <FormItem label="工頭名稱" prop="name">
          <Input type="text" style="width: 200px;" v-model="editForm.name" />
        </FormItem>

        <FormItem label="工頭賬戶" prop="username">
          <Input type="text" style="width: 200px;" v-model="editForm.username" />
        </FormItem>

        <FormItem label="密碼" prop="password">
          <Input type="password" style="width: 200px;" v-model="editForm.password" />
        </FormItem>

        <FormItem label="確認密碼" prop="password2">
          <Input type="password" style="width: 200px;" v-model="editForm.password2" />
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>

<script>
export default {
  data () {
    //驗證確認密碼
    const validatePassCheck = (rule, value, callback) => {
        if (value === '') {
            callback(new Error('請輸入確認密碼'));
        } else if (value !== this.addForm.password) {
            callback(new Error('兩次密碼不一致'));
        } else {
            callback();
        }
    };
    return {
      showAdd: false,
      showEdit: false,
      columns: [
        { title: "創建日期", key:"createdAt" },
        { title: "全名", key:"fullname" },
        { title: "cName", key:"cName" },
        { title: "暱稱", key:"nickname" },
        { title: "idNo", key:"idNo" },
        { title: "聯繫電話", key:"phone" },
        { title: "位置", key:"position" },
        { title: "操作", slot:"operation" },
      ],
      dataList: [
        {createAt: "2020-06-22", username: "abc123456",name: "金毛"},
      ],
      addForm: {
        name:"",
        username: "",
        password:"",
        password2:"",
      },
      editForm: {
        "fullname": "",
        "cName": "",
        "nickname": "",
        "staffNo": "",
        "idNo": "",
        "position": "",
        "workday": ''
      },
      rule:{
        name: [
          {required:true, message: "請輸入工頭名稱",trigger:"blur" },
        ],
        username: [
          {required:true, message: "請輸入賬戶",trigger:"blur" },
        ],
        password: [
          {required:true, message: "請輸入密碼",trigger:"blur" },
          { pattern:/^\w{6,}$/,message:"密碼不得少於六位", trigger:"blur" },
          
        ],
        password2: [
          {required:true, message: "請輸入確認密碼",trigger:"blur" },
          { pattern:/^\w{6,}$/,message:"密碼不得少於六位", trigger:"blur" },
          { validator: validatePassCheck,trigger:"blur"}
        ]
      },
    }
  },
  created () {
    this.showTable()
  },
  methods:{
    showTable () {
      this.$axios({
        url:"supervisor",
        method:"GET"
      }).then(res => {
        console.log(res,"supervisor")
        if (res.data) {
          this.dataList = res.data
        }
      }).catch(() => {
        this.$Message.error("獲取工賬戶失敗")
      })
    },
    edit (item) {
      console.log(item)
      this.showEdit = true
    },
    Delete (item) {
      console.log(item)

    },
  },
}
</script>

<style>

</style>