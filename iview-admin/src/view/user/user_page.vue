<template>
  <div>
    <div class="sb al">
      <div class="ju al">
        <Input type="text" @on-enter="search" v-model="searchVal"  placeholder="輸入關鍵字搜索"/>
        <Button @click="search"  type="info">搜索</Button>
      </div>
      <Button type="info" class="addBtn" @click="showAdd=true">新增工人</Button>
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
    <Modal v-model="showAdd" :loading="loading" @on-ok="okAdd" title="新增工人賬戶" :width='400'>
      <Form :model="addForm" ref="addForm" :rules='rule' :label-width="100">
        <FormItem label="Company" prop="">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="addForm.company" placeholder="選擇公司" />
        </FormItem>
          <FormItem label="Role" prop="" style="display:none">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="addForm.role" placeholder="選擇Type of role" />
        </FormItem>

        <FormItem label="工人全名" prop="fullname">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="addForm.fullname" placeholder="請輸入全名" />
          <small style="display:block;">*必須填寫，如果沒有資料請填寫NA</small>
        </FormItem>

        <FormItem label="身份證號" prop="idNo" style="display:none">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="addForm.idNo" placeholder="請輸入身份證號" />
          <small style="display:block;">*必須填寫，如果沒有資料請填寫NA</small>
        </FormItem>

        <FormItem label="工人中文名" prop="cName">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="addForm.cName" placeholder="請輸入中文名" />
          <small style="display:block;">*必須填寫，如果沒有資料請填寫NA</small>
        </FormItem>

        <FormItem label="暱稱" prop="nickname">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="addForm.nickname" placeholder="請輸入暱稱" />
          <small style="display:block;">*必須填寫，如果沒有資料請填寫NA</small>
        </FormItem>

        <FormItem label="聯繫電話" prop="phone" style="display:none">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="addForm.phone" placeholder="請輸入聯繫電話" />
          <small style="display:block;">*必須填寫，如果沒有資料請填寫NA</small>
        </FormItem>

        <FormItem label="職位" prop="position">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="addForm.position" placeholder="請輸入職位" />
          <small style="display:block;">*必須填寫，如果只想新增職位就請在這個欄位填寫職位名稱</small>
        </FormItem>

         <FormItem label="生日日期" prop="dob" style="display:none">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="addForm.dob" placeholder="生日日期" />
        </FormItem>

       <!-- <FormItem label="Group" prop="group">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="addForm.group" placeholder="請輸入Group (e.g: Engineer)" />
        </FormItem>

         <FormItem label="Team" prop="team">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="addForm.team" placeholder="請輸入Tean (e.g: Head office)" />
        </FormItem>

         <FormItem label="地址" prop="address">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="addForm.address" placeholder="請輸入地址" />
        </FormItem>

        <FormItem label="加入公司日期" prop="joindate">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="addForm.joindate" placeholder="請輸入加入公司日期" />
        </FormItem>

        <FormItem label="離開公司日期" prop="leavedate">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="addForm.leavedate" placeholder="請輸入離開公司日期" />
        </FormItem>

        <FormItem label="Monthley/day" prop="md">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="addForm.md" placeholder="請輸入Monthley/day" />
        </FormItem>

         <FormItem label="加入公司人工" prop="joinsalary">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="addForm.joinsalary" placeholder="請輸入加入公司人工" />
        </FormItem>

         <FormItem label="離開公司人工" prop="leavesalary">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="addForm.leavesalary" placeholder="請輸入離開公司人工" />
        </FormItem>

        <FormItem label="AB" prop="ab">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="addForm.ab" placeholder="請輸入ab" />
        </FormItem>

        <FormItem label="% of AB" prop="abpercent">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="addForm.abpercent" placeholder="請輸入% of AB" />
        </FormItem>

        <FormItem label="OT/hr" prop="OThr">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="addForm.otrate" placeholder="請輸入OT/hr" />
        </FormItem>

        <FormItem label="AL day" prop="alday">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="addForm.alday" placeholder="請輸入AL day" />
        </FormItem>

        <FormItem label="Statutory" prop="statutory">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="addForm.statutory" placeholder="請輸入Statutory" />
        </FormItem>

        <FormItem label="工作天數" prop="workday">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="addForm.workday" placeholder="請輸入工作天數" />
        </FormItem>

       <FormItem label="平日工作時間長度" prop="workperoid">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="addForm.workperoid" placeholder="請輸入平日工作時間長度" />
        </FormItem>

        <FormItem label="星期六工作時間長度" prop="satarrange">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="addForm.satarrange" placeholder="請輸入星期六工作時間長度" />
        </FormItem>
        
        <FormItem label="星期六工作時間長度" prop="satarrange">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="addForm.satarrange" placeholder="請輸入星期六工作時間長度" />
        </FormItem> 

        <FormItem label="Clawback Period" prop="clawbackperiod">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="addForm.clawbackperiod" placeholder="請輸入Clawback Period" />
        </FormItem>

        <FormItem label="試用期辭職通知時間長度" prop="befpobtermination">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="addForm.befpobtermination" placeholder="請輸入試用期辭職通知時間長度" />
        </FormItem>

        <FormItem label="正常辭職通知時間長度" prop="afterpodtermination">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="addForm.afterpodtermination" placeholder="請輸入正常辭職通知時間長度" />
        </FormItem>

        <FormItem label="試用期天數" prop="pobat">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="addForm.pobat" placeholder="請輸入試用期辭職通知時間長度" />
        </FormItem>

         <FormItem label="MPF" prop="mpf">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="addForm.mpf" placeholder="MPF" />
        </FormItem>

        <FormItem label="Remark" prop="remark">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="addForm.remark" placeholder="Remark" />
        </FormItem>-->
      </Form>
    </Modal>


    <!-- 编辑 -->
    <Modal v-model="showEdit" :loading="loading" @on-ok="okEdit" title="编辑工人賬戶" :width='400'>
      <Form :model="editForm" ref="editForm" :rules='rule' :label-width="100">
        <FormItem label="Company" prop="company">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="editForm.company" placeholder="選擇公司" />
        </FormItem>
          <FormItem label="Role" prop="role" style="display:none">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="editForm.role" placeholder="選擇Type of role" />
        </FormItem>

        <FormItem label="工人全名" prop="fullname">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="editForm.fullname" placeholder="請輸入全名" />
          <small style="display:block;">*必須填寫，如果沒有資料請填寫NA</small>
        </FormItem>

        <FormItem label="身份證號" prop="idNo" style="display:none">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="editForm.idNo" placeholder="請輸入身份證號" />
          <small style="display:block;">*必須填寫，如果沒有資料請填寫NA</small>
        </FormItem>

        <FormItem label="工人中文名" prop="cName">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="editForm.cName" placeholder="請輸入中文名" />
          <small style="display:block;">*必須填寫，如果沒有資料請填寫NA</small>
        </FormItem>

        <FormItem label="暱稱" prop="nickname">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="editForm.nickname" placeholder="請輸入暱稱" />
          <small style="display:block;">*必須填寫，如果沒有資料請填寫NA</small>
        </FormItem>
        
        <FormItem label="聯繫電話" prop="phone" style="display:none">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="editForm.phone" placeholder="請輸入聯繫電話" />
          <small style="display:block;">*必須填寫，如果沒有資料請填寫NA</small>
        </FormItem>

        <FormItem label="職位" prop="position">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="editForm.position" placeholder="請輸入職位" />
           <small style="display:block;">*必須填寫，如果只想新增職位就請在這個欄位填寫職位名稱</small>
        </FormItem>

         <FormItem label="生日日期" prop="dob" style="display:none">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="editForm.dob" placeholder="生日日期" />
        </FormItem>

       <!-- <FormItem label="Group" prop="group">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="editForm.group" placeholder="請輸入Group (e.g: Engineer)" />
        </FormItem>

         <FormItem label="Team" prop="team">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="editForm.team" placeholder="請輸入Tean (e.g: Head office)" />
        </FormItem>

         <FormItem label="地址" prop="address">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="editForm.address" placeholder="請輸入地址" />
        </FormItem>

        <FormItem label="加入公司日期" prop="joindate">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="editForm.joindate" placeholder="請輸入加入公司日期" />
        </FormItem>

        <FormItem label="離開公司日期" prop="leavedate">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="editForm.leavedate" placeholder="請輸入離開公司日期" />
        </FormItem>

        <FormItem label="Monthley/day" prop="md">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="editForm.md" placeholder="請輸入Monthley/day" />
        </FormItem>

         <FormItem label="加入公司人工" prop="joinsalary">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="editForm.joinsalary" placeholder="請輸入加入公司人工" />
        </FormItem>

         <FormItem label="離開公司人工" prop="leavesalary">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="editForm.leavesalary" placeholder="請輸入離開公司人工" />
        </FormItem>

        <FormItem label="AB" prop="ab">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="editForm.ab" placeholder="請輸入ab" />
        </FormItem>

        <FormItem label="% of AB" prop="abpercent">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="editForm.abpercent" placeholder="請輸入% of AB" />
        </FormItem>

        <FormItem label="OT/hr" prop="OThr">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="editForm.otrate" placeholder="請輸入OT/hr" />
        </FormItem>

        <FormItem label="AL day" prop="alday">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="editForm.alday" placeholder="請輸入AL day" />
        </FormItem>

        <FormItem label="Statutory" prop="statutory">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="editForm.statutory" placeholder="請輸入Statutory" />
        </FormItem>

        <FormItem label="工作天數" prop="workday">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="editForm.workday" placeholder="請輸入工作天數" />
        </FormItem>

       <FormItem label="平日工作時間長度" prop="workperoid">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="editForm.workperoid" placeholder="請輸入平日工作時間長度" />
        </FormItem>

        <FormItem label="星期六工作時間長度" prop="satarrange">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="editForm.satarrange" placeholder="請輸入星期六工作時間長度" />
        </FormItem>
        
        <FormItem label="星期六工作時間長度" prop="satarrange">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="editForm.satarrange" placeholder="請輸入星期六工作時間長度" />
        </FormItem> 

        <FormItem label="Clawback Period" prop="clawbackperiod">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="editForm.clawbackperiod" placeholder="請輸入Clawback Period" />
        </FormItem>

        <FormItem label="試用期辭職通知時間長度" prop="befpobtermination">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="editForm.befpobtermination" placeholder="請輸入試用期辭職通知時間長度" />
        </FormItem>

        <FormItem label="正常辭職通知時間長度" prop="afterpodtermination">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="editForm.afterpodtermination" placeholder="請輸入正常辭職通知時間長度" />
        </FormItem>

        <FormItem label="試用期天數" prop="pobat">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="editForm.pobat" placeholder="請輸入試用期辭職通知時間長度" />
        </FormItem>

         <FormItem label="MPF" prop="mpf">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="editForm.mpf" placeholder="MPF" />
        </FormItem>

        <FormItem label="Remark" prop="remark">
          <Input type="text" @on-keyup.enter="keydown" style="width: 200px;" v-model="editForm.remark" placeholder="Remark" />
        </FormItem>!-->
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
      loading: true,
      columns: [
        { title: "創建日期", key:"createdAt" },
        // { title: "公司", key:"company" },
        // { title: "role", key:"role" },
        // { title: "group", key:"group" },
        // { title: "team", key:"team" },
        { title: "身份證號", key:"idNo" },
        { title: "全名", key:"fullname" },
        { title: "中文名", key:"cName" },
        { title: "暱稱", key:"nickname" },
        //{ title: "聯繫電話", key:"phone" },
        { title: "職位", key:"position" },
        { title: "地址", key:"address" },
        
        // { title: "工頭(經理)", key:"master" },
        { title: "操作", slot:"operation" },
      ],
      dataList: [],
      addForm:{
        "fullname": "",
        "cName": "",
        "nickname": "",
        "idNo": "NA",
        "position": "",
        "phone":"NA",
        "company":"Renopipe",
        "role":"NA"
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
          //{required:true, message: "請輸入position",trigger:"blur" },
        ],
      },
      current: {},
      allData:[],
      searchVal:"",
    }
  },
  created () {
    this.showTable()
  },
  methods:{
    okAdd () {
      let that = this
      //make telephone and id card not needed enter data
      var chars = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',     
              serialLength = 10,   
              randomSerial = "",    
              i,   
              randomNumber;
          
          for (i = 0; i < serialLength; i = i + 1) { 
              randomNumber = Math.floor(Math.random() * chars.length);
              randomSerial += chars.substring(randomNumber, randomNumber + 1);
          }
          
          console.log(randomSerial)

      let data = {
              "company": that.addForm.company,
              "role": that.addForm.role,
              "fullname": that.addForm.fullname,
              "idNo": randomSerial,
              "cName": that.addForm.cName,
              "nickname": that.addForm.nickname,
              "position": that.addForm.position,
              "dob":randomSerial,//that.addForm.dob,
              "group":"1",
              "team":that.addForm.team,
              "phone": randomSerial,//that.addForm.phone,
              "address":that.addForm.address,
              "joindate":that.addForm.joindate,
              "leavedate":that.addForm.leavedate,
              "md":that.addForm.md,
              "joinsalary":that.addForm.joinsalary,
              "leavesalary":that.addForm.leavesalary,
              "ab":that.addForm.ab,
              "abpercent":that.addForm.abpercent,
              "otrate":that.addForm.otrate,
              "alday":that.addForm.otrate,
              "statutory":that.addForm.statutory,
              "workday":that.addForm.workday,
              "workperoid":that.addForm.workperoid,
              "satarrange":that.addForm.satarrange,
              "clawbackperiod":that.addForm.clawbackperiod,
              "befpobtermination":that.addForm.befpobtermination,
              "afterpodtermination":that.addForm.afterpodtermination,
              "pobat":that.addForm.pobat,
              "mpf":that.addForm.mpf,
              "remark":that.addForm.remark,  
        }

        console.log(data)

      that.$refs.addForm.validate(flag => {
        if (flag) {
          let load = this.$Message.loading({
            content:"加載中...",
            duration: 10
          })

          that.$axios({
            url:'worker',
            method:"POST",
            data: data,
          }).then(res => {
            console.log("add",res)
            if (res.data) {
              that.$Message.success('已新增工人')
              that.showTable()
              that.showAdd = false
            } else {
              that.$Message.warning("新增失敗")
            }
            load()
          }).catch(() => {
            that.$Message.error("新增失敗")
            load()
          })
        }
        that.hideLoading()
      }) 
    },
    okEdit () {
      let that = this

      let data = {
              "company": that.editForm.company,
              "role": that.editForm.role,
              "fullname": that.editForm.fullname,
              "idNo": that.editForm.idNo,
              "cName": that.editForm.cName,
              "nickname": that.editForm.nickname,
              "position": that.editForm.position,
              "dob":that.editForm.dob,
              "group":"1",
              "team":that.editForm.team,
              "phone": that.editForm.phone,
              "address":that.editForm.address,
              "joindate":that.editForm.joindate,
              "leavedate":that.editForm.leavedate,
              "md":that.editForm.md,
              "joinsalary":that.editForm.joinsalary,
              "leavesalary":that.editForm.leavesalary,
              "ab":that.editForm.ab,
              "abpercent":that.editForm.abpercent,
              "otrate":that.editForm.otrate,
              "alday":that.editForm.otrate,
              "statutory":that.editForm.statutory,
              "workday":that.editForm.workday,
              "workperoid":that.editForm.workperoid,
              "satarrange":that.editForm.satarrange,
              "clawbackperiod":that.editForm.clawbackperiod,
              "befpobtermination":that.editForm.befpobtermination,
              "afterpodtermination":that.editForm.afterpodtermination,
              "pobat":that.editForm.pobat,
              "mpf":that.editForm.mpf,
              "remark":that.editForm.remark,  
        }

      console.log(data);
      console.log(that.current.ID)
      //API call
      that.$refs.editForm.validate(flag => {
        if (flag) {
          let load = this.$Message.loading({
            content:"加載中...",
            duration: 10
          })

          that.$axios({
            url:'worker/' + that.current.ID,
            method:"PUT",
            data: data,
          }).then(res => {
            console.log("add",res)
            if (res.data) {
              that.$Message.success('已修改')
              that.showTable()
              that.showEdit = false
            } else {
              that.$Message.warning("修改失敗")
            }
            load()
          }).catch(() => {
            load()
            that.$Message.error("修改失敗")
          })
        }
        that.hideLoading()
      })
    },
    edit (item) {
      this.current = item
      this.showEdit = true
      this.editForm.fullname = item.fullname
      this.editForm.cName = item.cName
      this.editForm.nickname = item.nickname
      this.editForm.idNo = item.idNo
      this.editForm.position = item.position
      this.editForm.phone = item.phone
      this.editForm.group = item.group
      this.editForm.role = item.role
      this.editForm.team = item.team
      this.editForm.address = item.address
      this.editForm.company = item.company
      this.editForm.joindate = item.joindate
      this.editForm.leavedate = item.leavedate
      this.editForm.dob = item.dob
      this.editForm.md = item.md
      this.editForm.joinsalary = item.joinsalary
      this.editForm.leavesalary = item.leavesalary
      this.editForm.ab = item.ab
      this.editForm.abpercent = item.abpercent
      this.editForm.otrate = item.otrate
      this.editForm.alday = item.alday
      this.editForm.statutory = item.statutory
      this.editForm.workday = item.workday
      this.editForm.workperoid = item.workperoid
      this.editForm.satarrange = item.satarrange
      this.editForm.clawbackperiod = item.clawbackperiod
      this.editForm.befpobtermination = item.befpobtermination
      this.editForm.afterpodtermination = item.afterpodtermination
      this.editForm.pobat = item.pobat
      this.editForm.mpf = item.mpf
      this.editForm.remark = item.remark
    },
    Delete (item) {
      console.log(item)
      let that = this
      that.$Modal.confirm({
        title:"提示",
        content: "確定刪除?",
        onOk () {
          that.$axios({
            url:"worker/" + item.ID,
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
    showTable () {
      this.$axios({
        url:"worker",
        method:"GET"
      }).then(res => {
        console.log(res,"worker")
        if (res.data) {
          res.data.forEach(item => {
              item.createdAt = item.createdAt.slice(0,16).replace("T"," ").split("-").join("/")
          })
          this.allData = res.data
          this.dataList = this.allData.slice(0)
        }
      }).catch(() => {
        this.$Message.error("獲取工人失敗")
      })
    },
    search () {
      this.dataList = this.allData.filter((item,i) => {
        for(let key in item) {
          if ( typeof item[key] == "string") {
            if (item[key].indexOf(this.searchVal) != -1) {
              return true
            }
          }
          
        }
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
    hideLoading() {
      this.loading = false
      this.$nextTick(() => {
        this.loading = true
      })
    },
  }
}
</script>

<style lang="less" scoped>

</style>