<template>
  <div>
    <!-- <Button style="margin-right: 5px;margin-bottom: 10px" type="info">新增</Button> -->
    <span style="font-size: 28px;color: midnightblue;padding-top:10px">对账月份：</span>
   
    <DatePicker @on-change="month" type="month" :clearable='false' :placeholder="date" style="width: 100px;;position:relative;top: -7px;"></DatePicker>
   
    <!-- <Select @on-change="choice" v-model="model1" size="large" style="width:120px;margin-right:20px;text-align: center;position: relative;top: -7px;" :placeholder="date ">
        <Option v-for="item in cityList" :value="item.label" :key="item.value">{{ item.label }}</Option>
    </Select> -->
    <!-- <span style="font-size: 28px;color: midnightblue;padding-top:10px">订单类型：</span>
    <Select @on-change="choicetype" v-model="model1" size="large" style="width:120px;margin-right:10px;text-align: center;position: relative;top: -7px;" placeholder="请选择订单类型">
        <Option v-for="item in type" :value="item.label" :key="item.value">{{ item.label }}</Option>
    </Select> -->
    <!-- 预约 -->
    <Table :columns="columns1" :data="data1" style="margin-top: 10px" ref="datashow"></Table>
    <Table v-if="false" :columns="columns2" :data="data2" style="margin-top: 10px" ref="table"></Table>
    <div>
        <Button type="primary" @click="daochuc" style="margin-right: 20px;margin-top: 15px;background-color:midnightblue;border:1px solid midnightblue;font-size: 15px;" size="large"><Icon type="ios-download-outline"></Icon> 
          <a :href="href" target="_blank" style="color: #fff">
          下载本月账单明细
          </a>
        </Button>
        <Button v-if="status &&showBtn" type="info" style="margin-right: 10px;margin-top: 15px;background-color:#76EE00;border:1px solid #76EE00;font-size: 15px;" size="large" @click="checkmounth">确认本月账单无误</Button>
        <Button v-if="unstatus &&showBtn" type="info" style="margin-right: 10px;margin-top: 15px;background-color:#ABABAB;border:1px solid #ABABAB;font-size: 15px;" size="large">已确认本月账单</Button>
        <div style="width:300px;position: relative;top: -35px;left: 360px;color: #FF0000;">
            <span>确认订单后将封存不容更改。如发现订单出现错误，</span><br>
            <span>请勿确认对账单并致电平台客服400-1234-1234查询。</span>
        </div>
        <div style="width:200px;position: relative;top: -66px;right: 150px;float:right;font-size: 18px;">
            <strong>本月总收费：</strong>
            <strong style="border-bottom:1px solid black">{{total}}</strong>
        </div>        
    </div>
    <!--//预约分页-->
    <div style="text-align: right;clear:both">
      <Page :total="dataCount" :page-size="pageSize" show-total class="paging" @on-change="changepage"></Page>
    </div>
  </div>
</template>

