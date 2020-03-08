<template>
  <div> 
    <!-- <Button style="margin-left: 10px;margin-right: 5px" type="info">新增</Button> <br> -->
     <Table v-if="adm1" style="margin-top: 10px" :columns="columns1" :data="data1"></Table>
     <Table v-if="adm2" style="margin-top: 10px" :columns="columns2" :data="data1"></Table>

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
        adm1:false,
        adm2:false,
        //    分页
        ajaxHistoryData: [],
        // 初始化信息总条数
        dataCount: 0,
        // 每页显示多少条
        pageSize: 20,
        page:1,
        columns1: [
          {
            title: '订单编号',
            key: 'order_number',
            // width: 100
          },
          {
              title: '服务类型',
              key: 'booking_type',
              render: (h, params) => {
                return h('Tag', {
                  props: {
                    color: params.row.booking_type === 0 ? 'yellow' : params.row.booking_type === 1 ? 'green' :''
                  }
                }, params.row.booking_type === 0 ? '非预约' : params.row.booking_type === 1 ? '预约' :'');
              }
          },
          {
            title: '用户名',
            key: 'user',
            // width: 100
          },
          {
            title: '订单状态',
            key: 'status',
             render: (h, params) => {
                return h('Tag', {
                  props: {
                    color: params.row.status === 0 ? '' : params.row.status === 2 ? 'green' :''
                  }
                }, params.row.status === 0 ? '' : params.row.status === 2 ? '已完成' :'');
              }
            // width: 90
          },
          {
            title: '服务类型',
            key: 'service',
            // width: 150
          },
          // {
          //   title: '预定时间',
          //   key: 'UserTime',
          //   // render: (h, params) => {
          //   //   console.log('data1')
          //   //   return h('div', [
          //   //     h('Span', {
          //   //       props: {
          //   //         type: 'info',
          //   //         size: 'small'
          //   //       }
          //   //     }, params.row.order_detail.UserTime)
          //   //   ]);
          //   // }
          //   // width: 150
          // },
          // {
          //     title: '图片',
          //     key: 'img_url',
          //      render: (h, params) => {
          //       return h('img', {
          //         // style:{
          //         //   width:'100px'
          //         // },
          //         attrs:{
          //           src:params.row.img_url,
          //           style:" width:'80px';height:80px"
          //         }
          //       });
          //     }
          // },
          {
            title: '完成时间',
            key: 'completion_date',
          },
        ],
        columns2: [
         {
            title: '订单编号',
            key: 'order_number',
            // width: 100
          },
          {
              title: '服务类型',
              key: 'booking_type',
              render: (h, params) => {
                return h('Tag', {
                  props: {
                    color: params.row.booking_type === 0 ? 'yellow' : params.row.booking_type === 1 ? 'green' :''
                  }
                }, params.row.booking_type === 0 ? '非预约' : params.row.booking_type === 1 ? '预约' :'');
              }
          },
          {
            title: '用户名',
            key: 'user',
          },
          {
            title: '订单状态',
            key: 'status',
             render: (h, params) => {
                return h('Tag', {
                  props: {
                    color: params.row.status === 0 ? '' : params.row.status === 2 ? 'green' :''
                  }
                }, params.row.status === 0 ? '' : params.row.status === 2 ? '已完成' :'');
              }
          },
          {
            title: '服务类型',
            key: 'service',
          },
          {
            title: '完成时间',
            key: 'completion_date',
          },
        ],
        data1: [],
      }
    },
    created() {
      console.log('created')
      if(localStorage.getItem("role_id")==2){
        this.adm1 = false
        this.adm2 = true
        this.tableShow()
      }else{
        this.adm1 = true
        this.adm2 = false
        this.tableShow()
      }
      
    //   this.username()
      // console.log(localStorage.getItem('Id'),'a参数123132')
      // console.log(location.hash)
    },
    methods: {
       //用户信息展示
        tableShow(){
          console.log('methodstableShow')
          this.$axios({
            method: 'post',
            url: 'admin/show/invoices/all',
            data: {
              token:localStorage.getItem("jwt"),
              ic_id:localStorage.getItem("company_id"),
              page: this.page,
              offect: this.pageSize
            }
          }).then(res => {
            if (res.data.code == 420 || res.data.code != 200) {
              this.$Message.warning('登录信息已过期，请重新登录')
              return
            }
            console.log(res,'交易记录')
            this.ajaxHistoryData = res.data.data;
            this.dataCount = res.data.count;
            // var d = new Date()
            // d = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds(); 
            // console.log(d)
            // for (var i = 0; i < res.data.data.length; i++) {
            //   var d = new Date(res.data.data[i].completion_date)
            //   d = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds(); 
            //   res.data.data[i].completion_date = d
            // }
            // for(var i = 0; i < res.data.data.length; i++){
            //   var UserTime = res.data.data[i].order_detail.UserTime
            //   res.data.data[i]
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
      //删除
      delete(row){
        // console.log(row)
        this.$Modal.confirm({
          title: '删除',
          content: '确认删除该条信息吗？',
          onOk: () => {
            this.$axios({
              method: 'post',
              url: 'admin/order/delete',
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
        this.page = index
        // console.log(this.page,'123')
        this.tableShow()
        var _start = (index - 1) * this.pageSize;
        var _end = index * this.pageSize;
        this.data1 = this.ajaxHistoryData.slice(_start, _end);
        document.getElementsByClassName("content-wrapper")[0].scrollTop = 0
      }
    },
  }
</script>

<style scoped>
</style>
