<template>
  <div>
    <!-- <Button style="margin-right: 5px;margin-bottom: 10px" type="info">新增</Button> -->
    <span style="font-size: 28px;color: midnightblue;padding-top:10px">对账公司：</span>
    <Select @on-change="choice" v-model="model1" size="large" style="width:150px;margin-right:20px;text-align: center;position: relative;top: -7px;" placeholder="请选择对账公司">
        <Option v-for="item in cityList" :value="item.id" :key="item.id">{{ item.name }}</Option>
    </Select>
    <span style="font-size: 28px;color: midnightblue;padding-top:10px">年份：</span>
    <DatePicker @on-change="choicetype" size="large" type="year" placeholder="请选择年份" style="width: 150px;text-align: center;position: relative;top: -7px;"></DatePicker>
    <!-- <Select @on-change="choicetype" v-model="model1" size="large" style="width:120px;margin-right:10px;text-align: center;position: relative;top: -7px;" placeholder="请选择年份">
        <Option v-for="item in type" :value="item.label" :key="item.value">{{ item.label }}</Option>
    </Select> -->
    <!-- 预约 -->
    <Table :columns="columns1" :data="data1" style="margin-top: 10px" ref="table"></Table>
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
            href:'https://www.acarepro.online/admin/download/xls', 
            select_company:'',
            select_type:'',
            download:'',
            model1: '',
            cityList: [],
            type: [
                {
                    value: '2015',
                    label: '2015'
                },
                {
                    value: '2016',
                    label: '2016'
                },
                 {
                    value: '2017',
                    label: '2017'
                },
                {
                    value: '2018',
                    label: '2018'
                },
                 {
                    value: '2019',
                    label: '2019'
                }
            ],
            //    分页
            ajaxHistoryData: [],
            // 初始化信息总条数
            dataCount:0 ,
            // 每页显示多少条
            pageSize: 20,
            page:1,
            columns1: [
                {
                  title: '对账月份',
                  key: 'month_name',
                  // width: 100,   
                },
                {
                  title: '确认状态',
                  key: 'is_confirmed',
                  render: (h, params) => {
                    return h('Tag', {
                    props: {
                        color: params.row.is_confirmed === 0 ? 'blue' : params.row.is_confirmed === 1 ? 'green' :''
                    }
                    }, params.row.is_confirmed === 0 ? '未确认' : params.row.is_confirmed === 1 ? '已确认' :'');
                  }
                },
                // {
                //   title: '服务单价（￥）',
                //   key: 'service_price'
                // },
                // {
                //   title: '总收费（￥）',
                //   key: 'price',
                // },
            ],
            data1: [],
            start:0,
            end:20
        }
      },
      created() {
         //保险公司
        this.$axios({
          method: 'post',
          url: 'admin/all/company',
          data: {
            token:localStorage.getItem("jwt"),
            // ic_id:localStorage.getItem("company_id"),
          }
        }).then(res => {
          // console.log(res.data.data)
          this.cityList = res.data.data
          // this.tableShow()
        }).catch(res => {
          this.$Message.error('登录信息已过期，请重新登录')
        });
        
      },
      methods: {
        //选择
        choice(Option){
          this.select_company = Option
          this.tableShow()
        },
        //年份
        choicetype(res,option){
          // console.log(res,option,'123')
          this.select_type = res
          this.tableShow()
        },
        //确认账单
        checkmounth(){
          this.$axios({
            method: 'post',
            url: 'admin/invoice/confirm',
            data: {
              token:localStorage.getItem("jwt"),
              ic_id:localStorage.getItem("company_id"),
              year_month:this.date
            }
          }).then(res => {
            if(res.data.code){
              this.status = false
              this.unstatus = true
            }
          }).catch(res => {
            // console.log(1212)
            // this.$Message.error('请求超时,请稍后再试...');
          });
        },
        //用户信息展示
        tableShow(){
          if(this.select_company == ''){
            this.$Message.warning({
              top: 50,
              duration: 4,
              content:'请先选择公司'
            });
          }else{
            if(this.select_type != ''){
              this.$axios({
                method: 'post',
                url: 'admin/check/show',
                data: {
                  token:localStorage.getItem("jwt"),
                  // ic_id:localStorage.getItem("company_id"),
                  ic_id:this.select_company,
                  year:this.select_type
                }
              }).then(res => {
                console.log(res,'对账')
                if (res.data.code == 420 || res.data.code != 200) {
                  this.$Message.warning('登录信息已过期，请重新登录')
                  return
                }
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
              });
            }else{
              this.date = new Date()
              this.date = this.date.getFullYear()
              console.log('data')
              this.$axios({
                method: 'post',
                url: 'admin/check/show',
                data: {
                  token:localStorage.getItem("jwt"),
                  ic_id:this.select_company,
                  year:this.date
                }
              }).then(res => {
                console.log(res,'对账')
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
              });
            }
          }
        },
        //分页
        changepage (index) {
          // console.log(index,'分页')
          this.page = index
          // this.tableShow()
          var _start = (index - 1) * this.pageSize;
          var _end = index * this.pageSize;
          this.data1 = this.ajaxHistoryData.slice(_start, _end);
          
        }
      },
    }
</script>

<style scoped>
  

</style>
