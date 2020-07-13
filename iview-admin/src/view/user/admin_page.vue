<template>
  <div>
    <div class="sb al">
      <div></div>
      <Button type="info" class="addBtn" @click="showAdd=true">新增管理員賬號</Button>
    </div>

    <Modal v-model="showAdd" @on-ok="okAdd" :loading="loading" title="新增管理員賬號">
        <Form :model="addForm" ref="addForm" :rules="rule" :label-width="130">
          <FormItem label="全名" prop="address">
            <Input
              @on-keyup.enter="keydown"
              type="text"
              style="width: 250px;"
              v-model.trim="addForm.fullname"
              placeholder="請輸入全名"
            />
          </FormItem>
          <FormItem label="暱稱" prop="address">
            <Input
              @on-keyup.enter="keydown"
              type="text"
              style="width: 250px;"
              v-model.trim="addForm.nickname"
              placeholder="請輸入用全名"
            />
          </FormItem>
          <FormItem label="電話號碼" prop="address">
            <Input
              @on-keyup.enter="keydown"
              type="text"
              style="width: 250px;"
              v-model.trim="addForm.phone"
              placeholder="請輸入電話號碼"
            />
          </FormItem>
          <FormItem label="密碼" prop="siteCode1">
            <Input type="text" style="width: 250px;" v-model="addForm.pwd" placeholder="請輸入密碼" />
          </FormItem>
          <FormItem label="確認密碼" prop="siteCode2">
            <Input type="text" style="width: 250px;" v-model="addForm.pwd2" placeholder="請輸入確認密碼" />
          </FormItem>
        </Form>
      </Modal>

      <Modal v-model="showEdit" @on-ok="okEdit" :loading="loading" title="編輯管理員賬號">
        <Form :model="editForm" ref="editForm" :rules="rule" :label-width="130">
          <FormItem label="全名" prop="address">
            <Input
              @on-keyup.enter="keydown"
              type="text"
              style="width: 250px;"
              v-model.trim="editForm.fullname"
              placeholder="請輸入全名"
            />
          </FormItem>
          <FormItem label="暱稱" prop="address">
            <Input
              @on-keyup.enter="keydown"
              type="text"
              style="width: 250px;"
              v-model.trim="editForm.nickname"
              placeholder="請輸入暱稱"
            />
          </FormItem>
          <FormItem label="電話號碼" prop="address">
            <Input
              @on-keyup.enter="keydown"
              type="text"
              style="width: 250px;"
              v-model.trim="editForm.phone"
              placeholder="請輸入電話號碼"
            />
          </FormItem>
          <FormItem label="密碼" prop="siteCode1">
            <Input type="text" style="width: 250px;" v-model="editForm.pwd" placeholder="請輸入密碼" />
          </FormItem>
          <FormItem label="確認密碼" prop="siteCode2">
            <Input type="text" style="width: 250px;" v-model="editForm.pwd2" placeholder="請輸入確認密碼" />
          </FormItem>
        </Form>
      </Modal>

    <Table :columns="column" :data="dataList">
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
    return {
      showAdd: false,
      showEdit: false,
      rule: {},
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
    };
  },
  created() {
    this.showTable();
  },
  methods: {
    showTable() {
      this.$axios({
        url: "/admin",
        method: "GET"
      }).then(res => {
        console.log(res, "admin");
        if (res.data) {
          res.data.forEach(item => {
            item.createdAt = item.createdAt
              .slice(0, 16)
              .replace("T", " ")
              .split("-")
              .join("/");
          });
          this.dataList = res.data;
        }
      });
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
      this.$axios({
        url: window.baseURL.replace("/admin", "/") + "signup/admin",
        method: "POST",
        data: {
          fullname: this.addForm.fullname,
          nickname: this.addForm.nickname,
          phone: this.addForm.phone,
          password: this.addForm.pwd
        }
      })
        .then(res => {
          console.log(res);
          if (res.data.ID) {
            this.$Message.success("新增成功");
            this.showAdd = false;
            this.hideLoading();
            this.showTable();
          } else {
            this.$Message.warning("新增失敗");
            this.hideLoading();
          }
        })
        .catch(() => {
          this.$Message.warning("網絡異常");
        });
    },
    okEdit () {
        this.$axios({
        url: window.baseURL.replace("/admin", "/") + "admin/" + this.id,
        method: "PUT",
        data: {
          fullname: this.editForm.fullname,
          nickname: this.editForm.nickname,
          phone: this.editForm.phone,
          password: this.editForm.pwd
        }
      })
        .then(res => {
          console.log(res);
          if (res.data.ID) {
            this.$Message.success("編輯成功");
            this.showEdit = false;
            this.hideLoading();
            this.showTable();
          } else {
            this.$Message.warning("編輯失敗");
            this.hideLoading();
          }
        })
        .catch(() => {
          this.$Message.warning("網絡異常");
        });
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