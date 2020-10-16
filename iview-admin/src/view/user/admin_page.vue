<template>
  <div>
    <div class="sb al">
      <div class="ju al">
        <Input type="text" @on-enter="search" v-model="searchVal"  placeholder="輸入關鍵字搜索"/>
        <Button @click="search"  type="info">搜索</Button>
      </div>
      <Button type="info" class="addBtn" @click="showAdd=true">新增管理員賬號</Button>
    </div>

    <Modal v-model="showAdd" @on-ok="okAdd" :rules="rule" :loading="loading" title="新增管理員賬號">
        <Form :model="addForm" ref="addForm" :rules="rule" :label-width="130">
          <FormItem label="全名" prop="fullname">
            <Input
              @on-keyup.enter="keydown"
              type="text"
              style="width: 250px;"
              v-model.trim="addForm.fullname"
              placeholder="請輸入全名"
            />
          </FormItem>
          <FormItem label="暱稱" prop="nickname">
            <Input
              @on-keyup.enter="keydown"
              type="text"
              style="width: 250px;"
              v-model.trim="addForm.nickname"
              placeholder="請輸入用全名"
            />
          </FormItem>
          <FormItem label="電話號碼" prop="phone">
            <Input
              @on-keyup.enter="keydown"
              type="text"
              style="width: 250px;"
              v-model.trim="addForm.phone"
              placeholder="請輸入電話號碼"
            />
          </FormItem>
          <FormItem label="密碼" prop="pwd">
            <Input type="password" style="width: 250px;" v-model="addForm.pwd" placeholder="請輸入密碼" />
          </FormItem>
          <FormItem label="確認密碼" prop="pwd2">
            <Input type="password" style="width: 250px;" v-model="addForm.pwd2" placeholder="請輸入確認密碼" />
          </FormItem>
        </Form>
      </Modal>

      <Modal v-model="showEdit" @on-ok="okEdit"  :rules="rule" :loading="loading" title="編輯管理員賬號">
        <Form :model="editForm" ref="editForm" :rules="rule" :label-width="130">
          <FormItem label="全名" prop="fullname">
            <Input
              @on-keyup.enter="keydown"
              type="text"
              style="width: 250px;"
              v-model.trim="editForm.fullname"
              placeholder="請輸入全名"
            />
          </FormItem>
          <FormItem label="暱稱" prop="nickname">
            <Input
              @on-keyup.enter="keydown"
              type="text"
              style="width: 250px;"
              v-model.trim="editForm.nickname"
              placeholder="請輸入暱稱"
            />
          </FormItem>
          <FormItem label="電話號碼" prop="phone">
            <Input
              @on-keyup.enter="keydown"
              type="text"
              style="width: 250px;"
              v-model.trim="editForm.phone"
              placeholder="請輸入電話號碼"
            />
          </FormItem>
          <FormItem label="密碼" prop="siteCode1">
            <Input type="password" style="width: 250px;" v-model="editForm.pwd" placeholder="請輸入密碼" />
          </FormItem>
          <FormItem label="確認密碼" prop="siteCode2">
            <Input type="password" style="width: 250px;" v-model="editForm.pwd2" placeholder="請輸入確認密碼" />
          </FormItem>
        </Form>
      </Modal>

    <Table :columns="column" :data="dataList" :loading="tableLoad">
      <template slot-scope="{row}" slot="operation">
        <div>
          <Button size="small" class="editBtn" @click="edit(row)">編輯</Button>
          <Button size="small" class="noBorder" type="error" @click="Delete(row)">刪除</Button>
        </div>
      </template>
    </Table>
  </div>
</template>

