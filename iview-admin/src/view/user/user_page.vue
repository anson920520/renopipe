<template>
  <div class="user-page">
    <!-- <Button v-if="adm1" v-show="company_hide" style="margin-left: 10px;margin-right: 5px" type="info" @click="add">新增管理员</Button> -->
    <Button v-show="company_hide" style="margin-left: 10px;margin-right: 5px" type="info" @click="add">新增員工</Button> 
    <Button v-show="company_hide" style="margin-left: 10px;margin-right: 5px" type="info" @click="showCsv = true">批量新增員工</Button> 
     <!-- 选择公司 -->
   
    <input type="text" v-if="company_hide" class="searchUser" @input='searchUser($event)' placeholder="搜索員工"  />
    <Table v-if="adm3" style="margin-top: 10px" :columns="columns1" :data="data1"></Table>
    <Table v-if="adm4" style="margin-top: 10px" :columns="columns2" :data="data1"></Table>
    <!--新增-->
    <Modal
      v-model="modalAdd"
      title="新增員工"
      :width="400"
      @on-ok="okAdd('formAdd')"
      @on-cancel="cancelAdd"
      :loading="loadingAdd">
      <Form :model="formAdd" :label-width="100" :rules="ruleValidateAdd" ref="formAdd">
        <FormItem v-if="companyid" label="保险公司" prop="ic_id">
          <Select v-model="formAdd.ic_id" style="width:200px" @on-change="choice_company">
            <Option v-for="item in company" :value="item.id" :key="item.id">{{ item.name }}</Option>
          </Select>
        </FormItem>
        <FormItem label="保险公司套餐" prop="plan_id">
          <Select v-model="formAdd.plan_id" style="width:200px" @on-change="choice_plan">
            <Option v-for="item in plan" :value="item.id" :key="item.id">{{ item.plan_name }}</Option>
          </Select>
        </FormItem>
        <FormItem label="用户名" prop="name">
          <Input v-model="formAdd.name" placeholder="请输入用户名" style="width:200px" @on-keyup="enter"></Input>
        </FormItem>
        <FormItem label="保单号" prop="identify_id">
          <Input v-model="formAdd.identify_id" placeholder="请输入保单号" style="width:200px" @on-keyup="enter"></Input>
        </FormItem>
        <FormItem label="保单开始日期" prop="start_date">
          <DatePicker type="date" placeholder="请选择开始时间" style="width: 200px" @on-change="choice_date"></DatePicker>
        </FormItem>
        <FormItem label="保单结束日期" prop="end_date">
          <DatePicker type="date" placeholder="请选择结束时间" style="width: 200px" @on-change="choice_time"></DatePicker>
        </FormItem>
        <!-- <FormItem label="保险公司" prop="insurance_company_id">
          <Select v-model="formAdd.insurance_company_id" style="width:200px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </FormItem> -->
        <FormItem label="车品牌" prop="car_brand">
          <Select v-model="formAdd.car_brand" style="width:200px" @on-change="chioce_brand">
            <Option v-for="item in car_brand" :value="item.id" :key="item.id">{{ item.brand }}</Option>
          </Select>
        </FormItem>
        <FormItem label="车型" prop="car_style">
          <Select v-model="formAdd.car_style" style="width:200px" @on-change="chioce_style">
            <Option v-for="item in car_styles" :value="item.id" :key="item.id">{{ item.type }}</Option>
          </Select>
        </FormItem>
        <FormItem label="车架号" prop="inc_vin">
          <Input v-model="formAdd.inc_vin" placeholder="请输入车架号" style="width:200px" @on-keyup="enter"></Input>
        </FormItem>
        <FormItem label="车牌号" prop="car_plate_number">
          <Input v-model="formAdd.car_plate_number" placeholder="请输入车牌号" style="width:200px" @on-keyup="enter"></Input>
        </FormItem>
      </Form>
    </Modal>

    <Modal
      v-model="modalChange"
      title="修改用户信息"
      :width="400"
      @on-ok="okEdit">
      <div class="formItemWrap">
        <span style="padding-right:10px;">保险公司</span>
        <Select v-model="ic_id" style="width:200px" @on-change="chooseInsurance">
          <Option v-for="item in company" :value="item.id" :key="item.id">{{ item.name }}</Option>
        </Select>
      </div>

      <div class="formItemWrap">
        <span style="padding-right:10px;">保险套餐</span>
        <Select v-model="plan_id" style="width:200px">
          <Option v-for="item in plan" :value="item.id" :key="item.id">{{ item.plan_name }}</Option>
        </Select>
      </div>

      <div class="formItemWrap">
        <span style="padding-right:10px;">姓名</span>
        <Input v-model="name" style="width: 200px" @on-keyup="enter" />
      </div>

      <div class="formItemWrap">
        <span style="padding-right:10px;">保单号</span>
        <Input v-model="insurance_id" style="width: 200px" @on-keyup="enter" />
      </div>

      <div class="formItemWrap">
        <span style="padding-right:10px;">保单开始时间</span>
        <DatePicker :value="start_date" type="date" placeholder="请选择开始时间" style="width: 200px" @on-change='chooseStartDate'></DatePicker>
      </div>

      <div class="formItemWrap">
        <span style="padding-right:10px;">保单结束时间</span>
        <DatePicker :value='end_date' type="date" placeholder="请选择结束时间" style="width: 200px" @on-change="chooseEndDate"></DatePicker>
      </div>

      <div class="formItemWrap">
        <span style="padding-right:10px;">车品牌</span>
          <i-select style="width:200px" v-model="car_brand_id">
            <Option v-for="item in car_brand" :value="item.id" :key="item.id">{{ item.brand }}</Option>
          </i-select>
      </div>

      <div class="formItemWrap">
        <span style="padding-right:10px;">车型</span>
          <i-select style="width:200px" v-model="car_style_id">
            <Option v-for="item in car_styles" :value="item.id" :key="item.id">{{ item.type }}</Option>
          </i-select>
      </div>

      <div class="formItemWrap">
        <span style="padding-right:10px;">车架号</span>
        <Input v-model="inc_vin" placeholder="请输入车架号" style="width:200px" @on-keyup="enter"></Input>
      </div>

      <div class="formItemWrap">
        <span style="padding-right:10px;">车牌号</span>
        <Input v-model="car_plate_number" placeholder="请输入车牌号" style="width:200px" @on-keyup="enter"></Input>
      </div>

      <div class="formItemWrap">
        <span style="padding-right:10px;">积分</span>
        <Input v-model="points" placeholder="请输入积分" style="width:200px" @on-keyup="enter"></Input>
      </div>
    </Modal>

    <Modal v-model="showCsv"
      title= "批量新增用户"
      
      :width='400'>
      <div style="margin-left: 80px;position: relative">
        <span style="position: absolute;left: -80px;top: 7px;">选择保险公司</span>
        <Select v-model="upLoad_ic_id" style="width:200px">
          <Option v-for="item in company" :value="item.id" :key="item.id">{{ item.name }}</Option>
        </Select>
      </div>
      <div style="margin-left: 80px;margin-top: 30px;">
        <Upload :action="baseURL + 'admin/user/csv/' + upLoad_ic_id"
          ref="upload"
          multiple
          :format="['csv']"
          :show-upload-list="true"
          :before-upload="handleBeforUploadAdd"
          :on-success="okUpLoad"
          :data="upLoadForm" >
          <Button type="primary" icon="ios-cloud-upload-outline">选择csv文件</Button>
        </Upload>
      </div>
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
      const that = this
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
        upLoad_ic_id: "",
        baseURL: window.baseURL,
        upLoadForm: {
          file: "",
          token: localStorage.getItem("jwt")
        },
        showCsv: false,
        company_hide:false,
        modelcompany: localStorage.getItem('company_id'),
        company_store:[],
        adm1:false,
        adm2:false,
        adm3:false,
        adm4:false,
        //新增用户
        modalAdd:false,
        loadingAdd:false,
        plan:[],
        company:[],
        companyid:true,
        car_brand:[],
        car_styles:[],
        cityList: [
          {
            value: 'New York',
            label: 'New York'
          },
          {
            value: 'London',
            label: 'London'
          }
        ],
        formAdd:{
          name:'',
          identify_id:'',
          plan_id:"",
          ic_id:'',
          // insurance_company_id:'',
          inc_vin:"",
          start_date:'',
          end_date:'',
          car_style:'',
          car_brand:'',
          car_plate_number: ""
        },
        ruleValidateAdd: {
            ic_id: [
              { type: 'number',required: true, message: '不能为空', trigger: 'blur' },
              // { type: 'number',required: true, message: '不能为空', trigger: 'blur' },
            ],
            name: [
              { required: true, message: '不能为空', trigger: 'blur' }
            ],
            identify_id: [
              { required: true, message: '不能为空', trigger: 'blur' },
              // {type: 'number',required:true,validator:validatePhone,message:'请输入正确的手机号',trigger:'change'}
            ],
            start_date: [
              {required: true, message: '日期不能为空!', trigger: 'blur', pattern: /.+/},
              // { type: 'number',required: true, message: '不能为空', trigger: 'blur' },
            ],
            end_date: [
              {required: true, message: '日期不能为空!', trigger: 'blur', pattern: /.+/},
              // { type: 'number',required: true, message: '不能为空', trigger: 'blur' },
            ],
            car_style: [
              // { required: true, message: '不能为空', trigger: 'blur' },
              { type: 'number',required: true, message: '不能为空', trigger: 'blur' },
            ],
            car_brand: [
              // { required: true, message: '不能为空', trigger: 'blur' },
              { type: 'number',required: true, message: '不能为空', trigger: 'blur' },
            ],
            plan_id: [
              // { required: true, message: '不能为空', trigger: 'blur' },
              { type: 'number',required: true, message: '不能为空', trigger: 'blur' },
            ],
            inc_vin: [
              {required: true, message: '不能为空', trigger: 'blur' }
            ],
            car_plate_number :[
              {required: true, message: '不能为空', trigger: 'blur' },
              {pattern: /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/, message: '车牌号格式错误', trigger: 'blur' }
            ]
          },
        //修改
        modalChange:false,
        loadingChange:false,
        formChange:{
          name:'',
          insurance_id:'',
          plan_id:"",
          ic_id:'',
          // insurance_company_id:'',
          inc_vin:"",
          start_date:'',
          end_date:'',
          car_style:'',
          car_brand:'',
          car_plate_number: ""
        },
        ruleValidateChange: {
            points: [
              { required: true, message: '不能为空', trigger: 'blur' }
            ],
            name: [
              { required: true, message: '不能为空', trigger: 'blur' }
            ],
            identify_id: [
              { required: true, message: '不能为空', trigger: 'blur' },
              // {type: 'number',required:true,validator:validatePhone,message:'请输入正确的手机号',trigger:'change'}
            ],
            start_date: [
              { required: true, message: '不能为空', trigger: 'blur' },
              // { type: 'number',required: true, message: '不能为空', trigger: 'blur' },
            ],
            end_date: [
              { required: true, message: '不能为空', trigger: 'blur' },
              // { type: 'number',required: true, message: '不能为空', trigger: 'blur' },
            ],
            inc_vin: [
              { required: true, message: '不能为空', trigger: 'blur' },
              // { type: 'number',required: true, message: '不能为空', trigger: 'blur' },
            ],
            ic_id: [
              { required: true, message: '不能为空', trigger: 'blur' },
              // { type: 'number',required: true, message: '不能为空', trigger: 'blur' },
            ],
            car_brand: [
              { required: true, message: '不能为空', trigger: 'blur' },
              // { type: 'number',required: true, message: '不能为空', trigger: 'blur' },
            ],
            plan_id: [
              { required: true, message: '不能为空', trigger: 'blur' },
              // { type: 'number',required: true, message: '不能为空', trigger: 'blur' },
            ],
            inc_vin: [
              { required: true, message: '不能为空', trigger: 'blur' },
            ],
            car_plate_number :[
              {required: true, message: '不能为空', trigger: 'blur' }
            ]
          },
        //    分页
        ajaxHistoryData: [],
        // 初始化信息总条数
        dataCount: 0,
        // 每页显示多少条
        pageSize: 20,
        page:1,
        columns1: [
          {
            title: '員工名',
            key: 'name',
            // width: 100
          },
          // {
          //   title: '手机号',
          //   key: 'phone',
          //   // width: 90
          // },
          {
            title: '加入日期',
            key: 'start_date',
            // width: 170
            render: (h, params) => {
              return h(
                'div',
                params.row.start_date ? params.row.start_date.split("T")[0] : null
              )
            }
          },
          {
            title: "是否绑定微信",
            key: "wechat_union",
            render: (h, params) => {
              // console.log(params.row.wechat_union)
              return h(
                'Tag',
                {
                  props: {
                    type: "border",
                    color: params.row.wechat_union == "None" || params.row .wechat_union == "" || params.row.wechat_union == null ? "error" : "success"
                  }
                },
                params.row.wechat_union == "None" || params.row .wechat_union == "" || params.row.wechat_union == null ? "未绑定" : "已绑定"
              )
            }
          },
          {
            title: "是否冻结",
            key: "status",
            render: (h, params) => {
              // console.log(params.row.wechat_union)
              return h(
                'Tag',
                {
                  props: {
                    color: params.row.status == 1 ? "success" : "error",
                    type: "border"
                  }
                },
                params.row.status == 1 ? "未冻结" : "已冻结 "
              )
            }
          },
          {
            title: "小組编号",
            key: "points"
          },
          {
            title: "操作",
            render: (h, params) => {
              // console.log(params.row.wechat_union)
              let wx = params.row.wechat_union
              return h(
                'div',
                {
                  class: "user-btn"
                },
                [
                  h(
                    "div",
                    {
                      style: {
                        marginTop: "3px",
                        marginLeft: "10px",
                        // position: "relative"
                      }
                    },
                    "操作"
                  ),
                  h("div",{ class: "triangle" }),
                  h(
                    'div',
                    {
                      class: "user-btn-item"
                    },
                    [
                      h(
                        "div",
                        {
                          class: "btn-option",
                          on: {
                            click: () => {
                              that.xiugai(params.row)
                            }
                          }
                        },
                        "编辑"
                      ),
                      h(
                        "div",
                        {
                          class: "btn-option",
                          style: {
                            display: params.row.status == 1 ? "flex" : "none"
                          },
                          on: {
                            click: () => {
                              this.freeze(params.row)
                            }
                          }
                        },
                        "冻结用户"
                      ),
                      h(
                        "div",
                        {
                          class: "btn-option",
                          style: {
                            display: params.row.status == 0 ? "flex" : "none"
                          },
                          on: {
                            click: () => {
                              this.freeze(params.row)
                            }
                          }
                        },
                        "解冻用户"
                      ),
                      h(
                        "div",
                        {
                          class: "btn-option",
                          style: {
                            display: wx == "None"|| wx == "" || wx == null ? "none" : this.company_hide ? "inlone-block" : "none",
                          },
                          on: {
                            click: () => {
                              this.unbind(params.row);
                            }
                          }
                        },
                        "解绑微信"
                      ),
                      h(
                        "div",
                        {
                          class: "btn-option",
                          on: {
                            click: () => {
                              this.delete(params.row);
                            }
                          }
                        },
                        "删除"
                      )
                    ]
                  ),
                ],
                '操作'
              )
            }
          },
          
        ],
        columns2: [
         {
            title: '用户名',
            key: 'name',
            // width: 90
          },
          {
            title: '手机号',
            key: 'phone',
            // width: 90
          },
          {
            title: '开始日期',
            key: 'start_date',
            // width: 150
            render: (h, params) => {
              return h(
                'div',
                params.row.start_date ? params.row.start_date.split("T")[0] : null
              )
            }
          },
           {
            title: '结束日期',
            key: 'end_date',
            // width: 150
            render: (h, params) => {
              return h(
                'div',
                params.row.end_date ? params.row.end_date.split("T")[0] : null
              )
            }
          },
          {
            title: '车牌号',
            key: 'car_plate_number',
            // width: 150
          },
          {
            title: '车品牌',
            key: 'user_car_brand',
            // width: 120
          },
          {
            title: '保单号',
            key: 'insurance_id',
          },
          {
            title: "车架号",
            key: "inc_vin"
          },
        ],
        data1: [],
        id: "",

        // 2020.1.6 lwz   修改用户
        name: '',
        user_id: "",
        insurance_id: "",
        plan_id: "",
        ic_id: "",          
        inc_vin: "",        //车架号
        car_brand_id: "",     //车品牌id
        start_date: "",
        end_date: "",
        car_style_id: "",      //车座数 id
        car_plate_number: "",
        points: "",   //积分
        timwe: null   //定时器
      }
    },
    created() {
      this.getAllCompany()
      if(localStorage.getItem("role_id")==1){
        this.adm1 = true
        this.adm2 = true
        this.adm3 = true
        this.adm4 = false
        this.company_hide = true
      }else if(localStorage.getItem("role_id")==2){
        this.formAdd.ic_id = localStorage.getItem("company_id")
        this.adm1 = false
        this.adm2 = true
        this.adm3 = true
        this.adm4 = false
        this.company_hide = false
        this.columns1 = [
          {
            title: '用户名',
            key: 'name',
            // width: 100
          },
          {
            title: '保单开始日期',
            key: 'start_date',
            // width: 170
            render: (h, params) => {
              return h(
                'div',
                params.row.start_date ? params.row.start_date.split("T")[0] : null
              )
            }
          },
           {
            title: '保单结束日期',
            key: 'end_date',
            // width: 170
            render: (h, params) => {
              return h(
                'div',
                params.row.end_date ? params.row.end_date.split("T")[0] : null
              )
            }
          },
          {
            title: '车牌号',
            key: 'car_plate_number',
            // width: 150
          },
          {
            title: '车品牌',
            key: 'user_car_brand',
            // width: 120
          },
          {
            title: '保单号',
            key: 'insurance_id',
          },
          {
            title: "车架号",
            key: "inc_vin"
          },
          {
            title: "是否绑定微信",
            key: "wechat_union",
            render: (h, params) => {
              // console.log(params.row.wechat_union)
              return h(
                'Tag',
                {
                  props: {
                    type: "border",
                    color: params.row.wechat_union == "None" || params.row .wechat_union == "" || params.row.wechat_union == null ? "error" : "success"
                  }
                },
                params.row.wechat_union == "None" || params.row .wechat_union == "" || params.row.wechat_union == null ? "未绑定" : "已绑定"
              )
            }
          },
        ]
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
            // console.log(res,'用户信息')
            this.company_store = res.data.data
      }).catch(res => {
            // console.log(1212)
            this.$Message.error('请求超时,请稍后再试...');
      });
    //   this.username()
      // console.log(localStorage.getItem('Id'),'a参数123132')
      // console.log(location.hash)
      // console.log(this.$store.state.app.role)
    },
    computed: {
      role () {
        return this.$store.state.app.role == 1
      },
      isRole1 () {
        return this.$store.state.user.role1 == 1
      }
    },
    methods: {
      //冻结  解冻
      freeze (list) {
        console.log(list)
        if (list.status == 1) {
          // 冻结
          this.$Modal.confirm({
            title: '冻结',
            content: '确定冻结该用户？',
            onOk: () => {
              this.$axios({
                method: 'post',
                url: 'admin/freeze/user',
                data: {
                  id: list.id,
                  token:localStorage.getItem('jwt')
                }
              }).then(res => {
                console.log(res)
                if (res.data.code == 200) {
                  this.$Message.success("已冻结该用户")
                  this.tableShow()
                } else {
                  this.$Message.warning("冻结失败")
                }
              }).catch(res => {
                this.$Message.error('请求超时,请稍后再试...');
              })
            }
          })
        } else {
          //解冻
          this.$Modal.confirm({
            title: '解冻',
            content: '确定解冻该用户？',
            onOk: () => {
              this.$axios({
                method: 'post',
                url: 'admin/unfreeze/user',
                data: {
                  id: list.id,
                  token:localStorage.getItem('jwt')
                }
              }).then(res => {
                console.log(res)
                if (res.data.code == 200) {
                  this.$Message.success("已解冻该用户")
                  this.tableShow()
                } else {
                  this.$Message.warning("解冻失败")
                }
              }).catch(res => {
                this.$Message.error('请求超时,请稍后再试...');
              })
            }
          })
        }
      },
      // 上传csv
      okUpLoad (res) {
        console.log('确定上传',res)
        if (res.msg == "导入成功") {
          this.$Message.success('添加用户成功')
          this.tableShow()
        } else {
          this.$Message.warning('添加用户失败，请检查文件内容')
        }
      },
      handleBeforUploadAdd (file) {
        console.log('before', file)
        this.upLoadForm.file = file
      },
      //解绑微信
      unbind (row) {
        this.$Modal.confirm({
          title: '解绑微信',
          content: '确认解绑该用户微信？',
          onOk: () => {
            this.$axios({
              method: 'post',
              url: 'admin/user/relieve_wechat',
              data: {
                id: row.id,
                token:localStorage.getItem('jwt')
              }
            }).then(res => {
              console.log(res)
              if (res.data.code == 200) {
                this.$Message.success("解绑成功")
                this.tableShow()
              } else {
                this.$Message.warning("解绑失败")
              }
            }).catch(res => {
              this.$Message.error('操作失败');
            });
          }
        });
      },
      enter (e) {
        if (e.keyCode == 13) {
          if (this.modalAdd) {
            this.okAdd('formAdd')
          } else if (this.modalChange) {
            this.okEdit()
          }
        }
      },
      //编辑用户 选择保单开始时间
      chooseStartDate (e) {
        console.log(e)
        this.start_date = e + " " + "00:00:00"
      },
      //编辑用户 选择保单结束时间
      chooseEndDate (e) {
        console.log(e)
        this.end_date = e + " " + "00:00:00"
      },

      // lwz确认修改
      okEdit () {
        let re =  /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/
        if (this.name == "") {
          this.$Message.warning("用户姓名不能为空")
          return
        } else if (!this.plan_id) {
          this.$Message.warning("保险套餐不能为空")
          return
        } else if (this.insurance_id == "") {
          this.$Message.warning("保单号不能为空")
          return
        } else if (this.inc_vin == "") {
          this.$Message.warning("车架号不能为空")
          return 
        } else if (this.car_plate_number == "") {
          this.$Message.warning("车牌号不能为空")
          return 
        } else if ( !re.test(this.car_plate_number)) {
          this.$Message.warning("车牌号格式错误")
          return 
        } else {
          this.$axios({
              url: "admin/user/updata",
              method: "POST",
              data: {
                  name: this.name,
                  ic_id: this.ic_id,
                  plan: this.plan_id,
                  user_id: this.user_id,
                  insurance_id: this.insurance_id,
                  inc_vin: this.inc_vin,
                  start_date: this.start_date,
                  end_date: this.end_date,
                  car_brand: this.car_brand_id,
                  car_style: this.car_style_id,
                  car_plate_number: this.car_plate_number? this.car_plate_number : "",
                  points: this.points * 1,
                  token: localStorage.getItem('jwt')
              }
          }).then(res => {
              // console.log(res)
              if (res.data.code == 400) {
                  this.$Message.error('修改失败')
              } else if (res.data.code == 200) {
                  this.$Message.success("修改成功")
                  this.modalChange = false
                  this.tableShow()
              }
          })
        }
      },
       //选择公司
      chioce_company(option){
        // console.log(option)
        this.page = 1
        this.$axios({
            method: 'post',
            url: 'admin/all/user',
            data: {
              page: this.page,
              offect: this.pageSize,
              token:localStorage.getItem("jwt"),
              ic_id:option + ""
            }
          }).then(res => {
            // console.log(res,'用户信息')
            this.ajaxHistoryData = res.data.data;
            this.dataCount = res.data.count;
            // var d = new Date()
            // d = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds(); 
            // console.log(d)
            //时间格式转换
            // for (var i = 0; i < res.data.data.length; i++) {
            //   var d = new Date(res.data.data[i].booking_date)
            //   d = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds(); 
            //   res.data.data[i].booking_date = d
            // }
            // // 初始化显示，小于每页显示条数，全显，大于每页显示条数，取前每页条数显示
            if (res.data.data.length < this.pageSize) {
              // this.historyData = this.ajaxHistoryData;
              this.data1 = res.data.data
            } else {
              this.data1 = this.ajaxHistoryData.slice(this.start, this.end);
              // console.log(this.data1)
            }
           
          }).catch(res => {
            // console.log(1212)
            this.$Message.error('请求超时,请稍后再试...');
          });
      },
      // 搜索用户
      searchUser (e) {
        clearTimeout(this.timer)
        setTimeout(() => {
          this.$axios({
            url: "admin/filter/user",
            method: "POST",
            data: {
              token: localStorage.getItem("jwt"),
              data: e.target.value,
              page: 1,
              offect: 1000
            }
          }).then(res => {
            console.log(res)
            this.data1 = res.data.data
            this.dataCount = res.data.data.length

          })
        }, 800)
      },
      //用户信息展示
      tableShow(){
        this.$axios({
          method: 'post',
          url: 'admin/all/user',
          data: {
            page: this.page,
            offect: this.pageSize,
            token:localStorage.getItem("jwt"),
            ic_id: this.modelcompany
          }
        }).then(res => {
          console.log(res,'用户信息')
          if (res.data.code == 420) {
              this.$Message.warning('登录信息已过期，请重新登录')
              return
          }
          this.ajaxHistoryData = res.data.data;
          if (res.data.data.length == 0 && this.page >= 2) {
              this.page--
              this.tableShow()
          }
          this.dataCount = res.data.count;
          // var d = new Date()
          // d = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds(); 
          // console.log(d)
          //时间格式转换
          // for (var i = 0; i < res.data.data.length; i++) {
          //   var d = new Date(res.data.data[i].booking_date)
          //   d = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds(); 
          //   res.data.data[i].booking_date = d
          // }
          // // 初始化显示，小于每页显示条数，全显，大于每页显示条数，取前每页条数显示
          if (res.data.data.length < this.pageSize) {
            // this.historyData = this.ajaxHistoryData;
            this.data1 = res.data.data
          } else {
            this.data1 = this.ajaxHistoryData.slice(this.start, this.end);
            // console.log(this.data1)
          }
          
        }).catch(res => {
          // console.log(1212)
          this.$Message.error('登录信息已过期，请重新登录')
        });
      },
      //修改
      xiugai(row){
        // alert('123')
        this.modalChange = true
        this.formChange = row
        console.log(row)

        // this.getInsurance()
        this.getAllCompany()
        this.getAllCarBrand()
        this.getAllCarStyle()
        this.user_id = row.id
        this.name = row.name
        this.insurance_id = row.insurance_id
        this.ic_id = row.ic_id
        this.plan_id = row.plan
        this.id = row.ic_id
        this.inc_vin = row.inc_vin
        this.car_brand_id = row.brand_id
        this.car_style_id = row.car_style
        this.points = row.points + ''

        // row.start_date?this.start_date = row.start_date:this.start_date = ''
        row.start_date?this.start_date = row.start_date.replace('T', " "):this.start_date = ''
        row.end_date?this.end_date = row.end_date.replace('T', " "): this.end_date = ""
        
        this.car_plate_number = row.car_plate_number
        this.getInsurance()
      },
      okChange(formChange){
        console.log(this.$refs.formChange.validate)
        this.$refs.formChange.validate((valid) => {
            if (valid) {
              this.$axios({
                    method: 'post',
                    url: 'admin/user/updata',
                    data: JSON.stringify({
                      name: this.formChange.name,
                      insurance_id: this.formChange.insurance_id,
                      plan_id: this.formChange.plan_id,
                      ic_id: this.formChange.ic_id,
                      inc_vin: this.formChange.inc_vin,
                      start_date: this.formChange.start_date,
                      end_date: this.formChange.end_date,
                      car_style: this.formChange.car_style,
                      car_brand: this.formChange.car_brand,
                      car_plate_number: this.formChange.car_plate_number,
                      token:localStorage.getItem("jwt")
                    })
                  }).then(res => {
                    // console.log(res,'用户增加')
                    if(res.data.code == 200){
                      // this.tableShow()
                      this.modaChange = false
                      this.formChange = {}
                    }else if(res.data.code == 420){
                      this.modalChange = true
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
              this.loadingChange = false;
              this.$nextTick(() => {
                this.loadingChange = true;
              });
            }
          })
        // this.tableShow()
        this.formChange = {}
        },
      cancelChange () {
        // this.tableShow()
        this.formChange = {}
        // this.$Message.info('Clicked cancel');
      },
      //新增用户
      add(){
        this.modalAdd = true
        if(localStorage.getItem("role_id")==2){
          this.companyid = false
        }
        //保险公司
        this.getAllCompany()
        //保险公司套餐
        
        //c车品牌
        this.getAllCarBrand()
         //c车型
        this.getAllCarStyle()
      },
      // 获取保险套餐
      getInsurance () {
        this.$axios({
            method: 'post',
            url: 'admin/plan',
            data: {
              token:localStorage.getItem("jwt"),
              ic_id:this.id
            }
            }).then(res => {
              // console.log(res.data.data)
              this.plan = res.data.data
              // this.tableShow()
            }).catch(res => {
              this.$Message.error('请求超时,请稍后再试...');
        });
      },
      //选择公司
      choice_company(option){
        this.formAdd.ic_id = option
        this.id = option
        this.getInsurance()
      },
      chooseInsurance (e) {
        this.id = e
        this.getInsurance()
      },
      //选择套餐
      choice_plan(option){
        // console.log(option)
        this.formAdd.plan_id = option
      },
      //车品牌
      chioce_brand(option){
        this.formAdd.car_brand = option
      },
      //车型
      chioce_style(option){
        this.formAdd.car_style = option
      },
      //选择时间
      choice_date(res,value){
        // console.log(res)
        this.formAdd.start_date = res + " " + "00:00:00"
        // console.log(option)
      },
      choice_time(res,value){
        // console.log(res)
        this.formAdd.end_date = res + " " + "00:00:00"
        // console.log(option)
      },
      okAdd(formAdd){
        // console.log(this.$refs.formAdd.validate)
        this.$refs[formAdd].validate((valid) => {
          // console.log('12345')
            if (valid) {
              // console.log('1234543452342')
              this.$axios({
                    method: 'post',
                    url: '/admin/add/useuser',
                    data: {
                      name: this.formAdd.name,
                      insurance_id: this.formAdd.identify_id,
                      plan_id: this.formAdd.plan_id,
                      ic_id: this.formAdd.ic_id,
                      inc_vin: this.formAdd.inc_vin,
                      start_date: this.formAdd.start_date,
                      end_date: this.formAdd.end_date,
                      car_style: this.formAdd.car_style,
                      car_brand: this.formAdd.car_brand,
                      car_plate_number: this.formAdd.car_plate_number,
                      token:localStorage.getItem("jwt")
                    }
                  }).then(res => {
                    console.log(res,'okAdd')
                    if(res.data.code == 200){
                      this.tableShow()
                      this.modalAdd = false
                      this.formAdd = {}
                      this.$Message.success('添加成功');

                    }else if(res.data.code == 400 || res.code == 420){
                      this.$Message.warning({
                        top: 50,
                        duration: 4,
                        content:'添加失败'
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
            }
          })
        // this.tableShow()
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
              url: 'admin/user/remove',
              data: {
                user_id: row.id,
                token:localStorage.getItem('jwt')
              }
            }).then(res => {
              console.log(res)
              if (res.data.code == 200) {
                this.$Message.success("删除成功")
                this.tableShow()
              } else {
                this.$Message.warning("删除失败")
              }
            }).catch(res => {
              this.$Message.error('请求超时,请稍后再试...');
            });
          },
          onCancel: () => {
            // this.$Message.info('取消');
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
        document.getElementsByClassName("content-wrapper")[0].scrollTop = 0
      },
      getAllCompany () {
        this.$axios({
          method: 'post',
          url: 'admin/all/company',
          data: {
            token:localStorage.getItem("jwt"),
            // ic_id:localStorage.getItem("company_id"),
          }
          }).then(res => {
            // console.log('所有公司', res.data.data)
            this.company = res.data.data
            // this.tableShow()
          }).catch(res => {
            this.$Message.error('请求超时,请稍后再试...');
        });
      },
      getAllCarBrand () {
        this.$axios({
          method: 'post',
          url: 'admin/car_brands',
          data: {
            token:localStorage.getItem("jwt"),
            // ic_id:localStorage.getItem("company_id"),
          }
          }).then(res => {
            // console.log(res.data.data)
            this.car_brand = res.data.data
            // this.tableShow()
          }).catch(res => {
            this.$Message.error('请求超时,请稍后再试...');
        });
      },
      getAllCarStyle () {
        this.$axios({
          method: 'post',
          url: 'admin/car_styles',
          data: {
            token:localStorage.getItem("jwt"),
            // ic_id:localStorage.getItem("company_id"),
          }
          }).then(res => {
            console.log(res)
            this.car_styles = res.data.data
            // this.tableShow()
          }).catch(res => {
            this.$Message.error('请求超时,请稍后再试...');
        });
      }
    },
  }
</script>

<style>
.user-btn {
  border: solid #CCC 1px;
  width: 60px;
  height: 25px;
  border-radius: 5px;
  position: relative;
  cursor: pointer;
}
.user-btn:hover > div {
  display: block !important;
}
.user-btn-item {
  width: 100px;
  left: -20px;
  top: 23px;
  position: absolute;
  border: solid #CCC 1px;
  display: none;
  background: white;
  border-radius: 3px;
  overflow: hidden;
  z-index: 1000;
}
.btn-option {
  padding: 5px;
  border-bottom: solid #CCC 1px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn-option:hover {
  background: #E3E3E3 !important;
  cursor: pointer;
  color: #2D8CF0;
}
.triangle {
  position: absolute;
  right: 5px;
  top: 9px;
  width: 0;
  height: 0;
  border: 4px solid transparent;
  border-top: solid #515A6E 4px;
}

/* 搜索用户 */
.searchUser {
  border: solid #DCDEE2 1px;
  outline: none;
  width: 200px;
  height: 35px;
  border-radius: 3px;
  margin-left: 20px;
  padding-left: 10px;
  font-size: 13px;
  color: #515A6E;
  vertical-align: middle;
}
.searchUser::-webkit-input-placeholder {
  color: #C5C8CE;
}


.user-page .ivu-table-wrapper div {
  overflow: visible !important;
}
.ivu-table-cell, .ivu-table-row {
  overflow: visible;
}
</style>
