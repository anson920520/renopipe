<template>
  <div>
    <!-- <Button v-if="adm2" style="margin-left: 10px;margin-right: 5px" type="info" @click="add">新增用户</Button> <br> -->
   <!-- 选择公司 -->
    <Button v-if="adm1" style="margin-left: 10px;margin-right: 5px" type="info" @click="add">新增管理员</Button>

    <Select size="large" :transfer="true" placeholder="请选择公司" v-model="company" @on-change="chooseOneCompany" style="width:200px;">
      <Option value="-1" >所有管理员</Option>
      <Option v-for="item in company_store" :value="item.id" :key="item.id">{{ item.name }}</Option>
    </Select>
     
     <Table v-if="adm3" style="margin-top: 10px" :columns="columns1" :data="data1"></Table>
     <Table v-if="adm4" style="margin-top: 10px" :columns="columns2" :data="data1"></Table>
    <!--新增-->
    <Modal
      v-model="modalAdd"
      title="新增"
      :width="400"
      @on-ok="okAdd('formAdd')"
      @on-cancel="cancelAdd"
      :loading="loadingAdd">
      <Form :model="formAdd" :label-width="100" :rules="ruleValidateAdd" ref="formAdd">
        <FormItem label="保险公司" prop="company_option">
          <Select size="large" :transfer="true" placeholder="请选择公司" @on-change="chioce_company" v-model="modelcompany" style="width:200px;">
            <Option v-for="item in company_store" :value="item.id" :key="item.id">{{ item.name }}</Option>
          </Select>
        </FormItem>
        <FormItem label="用户名" prop="username">
          <Input v-model="formAdd.username" placeholder="请输入用户名" style="width:200px" @on-keyup="enter"></Input>
        </FormItem>
        <FormItem label="密码" prop="firstpass">
          <Input type="password" v-model="formAdd.firstpass" placeholder="请输入密码" style="width:200px" @on-keyup="enter"></Input>
        </FormItem>
        <FormItem label="确认密码" prop="secondpass">
          <Input type="password" v-model="formAdd.secondpass" placeholder="请再次输入密码" style="width:200px" @on-keyup="enter"></Input>
        </FormItem>
         <!-- <Alert banner closable type="warning">二次输入的密码不同</Alert> -->
      </Form>
    </Modal>
     <!--修改密码-->
    <Modal
      v-model="modalChange"
      title="修改密码"
      :width="400"
      @on-ok="okChange('formChange')"
      @on-cancel="cancelChange"
      :loading="loadingChange">
      <Form :model="formChange" :label-width="100" :rules="ruleValidateChange" ref="formChange">
        <FormItem label="用户名" prop="username">
          <Input v-model="edit_username" placeholder="请输入用户名" style="width:200px"></Input>
        </FormItem> 
        <FormItem label="旧密码" prop="old_password">
          <Input v-model="formChange.old_password" placeholder="请输入旧密码" type="password" style="width:200px" @on-keyup="enter"></Input>
        </FormItem>
        <FormItem label="新密码" prop="new_password">
          <Input v-model="formChange.new_password" placeholder="请输入新密码" type="password" style="width:200px" @on-keyup="enter"></Input>
        </FormItem>
         <!-- <Alert banner closable type="warning">二次输入的密码不同</Alert> -->
      </Form>
    </Modal>
    <!--//分页-->
    <div style="text-align: right">
      <Page :total="dataCount" :page-size="pageSize" show-total class="paging" @on-change="changepage"></Page>
    </div>
  </div>
</template>

