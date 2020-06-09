<style lang="less">
  @import './login.less';
</style>

<template>
  <div class="login">
    <div class="login-con">
      <img src="@/assets/images/logo.png" >
      <Card icon="log-in" title="欢迎登录" :bordered="true">
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
      const that = this
      // userName = 'superadmin'
      // // password = 'admin'
      // this.handleLogin({ userName, password }).then(res => {
      //         this.getUserInfo().then(res => {
      //       // Cookies.set("                                                                                                                                                          ",userName)
      //           this.$router.push({
      //             path: '/service_page'
      //           })
      //         })
      // })
      let load = this.$Message.loading({
        content: "登录中...",
        duration: 100000
      })
      console.log(userName)
      let flag = false;
      this.$axios({
        method: 'post',
        url: 'flower',
        data: JSON.stringify({
          username: userName,
          password: password 
        })
        
      }).then(res => {
        console.log(res,'用户增加')
       if(res.data.code == 200){
          //登录成功的代码
          let obj = JSON.stringify({username: userName, password: password})
          // localStorage.setItem('userInfo', obj)
          setTimeout(() => {
            load()
          },1000)
          localStorage.setItem("jwt",res.data.token)
          localStorage.setItem("role_id",res.data.role_id)
          localStorage.setItem("company_id",res.data.company_id)
          this.$store.commit("setIsLogin")
          this.$store.commit("setRole1", res.data.role_id)

          flag = true
          if(flag && res.data.role_id==3){
            userName = 'admin1'
            password = 'admin'
            this.handleLogin({ userName, password }).then(res => {
              this.getUserInfo().then(res => {
            // Cookies.set("                                                                                                                                                          ",userName)
                this.$router.push({
                  path: '/service_page'
                })
              })
            })
          }else if(flag && res.data.role_id==2){
            userName = 'admin'
            password = 'admin'
            this.handleLogin({ userName, password }).then(res => {
              this.getUserInfo().then(res => {
            // Cookies.set("                                                                                                                                                          ",userName)
                this.$router.push({
                  path: '/service_page'
                })
              })
            })
          }else if(flag && res.data.role_id==1){
            userName = 'superadmin'
            password = 'admin'
            this.handleLogin({ userName, password }).then(res => {
              this.getUserInfo().then(res => {
            // Cookies.set("                                                                                                                                                          ",userName)
                this.$router.push({
                  path: '/service_page'
                })
              })
            })
          }
        }
        else{
          // console.log('123')
          this.$Message.warning({
            top: 50,
            duration: 4,
            content:'用户名或密码错误'
          })
          load()
        }
      }).catch(res => {
        // console.log('456')
        load()

        //由于长时间未登录后再登陆或首次登陆 服务器会有异常的500码，需要递归再调用一次接口，第二次即可正常登陆
        this.num++
        if (this.num < 2) {
          this.handleSubmit({userName, password})
          return
        }
        // this.$Message.warning({
        //   top: 50,
        //   duration: 4,
        //   content:'网络出现问题请稍后再试'
        // })
      });
    }
  }
}
</script>

<style>

</style>
