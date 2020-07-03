<style lang="less">
  @import './login.less';
</style>

<template>
  <div class="login">
    <div class="login-con">
      <img src="@/assets/images/logo.png" >
      <Card icon="log-in" title="歡迎登錄" :bordered="true">
        <div class="form-con">
          <login-form @on-success-valid="handleSubmit"></login-form>
          <!-- <p class="login-tip">输入任意用户名和密码即可</p> -->
        </div>
      </Card>
    </div> 
  </div>
</template>

<script>
import LoginForm from '_c/login-form'
import { mapActions } from 'vuex'
import Cookies from 'js-cookie'
import $qs from 'qs';

import http from "axios"
export default {
  components: {
    LoginForm
  },
  data(){
    return{
      alertcontent:false,
      num: 0
    }
  },
  methods: {
    ...mapActions([
      'handleLogin',
      'getUserInfo'
    ]),
    handleSubmit ({ userName, password }) {
      console.log('login',this.$axios)
      let load = this.$Message.loading({
        content: "登录中...",
        duration: 10
      })

      let url = window.baseURL.replace('/admin',"/")
      console.log( url+ "login/admin")
      this.$axios({
        url: url+ "login/admin",
        method:"POST",
        data:{
          phone: userName,
          password:password
        }
      }).then(res => {
        console.log('login',res)
        if (res.data) {
          localStorage.setItem('jwt',"Bearer " + res.data.token)
          // this.$Message.success('登錄成功')
          this.$router.push({
            path: '/service_page'
          })
          setTimeout(() => {
            load()
          },1000)
        } else {
          setTimeout(() => {
            load()
          },0)
        }
      }).catch(() => {
        this.$Message.error('賬號或密碼錯誤')
        setTimeout(() => {
          load()
        },0)
      })
    }
  }
}
</script>

<style>

</style>
