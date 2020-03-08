<template>
    <div>
        <Button type="info" style="margin-right:10px" @click="store">新增门店</Button>
        <Button type="info" style="margin-right:10px" @click="serve">新增服务提供商</Button>
        <Button type="info" @click="company">新增保险公司</Button>
        
        <!-- 新增服务提供商 -->
        <div v-if="serveAdd" style="margin-top:20px">
            <p style="font-size:20px;margin-bottom:20px">新增服务提供商:</p>
            
            <Form ref="formServe" :model="formServe" :label-width="110" :rules="ruleServe">
                <FormItem label="服务提供商名称" prop="sp_name">
                    <Input v-model="formServe.sp_name" placeholder="请输入服务提供商名称" style="width:600px"></Input>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="okServe('formServe')">确定</Button>
                    <!-- <Button style="margin-left: 8px" @click="cancelServe">取消</Button> -->
                </FormItem>
            </Form>
        </div>
        <!-- 新增保险公司 -->
        <div v-if="companyAdd" style="margin-top:20px">
            <p style="font-size:20px;margin-bottom:20px">新增保险公司:</p>

            <Form ref="formCompany" :model="formCompany" :label-width="80" :rules="ruleCompany">
                <FormItem label="公司名称" prop="name">
                    <Input v-model="formCompany.name" placeholder="请输入公司名称" style="width:600px"></Input>
                </FormItem>
                <FormItem label="省份" prop="province">
                    <Select @on-change="choiceProvince" v-model="formCompany.province" size="large" style="width:600px;" placeholder="请选择省份">
                        <Option v-for="(item,index) in province_list" :value="item.id" :key="index">{{ item.name }}</Option>
                    </Select>
                    <!-- <Input v-model="formCompany.province" placeholder="请选择省份" style="width:600px"></Input> -->
                </FormItem>
                <FormItem label="城市" prop="city">
                     <Select @on-change="choiceCity" v-model="formCompany.city" size="large" style="width:600px;" placeholder="请选择城市">
                        <Option v-for="(item,index) in city_list" :value="item.id" :key="index">{{ item.name }}</Option>
                    </Select>
                    <!-- <Input v-model="formCompany.city" placeholder="请选择城市" style="width:600px"></Input> -->
                </FormItem>
                <FormItem label="详细地址" prop="address">
                    <Input v-model="formCompany.address" placeholder="请输入详细地址" style="width:600px"></Input>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="okCompany('formCompany')">确定</Button>
                    <!-- <Button style="margin-left: 8px" @click="cancelCompany">取消</Button> -->
                </FormItem>
            </Form>
        </div>
        <!-- 新增门店 -->
        <div v-if="storeAdd" style="margin-top:20px">
            <p style="font-size:20px;margin-bottom:20px">新增门店:</p>
            <Form ref="formStore" :model="formStore" :label-width="120" :rules="ruleStore">
                <FormItem label="服务供应商" prop="sp_id">
                    <Select @on-change="choiceServe" v-model="formStore.sp_id" size="large" style="width:600px;" placeholder="请选择服务供应商">
                        <Option v-for="(item,index) in serve_list" :value="item.id" :key="index">{{ item.sp_name }}</Option>
                    </Select>
                    <!-- <Input v-model="formStore.input" placeholder="Enter" style="width:600px"></Input> -->
                </FormItem>
                <FormItem label="门店名称" prop="name">
                    <Input v-model="formStore.name" placeholder="请输入门店名称" style="width:600px"></Input>
                </FormItem>
                <FormItem label="门店电话" prop="store_phone">
                    <Input v-model="formStore.store_phone" placeholder="请输入门店电话" style="width:600px"></Input>
                </FormItem>
                <FormItem label="省份" prop="province">
                    <Select @on-change="choiceProvince" v-model="formStore.province" size="large" style="width:600px;" placeholder="请选择省份">
                        <Option v-for="(item,index) in province_list" :value="item.id" :key="index">{{ item.name }}</Option>
                    </Select>
                    <!-- <Input v-model="formStore.input" placeholder="Enter" style="width:600px"></Input> -->
                </FormItem>
                <FormItem label="城市" prop="city">
                    <Select @on-change="choiceCity" v-model="formStore.city" size="large" style="width:600px;" placeholder="请选择城市">
                        <Option v-for="(item,index) in city_list" :value="item.id" :key="index">{{ item.name }}</Option>
                    </Select>
                    <!-- <Input v-model="formStore.input" placeholder="Enter" style="width:600px"></Input> -->
                </FormItem>
                <FormItem label="城区" prop="area">
                    <Select @on-change="choiceArea" v-model="formStore.area" size="large" style="width:600px;" placeholder="请选择城区">
                        <Option v-for="(item,index) in area_list" :value="item.id" :key="index">{{ item.name }}</Option>
                    </Select>
                    <!-- <Input v-model="formStore.input" placeholder="Enter" style="width:600px"></Input> -->
                </FormItem>
                <FormItem label="门店地址" prop="store_address">
                    <Input v-model="formStore.store_address" placeholder="请输入门店地址" style="width:600px"></Input>
                </FormItem>
                 <FormItem label="其他选项（多选）">
                     <Checkbox v-model="single0" @on-change="changeall0">是否有洗车服务</Checkbox>
                     <Checkbox v-model="single1" @on-change="changeall1">是否有保养服务</Checkbox>
                     <Checkbox v-model="single2" @on-change="changeall2">是否有喷漆服务</Checkbox>
                     <Checkbox v-model="single3" @on-change="changeall3">是否有停车服务</Checkbox>
                    <!-- <CheckboxGroup v-model="morchange" @on-change="changeall">
                        <Checkbox label="是否有洗车服务"></Checkbox>
                        <Checkbox label=" 是否有保养服务"></Checkbox>
                        <Checkbox label=" 是否有喷漆服务"></Checkbox>
                        <Checkbox label="  是否有停车服务"></Checkbox>
                    </CheckboxGroup> -->
                    <!-- <Input v-model="formStore.store_address" placeholder="请输入门店地址" style="width:600px"></Input> -->
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="okStore('formStore')">确定</Button>
                    <!-- <Button style="margin-left: 8px" @click="okStore('formStore')">取消</Button> -->
                </FormItem>
            </Form>
        </div>
    </div>