<script>
//   import tableDetail from './tableDetail.vue'
  export default {
    // components: { tableDetail },
    data () {
      const validatePhone = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('手机号不能为空'));
        } else if (!/^1[34578]\d{9}$/.test(value)) {
          callback('手机号格式不正确');
        } else {
          callback();
        }
      };
      const validatePass = (rule, value, callback) => {
        // 此时便能打印value值查看
        // console.log(value,'打印值')
      };
      return {
        company: "", //选择指定保险公司的管理员
        type:'text',
        modelcompany:'',
        company_store:[],
        adm1:false,
        adm2:false,
        adm3:false,
        adm4:false,
        //新增用户
        modalAdd:false,
        loadingAdd:false,
        company_option: 5,
        formAdd:{
          company_option: "",
          username:'',
          firstpass:'',
          secondpass:''
        },
        ruleValidateAdd: {
            company_option: [
              { required: true, message: '不能为空' }
            ],
            username: [
              { required: true, message: '不能为空', trigger: 'blur' }
            ],
            firstpass: [
              { required: true, message: '不能为空', trigger: 'blur' },
              // {type: 'number',required:true,validator:validatePhone,message:'请输入正确的手机号',trigger:'change'}
            ],
            secondpass: [
              { required: true, message: '不能为空', trigger: 'blur' },
              // { type: 'number',required: true, message: '不能为空', trigger: 'blur' },
            ]
          },
        //修改密码
        modalChange:false,
        loadingChange:false,
        // company_option:'',
        formChange:{
          username:'',
          old_password:'',
          new_password:'',
          user_id:''
        },
        ruleValidateChange: {
            // username: [
            //   { required: true, message: '不能为空', trigger: 'blur' }
            // ],
            old_password: [
              { required: true, message: '不能为空', trigger: 'blur' },
              // {type: 'number',required:true,validator:validatePhone,message:'请输入正确的手机号',trigger:'change'}
            ],
            new_password: [
              { required: true, message: '不能为空', trigger: 'blur' },
              // { type: 'number',required: true, message: '不能为空', trigger: 'blur' },
            ]
          },
        //    分页
        ajaxHistoryData: [],
        // 初始化信息总条数
        dataCount: 0,
        // 每页显示多少条
        pageSize: 10,
        page:1,
        columns1: [
          {
            title: "公司",
            key: "company_name",
            render: (h, params) => {
              if (params.row.role_id == 1) {
                return h('span', '一级管理员')
              } else {
                return h('span', params.row.company_name)
              }
            } 
          },
          {
            title: '管理员',
            key: 'username',
            // width: 100
          },
          {
            title: '密码',
            key: 'password',
            // width: 90
          },
          {
            title: '权限',
            key: 'access',
            // width: 150
          },
          {
            title: '操作',
            key: 'action',
            align: 'center',
            width: 200,
            render: (h, params) => {
              // console.log(localStorage.getItem("role_id"))
              return h('div', [
                  h('Button', {
                    props: {
                      type: 'info',
                      size: 'small'
                    },
                    style: {
                      marginRight: '5px',
                      marginBottom: '5px',
                      marginTop:'3px'
                      // float:'left'
                    },
                    on: {
                      click: () => {
                        this.xiugai(params.row);
                      }
                    }
                  }, '修改密码'),
                  h('Button', {
                    props: {
                      type: 'info',
                      size: 'small'
                    },
                    style: {
                      marginRight: '5px',
                      marginBottom: '5px',
                      marginTop:'3px'
                      // float:'left'
                    },
                    attrs: {
                      style: 'background-color:#d6514d;border:1px solid #d6514d'
                    },
                    on: {
                      click: () => {
                        this.delete(params.row);
                      }
                    }
                  }, '删除'),
                ]);
            }
          }
        ],
        columns2: [
          {
            title: '用户名称',
            key: 'customername',
            // width: 100
          },
          {
            title: '性别',
            key: 'total',
            // width: 90
          },
          {
            title: '创建时间',
            key: 'appointment_time',
            // width: 150
          },
           {
            title: '服务类型',
            key: 'type',
            // width: 150
          },
          {
            title: '编码',
            key: 'number',
            // width: 150
          },
          {
            title: '用户手机号',
            key: 'userphone',
            // width: 120
          },
          {
            title: '地址',
            key: 'phone',
          }
        ],
        data1: [],
        edit_username: ""
      }
    },
    created() {
      if(localStorage.getItem("role_id")==1){
        this.adm1 = true
        this.adm2 = true
        this.adm3 = true
        this.adm4 = false
      }else if(localStorage.getItem("role_id")==2){
        this.adm1 = false
        this.adm2 = true
        this.adm3 = true
        this.adm4 = false
      }else{
        this.adm1 = false
        this.adm2 = false
        this.adm3 = false
        this.adm4 = true
      }
      this.tableShow()
      //所有公司
      this.$axios({
            method: 'post',
            url: 'admin/all/company',
            data: {
              token:localStorage.getItem("jwt"),
              ic_id:localStorage.getItem("company_id"),
              page:this.page,
              offect:this.pageSize,
            }
      }).then(res => {
            // console.log(res,'admin用户信息')
            this.company_store = res.data.data
      }).catch(res => {
            // console.log(1212)
            this.$Message.error('请求超时,请稍后再试...');
      });
    //   this.username()
      // console.log(localStorage.getItem('Id'),'a参数123132')
      // console.log(location.hash)
    },
    methods: {
      enter (e) {
        if (e.keyCode == 13) {
          if (this.modalAdd) {
            this.okAdd('formAdd')
          } else if (this.modalChange) {
            this.okChange('formChange')
          }
        }
      },
      //添加管理员选择公司
      chioce_company(option){
        console.log(option)
        this.company_option = option
        this.formAdd.company_option = option
      },
      chooseOneCompany (e) {
        this.page = 1
        this.company = e
        this.$axios({
          method: 'post',
          url: 'admin/all/cpadmin',
          data: {
            token:localStorage.getItem("jwt"),
            ic_id:e,
            page:this.page,
            offect:this.pageSize,
          }
        }).then(res => {
          if (res.data.code == 420 || res.data.code != 200) {
              this.$Message.warning('登录信息已过期，请重新登录')
              return
          }
          console.log(res,'用户信息')
          this.ajaxHistoryData = res.data.data;
          this.dataCount = res.data.count;
          console.log(res.data.count)
          if (res.data.data.length < this.pageSize) {
            this.data1 = res.data.data
          } else {
            this.data1 = this.ajaxHistoryData.slice(this.start, this.end);
          }
        }).catch(res => {
          // this.$Message.error('请求超时,请稍后再试...');
        });
      },
      //用户信息展示
      tableShow(){
          this.$axios({
            method: 'post',
            url: 'admin/all/cpadmin',
            data: {
              token:localStorage.getItem("jwt"),
              ic_id:localStorage.getItem("company_id"),
              page:this.page,
              offect:this.pageSize,
            }
          }).then(res => {
            if (res.data.code == 420 || res.data.code != 200) {
                this.$Message.warning('登录信息已过期，请重新登录')
                return
            }
            console.log(res,'管理员信息1')
            this.ajaxHistoryData = res.data.data;

            if (res.data.data.length == 0 && this.page >= 2) {
              this.page--
              this.tableShow()
            }

            this.dataCount = res.data.count;
            if (res.data.data.length < this.pageSize) {
              this.data1 = res.data.data
            } else {
              this.data1 = this.ajaxHistoryData.slice(this.start, this.end);
            }
          }).catch(res => {
            // this.$Message.error('请求超时,请稍后再试...');
            this.$Message.warning('登录信息已过期，请重新登录')
          });
      },
      xiugai(row){
        // alert('123')
        console.log(row)
        this.modalChange = true
        this.formChange.user_id = row.id
        this.formChange.username = row.username
        this.edit_username = row.username
        // this.formChange.old_password = row.password
      },
      okChange(formChange){
        // console.log(this.$refs.formAdd.validate)
        // if(this.company_option == ''){
        //   this.$Message.warning({
        //     top: 50,
        //     duration: 4,
        //     content:'请先选择公司'
        //   });
        // }else{
        this.$refs.formChange.validate((valid) => {
            if (valid) {
              this.$axios({
                    method: 'post',
                    url: 'admin/cpadmin/update',
                    data: {
                      username: this.formChange.username,
                      old_password: this.formChange.old_password,
                      new_password: this.formChange.new_password,
                      token:localStorage.getItem("jwt"),
                      user_id:this.formChange.user_id
                    }
                  }).then(res => {
                    console.log(res)
                    if(res.data.code == 200){
                      this.modalChange = false
                      this.tableShow()
                      this.$Message.success("修改成功")
                    }else if(res.data.code == 420){
                      this.modalChange = true
                      this.$Message.warning({
                        top: 50,
                        duration: 4,
                        content:'该用户信息已过期，请重新登录'
                      });
                    } else {
                      this.$Message.warning({
                        top: 50,
                        duration: 4,
                        content:'修改失败'
                      });
                    }
                  }).catch(res => {
                    this.$Message.error('请求超时,请稍后再试...');
                  });
              callback();
            } else{
              this.loadingChange = false;
              this.$nextTick(() => {
                this.loadingChange = true;
              });
              this.$Message.warning({
                top: 50,
                duration: 4,
                content:'二次输入密码不同，请重新输入'
              });
            }
          })
        // }
        // this.tableShow()
        // this.formChange = {}
        },
      cancelChange () {
        // this.tableShow()
        // this.formChange = {}
        // this.$Message.info('Clicked cancel');
      },
      //新增用户
      add(){
        this.modalAdd = true
      },
      okAdd(formAdd){
        // console.log(this.$refs.formAdd.validate)
        if(this.formAdd.company_option == ''){
          this.$Message.warning({
            top: 50,
            duration: 4,
            content:'请先选择公司'
          });
        }else{
        this.$refs.formAdd.validate((valid) => {
          // console.log(valid)
            if (valid && this.formAdd.firstpass===this.formAdd.secondpass) {
              this.$axios({
                    method: 'post',
                    url: 'admin/add/normaladmin',
                    data: JSON.stringify({
                      username: this.formAdd.username,
                      firstpass: this.formAdd.firstpass,
                      secondpass: this.formAdd.secondpass,
                      token:localStorage.getItem("jwt"),
                      company_id:this.formAdd.company_option
                    })
                  }).then(res => {
                    // console.log(res,'用户增加')
                    if(res.data.code == 200){
                      this.modalAdd = false
                      this.tableShow()
                      this.$Message.success("添加成功")
                    }else if(res.data.code == 420){
                      this.modalAdd = true
                      this.$Message.warning({
                        top: 50,
                        duration: 4,
                        content:'该用户信息已过期，请重新登录'
                      });
                    }
                  }).catch(res => {
                    this.$Message.error('请求超时,请稍后再试...');
                  });
              callback();
            } else{
              this.loadingAdd = false;
              this.$nextTick(() => {
                this.loadingAdd = true;
              });
              this.$Message.warning({
                top: 50,
                duration: 4,
                content:'格式错误'
              });
            }
          })
        }
        // this.tableShow()
        this.formAdd = {}
        },
      cancelAdd () {
        // this.tableShow()
        this.formAdd = {}
        // this.$Message.info('Clicked cancel');
      },
      //删除
      delete(row){
        // console.log(row)
        this.$Modal.confirm({
          title: '删除',
          content: '确认删除该条信息吗？',
          onOk: () => {
            this.$axios({
              method: 'post',
              url: 'admin/cpadmin/remove',
              data: {
                id: row.id,
                token:localStorage.getItem('jwt')
              }
            }).then(res => {
              this.tableShow()
            }).catch(res => {
              this.$Message.error('请求超时,请稍后再试...');
            });
          },
          onCancel: () => {
            this.$Message.info('取消');
          }
        });
      },
      //分页
      changepage (index) {
        this.page = index
        // console.log(this.page,'123')
        this.tableShow()
        var _start = (index - 1) * this.pageSize;
        var _end = index * this.pageSize;
        this.data1 = this.ajaxHistoryData.slice(_start, _end);
      }
    },
  }
</script>

<style scoped>
</style>
