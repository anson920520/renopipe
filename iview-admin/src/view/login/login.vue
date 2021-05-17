<style lang="less">
    @import './login.less';
    .mask-1 {
        width: 100vw;
        height: 100vh;
        background: rgba(0,0,0,0.5);
        position: fixed;
        left: 0;
        top: 0;
        z-index: 100;
    }
    .m-main {
        width: 250px;
        padding: 30px 50px;
        background: #FFF;
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        text-align:center;
        font-size: 18px;
        font-weight: bold;
        border: solid #3A75BB;
    }
    .man-img {
        width: 100%;
    }
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

    <div class="mask-1" v-if="modal">
        <div class="m-main">
            <img class="man-img" src="@/assets/images/man.png" alt="">
            <p>試用期已過</p>
            <p>需要更新</p>
            <p>請盡快聯繫</p>
            <p>ALOFT TECH LTD</p>
        </div>
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
      num: 0,
      modal: false
    }
  },
  methods: {
    ...mapActions([
      'handleLogin',
      'getUserInfo'
    ]),
    handleSubmit ({ userName, password }) {
        // this.modal = true
        // return false
      // console.log('login',this.$axios)
      let load = this.$Message.loading({
        content: "登录中...",
        duration: 10
      })

      let url = window.baseURL.replace('/admin',"")
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
          },100)
        } else {
          this.$Message.warning('賬號或密碼錯誤')
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