</template>

<script>
//   import tableDetail from './tableDetail.vue'
  export default {
    // components: { tableDetail },
    data () {
        return {
            serveAdd:false,
            companyAdd:false,
            storeAdd:true,
            morchange:[],
            single0:false,
            single1:false,
            single2:false,
            single3:false,
            formServe:{
                sp_name: '',
            },
            ruleServe:{
                sp_name: [
                    { required: true, message: '不能为空', trigger: 'blur' }
                ]
            },
            formStore:{
                sp_id:'',
                province:'',
                city:'',
                area:'',
                name: '',
                store_phone:"",
                store_address:'',
                wash_service:'0',
                maintenance_service:'0',
                lacquer_service:'0',
                stopcar_service:'0'

            },
            ruleStore:{
                sp_id: [
                    { type: 'number',required: true, message: '不能为空', trigger: 'blur' },
                ],
                province: [
                    { type: 'number',required: true, message: '不能为空', trigger: 'blur' },
                ],
                city: [
                    { type: 'number',required: true, message: '不能为空', trigger: 'blur' },
                ],
                area: [
                    { type: 'number',required: true, message: '不能为空', trigger: 'blur' },
                ],
                name: [
                    { required: true, message: '不能为空', trigger: 'blur' }
                ],
                //input数字验证
                store_phone: [
                    {required: true, message: '不能为空', trigger: 'blur'},
                    {type: 'number', message: '请输入数字', trigger: 'blur', transform(value)
                        {return Number(value);}
                    }
                    // { required: true, message: '不能为空', trigger: 'blur' },
                ],
                store_address: [
                    { required: true, message: '不能为空', trigger: 'blur' }
                ]
            },
            formCompany:{
                name: '',
                province:'',
                city:'',
                address:''
            },
            ruleCompany: {
                name: [
                    { required: true, message: '不能为空', trigger: 'blur' }
                ]
            },
            //省份
            province_list:[],
            city_list:[],
            area_list:[],
            serve_list:[]
        }
    },
    created() {
        this.serveAll()
        this.provinceAll()
    },
    methods: {
        //新增
        serve(){
            this.serveAdd = true
            this.companyAdd = false
            this.storeAdd = false
        },
        company(){
            this.serveAdd = false
            this.companyAdd = true
            this.storeAdd = false
            this.provinceAll()
        },
        store(){
            this.serveAdd = false
            this.companyAdd = false
            this.storeAdd = true
            this.serveAll()
        },
        //省份
        provinceAll(){
            this.$axios({
                method: 'post',
                url: 'admin/province/all',
                data: {
                    token:localStorage.getItem("jwt"),
                }
            }).then(res => {
                // console.log(res)
                if (res.data.code == 420 || res.data.code != 200) {
                    this.$Message.warning('登录信息已过期，请重新登录')
                    return
                }
                this.province_list = res.data.province_list
                // this.cityAll()
            }).catch(res => {
                this.$Message.error('请求超时,请稍后再试...');
            });
        },
        //服务供应商
        serveAll(){
            this.$axios({
                method: 'post',
                url: 'sp/all',
                data: {
                    token:localStorage.getItem("jwt"),
                }
            }).then(res => {
                this.serve_list = res.data.data
            }).catch(res => {
                this.$Message.error('请求超时,请稍后再试...');
            });
        },
        choiceServe(option){
            this.formStore.sp_id = option
        },
        choiceProvince(option){
            if(companyAdd){
                this.formCompany.city = option
            }else if(storeAdd){
                this.formStore.city = option
            }
            this.$axios({
                method: 'post',
                url: 'admin/city/all',
                data: {
                    province_id:option,
                    token: localStorage.getItem('jwt')
                }
            }).then(res => {
                // console.log(res)
                this.city_list = res.data.city_list
            }).catch(res => {
            // this.$Message.error('请求超时,请稍后再试...');
            });
        },
        choiceCity(option){
            if(companyAdd){
                this.formCompany.city = option
            }else if(storeAdd){
                this.formStore.city = option
            }
            // console.log(option,'fjdskfsdl')
            this.$axios({
                method: 'post',
                url: 'admin/area/all',
                data: {
                    city_id:option,
                    token: localStorage.getItem('jwt')
                }
            }).then(res => {
                console.log(res)
                this.area_list = res.data.district_list
                // this.mapOrder = res.data.stores_list
            }).catch(res => {
                // this.$Message.error('请求超时,请稍后再试...');
            });
        },
        choiceArea(option){
            this.formStore.area = option
        },
        //多选服务
        changeall0(res){
            if(res){
                this.wash_service = 1
            }else{
                this.wash_service = 0
            }
        },
        changeall1(res){
            if(res){
                this.maintenance_service = 1
            }else{
                this.maintenance_service = 0
            }
        },
        changeall2(res){
            if(res){
                this.lacquer_service = 1
            }else{
                this.lacquer_service = 0
            }
        },
        changeall3(res){
            if(res){
                this.stopcar_service = 1
            }else{
                this.stopcar_service = 0
            }
        },
        //确定添加服务商
        okServe(formServe){
            this.$refs.formServe.validate((valid) => {
            // console.log(valid)
            if (valid) {
                this.$axios({
                    method: 'post',
                    url: 'sp/add',
                    data: {
                      sp_name: this.formAdd.sp_name,
                      token:localStorage.getItem("jwt"),
                    }
                }).then(res => {
                   if(res.data.code == 200){
                        this.formServe = {}
                        this.$Message.success({
                            top: 50,
                            duration: 4,
                            content:res.data.msg
                        });
                   }else if(res.data.code == 400){
                        this.$Message.error({
                            top: 50,
                            duration: 4,
                            content:res.data.msg
                        });
                   }
                }).catch(res => {
                    this.$Message.error('请求超时,请稍后再试...');
                });
              callback();
            } else{
              this.$Message.error({
                top: 50,
                duration: 4,
                content:'必填项不能为空'
              });
            }
          })
        },
        cancelServe(){},
        //确定新增保险公司
        okCompany(formCompany){
            // console.log(this.$refs.formCompany.validate,'123')
            this.$refs.formCompany.validate((valid) => {
                console.log(valid)
                if (valid) {
                    this.$axios({
                        method: 'post',
                        url: 'admin/company/add',
                        data: {
                            name: this.formCompany.name,
                            province: this.formCompany.province,
                            city:this.formCompany.city,
                            token:localStorage.getItem("jwt"),
                            address:this.formCompany.address
                        }
                    }).then(res => {
                        console.log(res)
                        if(res.data.code == 200){
                            this.formCompany = {}
                            this.$Message.success({
                                top: 50,
                                duration: 4,
                                content:res.data.msg
                            });
                        }else if(res.data.code == 400){
                            this.$Message.error({
                                top: 50,
                                duration: 4,
                                content:res.data.msg
                            });
                        }    
                    }).catch(res => {
                        this.$Message.error('请求超时,请稍后再试...');
                    });
                    callback();
                }else {
                    this.$Message.error({
                        top: 50,
                        duration: 4,
                        content:'必填项不能为空'
                    });
                }
                    // console.log("456")
            })
        },
         //确定新增门店
        okStore(formStore){
            // console.log(this.$refs.formCompany.validate,'123')
            this.$refs.formStore.validate((valid) => {
                console.log(valid)
                if (valid) {
                    this.$axios({
                        method: 'post',
                        url: 'store/add',
                        data: {
                            sp_id:this.formStore.sp_id,
                            province:this.formStore.province,
                            city:this.formStore.city,
                            area:this.formStore.area,
                            name: this.formStore.name,
                            store_phone:this.formStore.store_phone,
                            store_address:this.formStore.store_address,
                            wash_service:this.formStore.wash_service,
                            maintenance_service:this.formStore.maintenance_service,
                            lacquer_service:this.formStore.lacquer_service,
                            stopcar_service:this.formStore.stopcar_service,
                            token:localStorage.getItem("jwt"),
                        }
                    }).then(res => {
                        console.log(res)
                        if(res.data.code == 200){
                            this.formStore = {}
                            this.$Message.success({
                                top: 50,
                                duration: 4,
                                content:res.data.msg
                            });
                        }else if(res.data.code == 400){
                            this.$Message.error({
                                top: 50,
                                duration: 4,
                                content:res.data.msg
                            });
                        }    
                    }).catch(res => {
                        this.$Message.error('请求超时,请稍后再试...');
                    });
                    callback();
                }else {
                    this.$Message.error({
                        top: 50,
                        duration: 4,
                        content:'必填项不能为空'
                    });
                }
                    // console.log("456")
            })
        },
        cancelCompany(){}
    },
  }
</script>

<style scoped>
</style>
