<template>
  <div>
    <!-- <Button style="margin-right: 5px;margin-bottom: 10px" type="info">新增</Button> -->
    <span style="font-size: 28px;color: midnightblue;padding-top:10px">对账月份：</span>
    <Select @on-change="choice" v-model="model1" size="large" style="width:120px;margin-right:20px;text-align: center;position: relative;top: -7px;" placeholder="请选择月份">
        <Option v-for="item in cityList" :value="item.label" :key="item.value">{{ item.label }}</Option>
    </Select>
    <!-- <span style="font-size: 28px;color: midnightblue;padding-top:10px">订单类型：</span>
    <Select @on-change="choicetype" v-model="model1" size="large" style="width:120px;margin-right:10px;text-align: center;position: relative;top: -7px;" placeholder="请选择订单类型">
        <Option v-for="item in type" :value="item.label" :key="item.value">{{ item.label }}</Option>
    </Select> -->
   
    <!-- 非预约 -->
    <Table :columns="columns2" :data="data2" style="margin-top: 10px" ref="table"></Table>
    <div>
        <Button type="primary" @click="exportData" style="margin-right: 20px;margin-top: 15px;background-color:midnightblue;border:1px solid midnightblue;font-size: 15px;" size="large"><Icon type="ios-download-outline"></Icon> 
          <!-- <a @click="daochuc" :href="href" :download="download" style="color: #fff"> -->
          下载本月账单明细
          <!-- </a> -->
        </Button>
        <Button type="info" style="margin-right: 10px;margin-top: 15px;background-color:#76EE00;border:1px solid #76EE00;font-size: 15px;" size="large" @click="checkmounth">确认本月账单无误</Button>
        <div style="width:300px;position: relative;top: -35px;left: 360px;color: #FF0000;">
            <span>确认订单后将封存不容更改。如发现订单出现错误，</span><br>
            <span>请勿确认对账单并致电平台客服400-1234-1234查询。</span>
        </div>
        <div style="width:200px;position: relative;top: -66px;right: 150px;float:right;font-size: 18px;">
            <strong>本月总收费：</strong>
            <strong style="border-bottom:1px solid black">80,950</strong>
        </div>        
    </div>
    <!--//非预约分页-->
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
            href:'', 
            select_date:'',
            select_type:'',
            download:'',
            model1: '',
            cityList: [
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
                }
            ],
            type: [
                {
                    value: '预约',
                    label: '预约'
                },
                {
                    value: '非预约',
                    label: '非预约'
                }
            ],
            //    分页
            ajaxHistoryData: [],
            // 初始化信息总条数
            dataCount: 6,
            // 每页显示多少条
            pageSize: 8,
            page:1,
            columns2: [
                {
                title: '服务项目',
                key: 'user',
                // width: 100,
                },
                {
                title: '服务次数',
                key: 'booking_date'
                },{
                title: '服务收费（￥）',
                key: 'insurance_company'
                },
                {
                title: '总收费（￥）',
                key: 'service'
                }
            ],
            data2: [
                {
                    user:'洗车',
                    booking_date:'30',
                    insurance_company:'25',
                    service:'750'
                },
                {
                    user:'喷漆',
                    booking_date:'30',
                    insurance_company:'25',
                    service:'750'
                },
                {
                    user:'机场贵宾厅',
                    booking_date:'30',
                    insurance_company:'25',
                    service:'750'
                },
                {
                    user:'酒后代驾',
                    booking_date:'30',
                    insurance_company:'25',
                    service:'750'
                },
                {
                    user:'道路救援',
                    booking_date:'30',
                    insurance_company:'25',
                    service:'750'
                },
                {
                    user:'代办年检',
                    booking_date:'30',
                    insurance_company:'25',
                    service:'750'
                }
            ],
            start:0,
            end:8
        }
      },
      created() {
        // this.tableShow()
      },
      methods: {
        //选择月份
        choice(Option){
          this.select_date = Option
          console.log(Option,'13434')
          this.$axios({
            method: 'post',
            url: 'admin/show/invoices/zdyn',
            data: {
              select_date: this.select_date,
              ic_id:3,
              token:localStorage.getItem("jwt")
            }
          }).then(res => {
            // this.tableShow()
            console.log(res,'账单明细')
          }).catch(res => {
            this.$Message.error('请求超时,请稍后再试...');
          });
        },
        //选择订单类型
        choicetype(Option){
          this.select_type = Option
          console.log(Option,'13434')
          // this.$axios({
          //   method: 'post',
          //   url: 'admin/show/invoices/zdyn',
          //   data: {
          //     select_date: this.select_date,
          //     ic_id:3,
          //     // token:localStorage.getItem("jwt")
          //   }
          // }).then(res => {
          //   // this.tableShow()
          //   console.log(res,'账单明细')
          // }).catch(res => {
          //   this.$Message.error('请求超时,请稍后再试...');
          // });
        },
        //下载表格CSV格式
        // daochuc(){
        //   if(this.select_date != ''){
        //     this.download = this.select_date + '账单明细'
        //     this.$axios({
        //       method: 'post',
        //       url: 'admin/download/xls',
        //       data: this.$qs.stringify({
        //         select_date: this.select_date,
        //         token:localStorage.getItem("jwt")
        //       })
        //     }).then(res => {
        //       this.tableShow()
        //     }).catch(res => {
        //       this.$Message.error('请求超时,请稍后再试...');
        //     });
        //   }else{
        //     this.$Message.warning({
        //       top: 50,
        //       duration: 4,
        //       content:'请先选择对帐月份'
        //     });
        //   }
        // },
        //下载表格CSV格式
        exportData () {
          this.$refs.table.exportCsv({
            filename: '本月非预约账单明细'
          });
        },
        //确认账单
        checkmounth(){
          alert('123')
        },
        //用户信息展示
        tableShow(){
          this.$axios({
            method: 'post',
            url: 'admin/show/bookingservice/all',
            data: JSON.stringify({
              token:localStorage.getItem("jwt")
            })
          }).then(res => {
            // console.log(res,'用户信息')
            if (res.data.code == 420 || res.data.code != 200) {
              this.$Message.warning('登录信息已过期，请重新登录')
              return
            }
            if(res.data.code == 200){
              this.ajaxHistoryData = res.data.data;
              this.dataCount = res.data.data.length;
              for (var i = 0; i < res.data.data.length; i++) {
                var d = new Date(res.data.data[i].booking_date)
                d = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds(); 
                res.data.data[i].booking_date = d
              }
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
            this.$Message.error('登录信息已过期，请重新登录')
          });
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