<script>
export default {
  name: "admin_page",
  data() {
    const validatePassCheck = (rule, value, callback) => {
        if (value === '') {
            callback(new Error('請輸入確認密碼'));
        } else if (value !== this.addForm.pwd) {
            callback(new Error('兩次密碼不一致'));
        } else {
            callback();
        }
    };
    return {
      showAdd: false,
      showEdit: false,
      rule: {
        fullname: [
          {required:true, message: "請輸入全名",trigger:"blur" },
        ],
        nickname: [
          {required:true, message: "請輸入暱稱",trigger:"blur" },
        ],
        phone: [
          {required:true, message: "請輸入電話",trigger:"blur" },
        ],
        pwd: [
          {required:true, message: "請輸入密碼",trigger:"blur" },
          { pattern:/^\w{6,}$/,message:"密碼不得少於六位", trigger:"blur" },
          
        ],
        pwd2: [
          {required:true, message: "請輸入確認密碼",trigger:"blur" },
          { pattern:/^\w{6,}$/,message:"密碼不得少於六位", trigger:"blur" },
          { validator: validatePassCheck,trigger:"blur"}
        ]
      },
      addForm: {
        fullname: "",
        nickname: "",
        phone: "",
        pwd: "",
        pwd2: ""
      },
      editForm: {
        fullname: "",
        nickname: "",
        phone: "",
        pwd: "",
        pwd2: ""
      },
      loading: true,
      dataList: [],
      column: [
        { title: "創建時間", key: "createdAt" },
        { title: "管理員名稱", key: "fullname" },
        { title: "電話號碼(登陸用)", key: "phone" },
        { title: "暱稱", key: "nickname" },
        { title: "操作", slot: "operation" }
      ],
      id:"",
      allData:[],
      searchVal:"",
      tableLoad: false
    };
  },
  created() {
    this.showTable();
  },
  methods: {
    showTable() {
      this.tableLoad = true
      this.$axios({
        url: "/admin",
        method: "GET"
      }).then(res => {
        console.log(res, "admin");
        this.tableLoad = false
        if (res.data) {
          res.data.forEach(item => {
            item.createdAt = item.createdAt
              .slice(0, 16)
              .replace("T", " ")
              .split("-")
              .join("/");
            let T = (new Date(new Date(item.createdAt).getTime() + 28800000))
            // item.createdAt = T.toLocaleDateString() + " " + (T.toTimeString().slice(0,5))
          });
          this.allData = res.data
          this.dataList = this.allData.slice(0)
        }
      }).catch(() => {
          this.tableLoad = false
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
    keydown() {},
    edit(item) {
      console.log(item);
      this.showEdit = true
    //   this.editForm.username = item.username
      this.editForm.phone = item.phone
      this.editForm.nickname = item.nickname
      this.editForm.fullname = item.fullname
      this.id = item.ID
    },
    okAdd() {
      let that = this
      that.$refs.addForm.validate(flag => {
        if (flag) {
          that.$axios({
            url: window.baseURL.replace("/admin", "/") + "signup/admin",
            method: "POST",
            data: {
              fullname: that.addForm.fullname,
              nickname: that.addForm.nickname,
              phone: that.addForm.phone,
              password: that.addForm.pwd
            }
          })
          .then(res => {
            console.log(res);
            if (res.data.ID) {
              that.$Message.success("新增成功");
              that.showAdd = false
              that.showTable()
            } else {
              that.$Message.warning("新增失敗");
            }
          })
          .catch(() => {
            that.$Message.warning("網絡異常");
          });
        } 
        that.hideLoading()

      })
      
    },
    okEdit () {
      let that = this
      that.$refs.editForm.validate(flag => {
        if (flag) {
          if (that.editForm.pwd) {
            if (that.editForm.pwd != that.editForm.pwd2) {
              that.$Message.warning("兩次密碼不一致")
              that.hideLoading()
              return false
            }
          }

        let data =  {
              fullname: that.editForm.fullname,
              nickname: that.editForm.nickname,
              phone: that.editForm.phone,
              password: that.editForm.pwd
            }
        console.log(data)

          that.$axios({
            url: window.baseURL.replace("/admin", "/") + "admin/" + this.id,
            method: "PUT",
            data: data,
          })
          .then(res => {
            console.log(res);
            if (res.data.ID) {
              that.$Message.success("編輯成功");
              that.showEdit = false;
              that.showTable();
            } else {
              that.$Message.warning("編輯失敗");
            }
          })
          .catch(() => {
            that.$Message.warning("網絡異常");
          });
        }
        that.hideLoading()
      })
      
    },
    Delete(item) {
      console.log(item);
      let that = this;
      that.$Modal.confirm({
        title: "提示",
        content: "確定刪除?",
        onOk() {
          that
            .$axios({
              url: "admin/" + item.ID,
              method: "DELETE",
              data: {
                id: item.ID
              }
            })
            .then(res => {
              console.log("delete", res);
              that.$Message.success("已刪除");
              that.showTable();
            });
        }
      });
    },
    hideLoading() {
      this.loading = false;
      this.$nextTick(() => {
        this.loading = true;
      });
    }
  }
};
</script>

<style>
</style>