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
          <Button size="small" class="noBorder" type="error" @click="Delete(row)">刪除</Button>
        </div>
      </template>
    </Table>


    <!-- 新增 -->
    <Modal @on-ok="okAdd" v-model="showAdd" :loading="loading" title="新增工頭賬戶" :width='400'>
      <Form :model="addForm" ref="addForm" :rules='rule' :label-width="100">
        <FormItem label="工頭全名" prop="fullname">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="addForm.fullname" placeholder="請輸入全名" />
        </FormItem>

        <FormItem label="工頭中文名" prop="cName">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="addForm.cName" placeholder="請輸入中文名" />
        </FormItem>

        <FormItem label="暱稱" prop="nickname">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="addForm.nickname" placeholder="請輸入暱稱" />
        </FormItem>

        <FormItem label="聯繫電話(用於登錄)" prop="phone">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="addForm.phone" placeholder="請輸入聯繫電話" />
        </FormItem>

        <FormItem label="工頭編號" prop="staffNo">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="addForm.staffNo" placeholder="請輸入工頭編號" />
        </FormItem>

        <FormItem label="身份證號" prop="idNo">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="addForm.idNo" placeholder="請輸入身份證號" />
        </FormItem>

        <FormItem label="職位" prop="position">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="addForm.position" placeholder="請輸入職位" />
        </FormItem>

        <FormItem label="工作時長" prop="workday">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="addForm.workday" placeholder="請輸入工作時長" />
        </FormItem> 
        
        <FormItem label="密碼" prop="password">
          <Input type="password" style="width: 200px;" v-model="addForm.password" />
        </FormItem>

        <FormItem label="確認密碼" prop="password2">
          <Input type="password" style="width: 200px;" v-model="addForm.password2" />
        </FormItem>
      </Form>
    </Modal>

    <!-- 編輯 -->
    <Modal @on-ok="okEdit" v-model="showEdit" :loading="loading" title="編輯工頭賬戶" :width='400'>
      <Form :model="editForm" ref="editForm" :rules='rule' :label-width="100">
        <FormItem label="工頭全名" prop="fullname">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="editForm.fullname" placeholder="請輸入全名" />
        </FormItem>

        <FormItem label="工頭中文名" prop="cName">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="editForm.cName" placeholder="請輸入中文名" />
        </FormItem>

        <FormItem label="暱稱" prop="nickname">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="editForm.nickname" placeholder="請輸入暱稱" />
        </FormItem>

        <FormItem label="聯繫電話(用於登錄)" prop="phone">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="editForm.phone" placeholder="請輸入聯繫電話" />
        </FormItem>

        <FormItem label="工頭編號" prop="staffNo">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="editForm.staffNo" placeholder="請輸入工頭編號" />
        </FormItem>

        <FormItem label="身份證號" prop="idNo">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="editForm.idNo" placeholder="請輸入身份證號" />
        </FormItem>

        <FormItem label="職位" prop="position">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="editForm.position" placeholder="請輸入職位" />
        </FormItem>

        <!-- <FormItem label="工作時長" prop="workday">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="editForm.workday" placeholder="請輸入工作時長" />
        </FormItem> -->

        <!-- <FormItem label="工頭賬戶" prop="username">
          <Input type="text" style="width: 200px;" v-model="editForm.username" />
        </FormItem> -->

        <FormItem label="密碼" prop="passworda">
          <Input type="password" style="width: 200px;" v-model="editForm.password" />
        </FormItem>

        <FormItem label="確認密碼" prop="password2a">
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
      loading:true,
      columns: [
        { title: "創建日期", key:"createdAt" },
         { title: "全名", key:"fullname" },
         { title: "中文名", key:"cName" },
         { title: "暱稱", key:"nickname" },
        // { title: "身份證號", key:"idNo" },
         { title: "聯繫電話(用作登入)", key:"phone" },
         //{ title: "工號", key:"supervisorNo" },
         //{ title: "位置", key:"position" },
         { title: "操作", align: 'right', slot:"operation" },
      ],
      dataList: [
        {createAt: "2020-06-22", username: "abc123456",name: "金毛"},
      ],
      addForm: {
        "fullname": "",
        "cName": "",
        "nickname": "",
        "staffNo": "",
        "idNo": "",
        "position": "",
        "workday": '',
        phone: "",
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
        "workday": '',
        phone: "",
        password: "",
        password2: "",
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
        // staffNo: [
        //   {required:true, message: "請輸入工頭編號",trigger:"blur" },
        // ],
        // idNo: [
        //   {required:true, message: "請輸入身份證號",trigger:"blur" },
        // ],
        // position: [
        //   {required:true, message: "請輸入position",trigger:"blur" },
        // ],
        // workday: [
        //   {required:true, message: "請輸入工作時長",trigger:"blur" },
        // ],
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
      current:{},
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
    okAdd () {
      let that = this
      that.$refs.addForm.validate(flag => {
        if (flag) {
          that.$axios({
            url: window.baseURL.replace("/admin","") + 'signup/supervisor',
            // url:"http://119.8.42.40:8080/signup/supervisor",
            method:"POST",
            data: {
               "fullname": that.addForm.fullname,
               "cName": that.addForm.cName,
               "nickname": that.addForm.nickname,
               "supervisorNo": that.addForm.staffNo,
               "idNo": that.addForm.idNo,
               "position": that.addForm.position,
               "workday": Number(that.addForm.workday),
               "phone": that.addForm.phone,
               "password": that.addForm.password
            },  
          }).then(res => {
            console.log("add",res)
            if (res.data) {
              that.$Message.success('已新增工頭賬戶')
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
      let that = this
      that.$refs.editForm.validate(flag => {
        if (flag) {
          that.$axios({
            url:'supervisor/' + that.current.ID,
            method:"PUT",
            data: {
              "fullname": that.editForm.fullname,
              "cName": that.editForm.cName,
              "nickname": that.editForm.nickname,
              "supervisorNo": that.editForm.staffNo,
              "idNo": that.editForm.idNo,
              "position": that.editForm.position,
              "workday": Number(that.editForm.workday),
              phone: that.editForm.phone,
              password: that.editForm.password
            },
          }).then(res => {
            console.log("add",res)
            if (res.data) {
              that.$Message.success('已修改')
              that.showTable()
              that.showEdit = false
            } else {
              that.$Message.warning("修改失敗")
            }
          }).catch(() => {
            that.$Message.error("修改失敗")
          })
        }
        that.hideLoading()
      }) 
    },
    edit (item) {
      console.log(item)
      this.current = item
      this.showEdit = true
      this.editForm.fullname = item.fullname
      this.editForm.cName = item.cName
      this.editForm.nickname = item.nickname
      this.editForm.phone = item.phone
      this.editForm.staffNo = item.supervisorNo
      this.editForm.idNo = item.idNo
      this.editForm.workday = item.workday
      this.editForm.position = item.position
    },
    keydown () {
      if (this.showAdd) {
        this.okAdd()
      } else if (this.editForm) {
        this.okEdit()
      }
    },
    Delete (item) {
      console.log(item)
      let that = this
      that.$Modal.confirm({
        title:"提示",
        content: "確定刪除?",
        onOk () {
          that.$axios({
            url:"supervisor/" + item.ID,
            method:"DELETE",
            data: {
              id: item.ID
            }
          }).then(res => {
            console.log("delete",res)
            that.$Message.success("已刪除")
            that.showTable()
          })
        }
      })
    },
    hideLoading() {
      this.loading = false
      this.$nextTick(() => {
        this.loading = true
      })
    },
    
  },
}
</script>

<style>

</style>