<script>
    export default {
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
          //下载账单明细
            status:true,
            unstatus:false,
            date:{},
            total:'',
            href:'javascript:void(0);', 
            select_date:'',
            select_type:'',
            download:'',
            model1: '',
            cityList: [
                {
                    value: '01',
                    label: '2019-01'
                },
                {
                    value: '02',
                    label: '2019-02'
                },
                {
                    value: '03',
                    label: '2019-03'
                },
                {
                    value: '04',
                    label: '2019-04'
                },
                {
                    value: '05',
                    label: '2019-05'
                },
                {
                    value: '06',
                    label: '2019-06'
                },
                {
                    value: '07',
                    label: '2019-07'
                },
                {
                    value: '08',
                    label: '2019-08'
                },
                {
                    value: '09',
                    label: '2019-09'
                },
                {
                    value: '10',
                    label: '2019-10'
                },
                {
                    value: '11',
                    label: '2019-11'
                },
                {
                    value: '12',
                    label: '2019-12'
                }
            ],
            //    分页
            ajaxHistoryData: [],
            // 初始化信息总条数
            dataCount: 0,
            // 每页显示多少条
            pageSize: 10,
            page:1,
            columns1: [
                {
                  title: '服务项目',
                  key: 'service_name',
                  // width: 100,   
                },
                {
                  title: '服务次数',
                  key: 'counts'
                },
                {
                  title: '服务单价（￥）',
                  key: 'service_price'
                },
                {
                  title: '总收费（￥）',
                  key: 'price',
                },
            ],
            data1: [],
            columns2: [
                {
                  title: '姓名',
                  key: '姓名',
                  // width: 100,   
                },
                {
                  title: '完成日期',
                  key: '完成日期'
                },
                {
                  title: '服务单价（￥）',
                  key: 'service_price'
                },
                {
                  title: '总收费（￥）',
                  key: 'price',
                },
            ],
            data2: [],
            start:0,
            end:10,
            showBtn: true
        }
      },
      created() {
        let date = new Date()
        let month = Number(date.getMonth()) + 1 < 10 ? "0" + (Number(date.getMonth())+1) : Number(date.getMonth()) + 1
        console.log(month)
        this.date = date.getFullYear() + "-" + month
        this.select_date = this.date
        // this.href = 'https://www.acarepro.online/admin/download/xls?select_date=' + 
        //                 this.select_date + '&token=' + localStorage.getItem("jwt") +
        //                 '&ic_id='　+　localStorage.getItem("company_id")

        //  测试接口
        this.href = window.baseURL +  'admin/download/xls?select_date=' + 
                        this.select_date + '&token=' + localStorage.getItem("jwt") +
                        '&ic_id='　+　localStorage.getItem("company_id")
        this.tableShow() 
        
      },
      methods: {
        //选择月份
        month(Option){
          let y = Option.split('-')[0]
          let m = Option.split('-')[1]
          this.setShowBtn(y * 1, m * 1)
           this.select_date = Option
          //  this.href = 'https://www.acarepro.online/admin/download/xls?select_date=' + 
          //               this.select_date + '&token=' + localStorage.getItem("jwt") +
          //               '&ic_id='　+　localStorage.getItem("company_id")

          //测试接口
            this.href = window.baseURL + 'admin/download/xls?select_date=' + 
                        this.select_date + '&token=' + localStorage.getItem("jwt") +
                        '&ic_id='　+　localStorage.getItem("company_id")
            this.tableShow()  
        },
        setShowBtn (y, m) {
          let now = new Date().getTime()
          let D = new Date(y, m-1).getTime()
          console.log(D, now)
          if (now-10000 < D) {
            this.showBtn = false
          } else {
            this.showBtn = true
          }
        },
        //下载表格CSV格式
        daochuc(){
          if(this.select_date != ''){
            // this.href = 'https://www.acarepro.online/admin/download/xls?select_date=' + 
            //             this.select_date + '&token=' + localStorage.getItem("jwt") +
            //             '&ic_id='　+　localStorage.getItem("company_id")

            //测试接口
            this.href = window.baseURL + 'admin/download/xls?select_date=' + 
                        this.select_date + '&token=' + localStorage.getItem("jwt") +
                        '&ic_id='　+　localStorage.getItem("company_id")
          }else{
            this.$Message.warning({
              top: 50,
              duration: 4,
              content:'请先选择对帐月份'
            });
          }
        },
       
        //下载表格CSV格式
        // exportData () {
        //   this.$refs.table.exportCsv({
        //     filename: '本月预约账单明细'
        //   });
        // },
        //确认账单
        checkmounth(){
          const that = this
          let y = this.select_date.split("-")[0]
          let m = this.select_date.split("-")[1]
          this.$Modal.confirm({
                title: "提示",
                content: "确认" + y + '年' + m + '月' + "的账单?",
                onOk: () => {
                    that.$axios({
                    method: 'post',
                    url: 'admin/invoice/confirm',
                    data: {
                      token:localStorage.getItem("jwt"),
                      ic_id:localStorage.getItem("company_id"),
                      year_month:that.select_date
                    }
                  }).then(res => {
                    console.log(res)
                    if(res.data.code){
                      that.status = false
                      that.unstatus = true
                      that.$Message.success('已确认本月账单')
                    }
                  }).catch(res => {
                    // console.log(1212)
                    // this.$Message.error('请求超时,请稍后再试...');
                  });
                }
            })
          
        },
        //用户信息展示
        tableShow(){
          if(this.select_date != ''){
            this.$axios({
              method: 'post',
              url: 'admin/counts/all',
              data: {
                token:localStorage.getItem("jwt"),
                ic_id:localStorage.getItem("company_id"),
                year_month:this.select_date
              }
            }).then(res => {
              if (res.data.code == 420 || res.data.code != 200) {
                this.$Message.warning('登录信息已过期，请重新登录')
                return
              }
              console.log(res,'对账信息')
              this.total = res.data.total
              // this.status = res.data.status
              if(res.data.status == 0){
                this.unstatus = false
                this.status = true
              }else{
                this.status = false
                this.unstatus = true
              }
              if(res.data.code == 200){
                this.ajaxHistoryData = res.data.data;
                this.dataCount = res.data.data.length;
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
              }else if(res.data.code == 420){
                this.$Message.warning({
                  top: 50,
                  duration: 4,
                  content:'您的用户信息已过期，请重新登录'
                });
              }
            
            }).catch(err => {
              // console.log(1212)
              // this.$Message.error('请求超时,请稍后再试...');
              console.log(err)
              // this.$Message.error('获取账单失败')
            });
          }else{
            this.date = new Date()
            let mounth = this.date.getMonth()
            if(mounth == 0){
              mounth = 12
              this.date = (this.date.getFullYear() - 1 ) + '-' + mounth
            }else if(mounth < 10){
              this.date = this.date.getFullYear() + '-' + ( '0' + mounth)
            }else{
              this.date = this.date.getFullYear() + '-' + mounth
            }

            let date = new Date()
            let month = Number(date.getMonth()) + 1 
            this.date = date.getFullYear() + "-" + month
            
            this.$axios({
              method: 'post',
              url: 'admin/counts/all',
              data: {
                token:localStorage.getItem("jwt"),
                ic_id:localStorage.getItem("company_id"),
                year_month:this.date
              }
            }).then(res => {
              // console.log(res,'用户信息')
              this.total = res.data.total
              // this.status = res.data.status
              if(res.data.status == 0){
                this.unstatus = false
                this.status = true
              }else{
                this.status = false
                this.unstatus = true
              }
              if(res.data.code == 200){
                this.ajaxHistoryData = res.data.data;
                this.dataCount = res.data.data.length;
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
              }else if(res.data.code == 420){
                this.$Message.warning({
                  top: 50,
                  duration: 4,
                  content:'您的用户信息已过期，请重新登录'
                });
              }
            
            }).catch(res => {
              // console.log(1212)
              // this.$Message.error('请求超时,请稍后再试...');
              this.$Message.error('获取账单失败')
            });
          }
        },
        //修改
        xiugai(row){
          // console.log(row)
          this.modalChange = true
          // this.formItem = row
          this.formItem.model_id = row.brand_id
          this.formItem.new_model_name = row.name
          this.formItem.model_initial = row.initial
          this.imgChange = row.image_filename
        },
        handleBeforUploadChange (file) {
          // console.log(file)
          var index = file.name.lastIndexOf(".")
          var fileChange = 6
          this.formItem.car_logo[0].type = file.name.substring(index+1,file.name.length);
          console.log(fileChange,'jdsfsnfjk')

          const reader = new FileReader()
          // console.log(reader.readAsDataURL)
          reader.readAsDataURL(file)
          reader.onload = () => {
            const _base64 = reader.result
            this.imgChange = _base64 //将_base64赋值给图片的src，实现图片预览
            this.formItem.car_logo[0].base64= _base64
          }
          return false//阻止图片继续上传，使得form表单提交时统一上传 
        },
        handleSuccessChange(response){
          // console.log(response.url)
          // this.url = response.url
        },
        //确定修改
        okChange (formItem) {
            this.$refs[formItem].validate((valid) => {
              if (valid) {
                this.$axios({
                  method: 'post',
                  url: 'backstage/bsbranddel/',
                  data: this.$qs.stringify({
                    model_id:this.formItem.model_id,
                    new_model_name:this.formItem.new_model_name,
                    model_initial: this.formItem.model_initial,
                    base64: this.formItem.car_logo[0].base64,
                    type: this.formItem.car_logo[0].type
                  })
                }).then(res => {
                  // console.log(res,'用户修改')
                  this.modalChange=false
                  this.fileChange = 1
                  this.tableShow()
                }).catch(res => {
                  this.$Message.error('请求超时,请稍后再试...');
                });
                // callback();
              } else{
                this.loadingChange = false;
                this.$nextTick(() => {
                  this.loadingChange = true;
                });
                this.$Message.error('修改失败,请正确填写信息!');
              }
          })
          // this.tableShow()
        },
        cancelChange () {
          this.modalChange=false
          this.tableShow()
          // this.$Message.info('Clicked cancel');
        },
        //新增
        add(){
          this.modalAdd = true
        },
        handleBeforUploadAdd (file) {
          console.log(file)
          var indexadd = file.name.lastIndexOf(".")
          this.formAdd.type = file.name.substring(indexadd+1,file.name.length);

          const reader = new FileReader()
          // console.log(reader.readAsDataURL)
          reader.readAsDataURL(file)
          reader.onload = () => {
            const _base64add = reader.result
            this.imgAdd = _base64add //将_base64赋值给图片的src，实现图片预览
            this.formAdd.base64= _base64add
          }
          return false//阻止图片继续上传，使得form表单提交时统一上传 
        },
        handleSuccessAdd(response){
          console.log(response.url)
          // this.url = response.url
        },
        okAdd (formAdd) {
          console.log('454')
          this.$refs[formAdd].validate((valid) => {
            if (valid) {
              console.log('454')
              this.$axios({
                method: 'post',
                url: 'backstage/bsbrandadd/',
                data: this.$qs.stringify({
                  model_name:this.formAdd.model_name,
                  model_initial: this.formAdd.model_initial,
                  base64: this.formAdd.base64,
                  type: this.formAdd.type
                })
              }).then(res => {
                // console.log(res,'用户修改')
                this.modalAdd=false
                this.tableShow()
                this.$Message.success('新增成功');
              }).catch(res => {
                this.$Message.error('请求超时,请稍后再试...');
              });
              // callback();
            } else{
              this.loadingAdd = false;
              this.$nextTick(() => {
                this.loadingAdd = true;
              });
              this.$Message.error('修改失败,请正确填写信息!');
            }
          })
          // this.tableShow()
        },
        cancelAdd () {
          this.modalAdd=false
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
                url: 'admin/user/delete',
                data: this.$qs.stringify({
                  Id: row.Id,
                  jwt:localStorage.getItem('jwt')
                })
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
          // console.log(index,'分页')
          this.page = index
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
