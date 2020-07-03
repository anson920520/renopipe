<template>
  <div>
      <div class="sb al">
      <div></div>
      <Button type="info" class="addBtn" @click="showAdd=true">新增管理員賬號</Button>

      <Modal v-model="showAdd" 
      @on-ok="okAdd"
      :loading='loading'
      title="新增管理員賬號">
      <Form :model="addForm" ref="addForm" :rules='rule' :label-width="130">
        <FormItem label="用戶名" prop="address">
          <Input @on-keyup.enter="keydown" type="text" style="width: 250px;" v-model.trim="addForm.username" placeholder="請輸入用戶名" />
        </FormItem>

        <FormItem label="密碼" prop="siteCode1">
          <Input type="text" style="width: 250px;" v-model="addForm.pwd" placeholder="請輸入密碼" />
        </FormItem>

        <!-- <FormItem label="確認密碼" prop="siteCode2">
          <Input type="text" style="width: 250px;" v-model="addForm.pwd2" placeholder="請輸入確認密碼" />
        </FormItem> -->

      </Form>
    </Modal>

    </div>

    <Table :columns="column" :data="dataList"></Table>

  </div>
</template>

<script>
export default {
    name: "admin_page",
    data () {
        return {
            showAdd: false,
            rule: {

            },
            addForm: {
                username:"",
                pwd:"",
                pwd2:""
            },
            loading: true,
            dataList:[],
            column:[
                {title: "username", key:'phone' },
            ],
        }
    },
    created () {
        this.showTable()
    },
    methods:{
        showTable () {
            this.$axios({
                url:'/admin',
                method:"GET",
            }).then(res => {
                console.log(res,'admin')
                if (res.data) {
                    this.dataList = res.data
                }
            })
        },
        keydown() {

        },
        okAdd () {
            this.$axios({
                url: window.baseURL.replace('/admin',"/") + "signup/admin",
                method:"POST",
                data: {
                    phone: this.addForm.username,
                    password: this.addForm.pwd
                }
            }).then(res => {
                console.log(res)
                if (res.data.ID) {
                    this.$Message.success("新增成功")
                    this.showAdd = false
                    this.hideLoading()
                } else {
                    this.$Message.warning("新增失敗")
                    this.hideLoading()
                }
            }).catch(() => {
                this.$Message.warning("網絡異常")
            })
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

<style>

</style>