<template>
  <div>
    <!-- <Button v-if="adm1" style="margin-right: 5px;margin-bottom: 10px" type="info">新增</Button> -->
    <Table v-if="adm1" :columns="columns1" :data="data1" style="margin-top: 10px"></Table>
    <Table v-if="adm2" :columns="columns2" :data="data1" style="margin-top: 10px"></Table>
  
    <!--//分页-->
    <div style="text-align: right">
      <Page :total="dataCount" :page-size="pageSize" show-total class="paging" @on-change="changepage"></Page>
    </div>
  </div>
</template>

<script>
    import tableDetail from './tableDetail.vue'
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
          adm1:false,
          adm2:false,
          //    分页
          ajaxHistoryData: [],
          // 初始化信息总条数
          dataCount: 5,
          // 每页显示多少条
          pageSize: 20,
          page:1,
          columns1: [
            // {
            //   title: '详情',
            //   type: 'expand',
            //   width: 70,
            //   render: (h, params) => {
            //     return h(tableDetail, {
            //       props: {
            //         row: params.row
            //       }
            //     })
            //   }
            // },
            {
              title: '服务用户',
              key: 'user',
              // width: 100,
        
            },
            {
              title: '服务日期',
              key: 'booking_date',
              width: 150
            },{
              title: '保险公司',
              key: 'insurance_company'
            },
            {
              title: '服务类型',
              key: 'service'
            },
            {
              title: '状态',
              key: 'status',
              render: (h, params) => {
                return h('Tag', {
                  props: {
                    color: params.row.status === 0 ? 'red' : params.row.status === 1 ? 'green' : params.row.status == 5 ? "green" : params.row.status === 2 ? 'orange': params.row.status === 3 ? 'blule':params.row.status === -1 ? 'yellow':params.row.status == 4 ? 'yellow' : ''
                  }
                // }, params.row.status === 0 ? '错误' : params.row.status === 1 ? '完成' : params.row.status == 5 ? '下单成功' : params.row.status === 2 ? '等待进行' : params.row.status === 3 ? '进行中' : params.row.status === -1 ? '异常' : params.row.status == 4? "待确认" : '');
                }, params.row.status === 1 ? '正在进行' : params.row.status === 2 ? '服务完成' : params.row.status == 5 ? '下单成功' : params.row.status === -1 ? '异常' : params.row.status == 4? "待商家确认" : '已取消');
              }
            },
            {
              title: '门店',
              key: 'store'
            },
            // {
            //   title: '操作',
            //   key: 'action',
            //   align: 'center',
            //   render: (h, params) => {
            //     return h('div', [
            //       h('Button', {
            //         props: {
            //           type: 'info',
            //           size: 'small'
            //         },
            //         style: {
            //           marginRight: '5px',
            //           marginBottom: '3px'
            //         },
            //         on: {
            //           click: () => {
            //             this.check(params.row);
            //           }
            //         }
            //       }, '订单完成'),
            //       // h('Button', {
            //       //   props: {
            //       //     type: 'info',
            //       //     size: 'small'
            //       //   },
            //       //   style: {
            //       //     marginRight: '5px',
            //       //     marginBottom: '3px'
            //       //   },
            //       //   // on: {
            //       //   //   click: () => {
            //       //   //     this.xiugai(params.row);
            //       //   //   }
            //       //   // }
            //       // }, '修改'),
            //       //  h('Button', {
            //       //   props: {
            //       //     type: 'info',
            //       //     size: 'small'
            //       //   },
            //       //   style: {
            //       //     marginRight: '5px',
            //       //     marginBottom: '3px'
            //       //   },
            //       //   // on: {
            //       //   //   click: () => {
            //       //   //     this.xiugai(params.row);
            //       //   //   }
            //       //   // }
            //       // }, '上传图片 '),
            //       // h('Button', {
            //       //   props: {
            //       //     type: 'info',
            //       //     size: 'small'
            //       //   },
            //       //   style: {
            //       //     marginRight: '5px',
            //       //     marginBottom: '3px'
            //       //   },
            //       //   attrs: {
            //       //     style: 'background-color:#d6514d;border:1px solid #d6514d'
            //       //   },
            //       //   // on: {
            //       //   //   click: () => {
            //       //   //     this.delete(params.row);
            //       //   //   }
            //       //   // }
            //       // }, '删除')
            //     ]);
            //   }
            // }
          ],
          columns2: [
            // {
            //   title: '详情',
            //   type: 'expand',
            //   width: 70,
            //   render: (h, params) => {
            //     return h(tableDetail, {
            //       props: {
            //         row: params.row
            //       }
            //     })
            //   }
            // },
            {
              title: '服务用户',
              key: 'user',
              // width: 100,
        
            },
            {
              title: '服务日期',
              key: 'booking_date',
              width: 150
            },{
              title: '保险公司',
              key: 'insurance_company'
            },
            {
              title: '服务类型',
              key: 'service'
            },
            {
              title: '状态',
              key: 'status',
              render: (h, params) => {
                return h('Tag', {
                  props: {
                    color: params.row.status === 0 ? 'red' : params.row.status === 1 ? 'green' : params.row.status === 2 ? 'orange': params.row.status === 3 ? 'blule':params.row.status === -1 ? 'yellow':''
                  }
                }, params.row.status === 1 ? '正在进行' : params.row.status === 2 ? '服务完成' : params.row.status == 5 ? '下单成功' : params.row.status === -1 ? '异常' : params.row.status == 4? "待商家确认" : '已取消');
              }
            },
            {
              title: '门店',
              key: 'store'
            },
          ],
          data1: [],
          start:0,
          end:20
        }
      },
      created() {
        this.tableShow()
        if(localStorage.getItem("role_id")==3){
          this.adm1 = false
          this.adm2 = true
        }else{
          this.adm1 = true
          this.adm2 = false
        }
      },
      methods: {
        //用户信息展示
        tableShow(){
          this.$axios({
            method: 'post',
            url: 'admin/show/nonebookingservice/all',
            data: {
              token:localStorage.getItem("jwt")
            }
            // data: {
            //   token:localStorage.getItem("jwt")
            // }
          }).then(res => {
            console.log(res,'非预订服务信息')
           this.ajaxHistoryData = res.data.data.data;
            this.dataCount = res.data.data.data.length;
            for (var i = 0; i < res.data.data.data.length; i++) {
              var d = new Date(res.data.data.data[i].booking_date)
              d = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds(); 
              res.data.data.data[i].booking_date = d
            }
            // // 初始化显示，小于每页显示条数，全显，大于每页显示条数，取前每页条数显示
            if (res.data.data.data.length < this.pageSize) {
              // this.historyData = this.ajaxHistoryData;
              this.data1 = res.data.data.data
            } else {
              this.data1 = this.ajaxHistoryData.slice(this.start, this.end);
              // console.log(this.data1)
            }
            if(res.data.code ==420){
              this.$Message.warning({
                top: 50,
                duration: 4,
                content:'您的用户信息已过期，请重新登录'
              });
            }
          }).catch(err => {
            console.log(err)
              this.$Message.warning({
                top: 50,
                duration: 4,
                content:'您的用户信息已过期，请重新登录'
              });
          });
        },
         //订单审核是否完成
        check(row){
          // console.log(row)
          this.$axios({
            method: 'post',
            url: 'admin/finish/order',
            data: {
              order_id:row.id,
              order_type:0,
              token:localStorage.getItem("jwt")
            }
          }).then(res => {
            // console.log(res,'用户修改')
            this.tableShow()
            if(res.data.code ==420){
              this.$Message.warning({
                top: 50,
                duration: 4,
                content:'您的用户信息已过期，请重新登录'
              });
            }
          }).catch(res => {
            this.$Message.warning({
                top: 50,
                duration: 4,
                content:'您的用户信息已过期，请重新登录'
            });
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
          
          // this.formItem.car_logo.type = file.type
          // this.imgChange = file.name 
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
