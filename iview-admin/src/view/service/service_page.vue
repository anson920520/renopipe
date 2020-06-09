<template>
  <div>
    <!-- <div class="top">
      <Select @on-change="choiceProvince" v-model="modelProvince" size="large" style="width:120px;margin-right:10px;text-align: center;" placeholder="上海">
        <Option v-for="(item,index) in province_list" :value="item.id" :key="index">{{ item.name }}</Option>
      </Select>
      <Select @on-change="choiceCity" v-model="modelCity" size="large" style="width:120px;margin-right:10px;text-align: center;" placeholder="上海">
        <Option v-for="(item,index) in city_list" :value="item.id" :key="index">{{ item.name }}</Option>
      </Select>
      <Select @on-change="choiceArea" v-model="modelArea" size="large" style="width:120px;margin-right:10px;text-align: center;" placeholder="区">
        <Option v-for="(item,index) in area_list" :value="item.id" :key="index">{{ item.name }}</Option>
      </Select>
      <Select v-model="model1" size="large" style="width:120px;text-align: center;" placeholder="街道">
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
    </div> -->
    <div class="adress">
      <div class="adress_bum">
        <div v-for="(item,index) in mapOrder" :key="index">
          <hr class="hrHide" v-if="index!=0">
          <div class="indent" @click="mapLook(index)" @mouseover="mouseOver($event)" @mouseleave="mouseLeave($event)">
            <p class="name" style="display: inline">{{item.name}}</p>
            <img v-if="item.store_provider==2" src="../../assets/images/cxj.png" alt="" style="width:50px;float:right">
            <p class="phone">门店电话：{{item.store_phone}}</p>
            <p class="dizhi">门店地址：{{item.store_address}}</p>
            <p class="grade">
              评分：
              <img src="../../assets/images/grade.png" alt="" style="position: relative;top: 3px;">
              <img src="../../assets/images/grade.png" alt="" style="position: relative;top: 3px;">
              <img src="../../assets/images/grade.png" alt="" style="position: relative;top: 3px;">
              <img src="../../assets/images/grade.png" alt="" style="position: relative;top: 3px;">
              <img src="../../assets/images/grade.png" alt="" style="position: relative;top: 3px;">
            </p>
            <!-- <p class="grade">评分：{{item.grade}}</p> -->
          </div> 
        </div>
      </div>
        
    </div>
    <div id="container">
      <el-amap vid="amapDemo" class="amap" :center='center' :zoom="zoom">
        <el-amap-marker 
          vid="marker" :events='event'
          :position="position" >
        </el-amap-marker>
        <el-amap-info-window
          :position="currentWindow.position"
          :content="currentWindow.content"
          :visible="visible"
          :events="currentWindow.events">
        </el-amap-info-window>
      </el-amap>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      let self = this;
      return {
        index:'',
        lookMap:'',
        zoom:10,
        // center:[114.0806579590,22.5468059955],
        center: [121.4123888, 31.4530589],
        position:[121.4123888, 31.4530589],
        mapArry:[],
        Wposition:[114.0806579590,22.5468059955],
        mapArrylength:'',
        a:'',
        Wcontent:'123',
        modal4:[],
        mapindex:0,
        currentWindow: {
          position: [0, 0],
          content: '',
          events: {
            close() {}
          },
          visible: true,
          retainWhenClose: true
        },
        lng: 0,
        lat: 0,
        plugin: [{
            pName: 'Geolocation',
            events: {
              init(o) {
                // o 是高德地图定位插件实例
                console.log('result')
                o.getCurrentPosition((status, result) => {
                  console.log(result)
                  if (result && result.position) {
                    self.lng = result.position.lng;
                    self.lat = result.position.lat;
                    self.center = [self.lng, self.lat];
                    self.loaded = true;
                    self.$nextTick();
                  }
                });
              }
            }
          }],
        province_list: [],      
        city_list: [],
        area_list:[],
        modelProvince: '',
        modelCity: '',
        modelArea: '',
        mapOrder:[],
        active:'',
        index:'',
        srcimg:'../../assets/images/grade.png',
        visible: true,
        event: {
          click: () => {
            // console.log(this.visible)
            this.visible = false
            setTimeout(() => {this.visible = true},300)
            
          }
        }
      }
    },
    created() {
      // this.tableShow()
      // this.mounted()
      this.province()
      // console.log(this.center)
      
    },
    methods: {
      mouseOver($event){ 
        // console.log($event)
        $event.currentTarget.className = "indent active";
      },
      mouseLeave($event) {
        $event.currentTarget.className = "indent";
      },
      mapLook(index){
        this.visible = false

        console.log(index,'地图')
        this.index = index

        this.currentWindow.position = [this.mapOrder[index].longitude,this.mapOrder[index].latitude]
        this.center = [this.mapOrder[index].longitude,this.mapOrder[index].latitude]
        this.position = [this.mapOrder[index].longitude,this.mapOrder[index].latitude]
        this.currentWindow.content =  '<strong>门店名称:</strong>' + this.mapOrder[index].name + '<br>' +
                                      '<strong>联系方式：</strong>' + this.mapOrder[index].store_phone + '<br>' +
                                      '<strong>门店地址：</strong>' + this.mapOrder[index].store_address + '<br>' ;
                                      // +
                                      // '<strong>服务类型：</strong>' + this.currentWindows[i].content + '<br>'; 
                                      // +
                                      // '<a href="http://www.maintance.pro/admin/#/o_management?Id='+
                                      // this.currentWindows[i].Id+
                                      // '">查看详情</a>' ;
        // console.log(this.currentWindow.position)
        // console.log(this.currentWindow.content)
        setTimeout(() => {
          this.visible = true
        }, 300)
      },
      
      //联动省份
      province(){
        this.$axios({
          method: 'post',
          url: 'admin/province/all',
          data: {
            token: localStorage.getItem('jwt')
          }
        }).then(res => {
          if (res.data.code == 420 || res.data.code != 200) {
            this.$Message.warning('登录信息已过期，请重新登录')
            return
          }
          this.province_list = res.data.province_list
          this.mapOrder = res.data.stores_list
          this.mapLook(0)
          // console.log(res)
        }).catch(res => {
          // this.$Message.error('请求超时,请稍后再试...');
        });
      },
      choiceProvince(option){
        // console.log(option)
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
          this.mapOrder = res.data.stores_list
        }).catch(res => {
          // this.$Message.error('请求超时,请稍后再试...');
        });
      },
      choiceCity(option){
        console.log(option)
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
          this.mapOrder = res.data.stores_list
        }).catch(res => {
          // this.$Message.error('请求超时,请稍后再试...');
        });
      },
      choiceArea(option){
        this.$axios({
          method: 'post',
          url: 'admin/area/store',
          data: {
            area_id:option,
            token: localStorage.getItem('jwt')
          }
        }).then(res => {
          console.log(res)
          // this.area_list = res.data.district_list
          this.mapOrder = res.data.stores_list
        }).catch(res => {
          // this.$Message.error('请求超时,请稍后再试...');
        });
      },
    },
  }
</script>

<style lang="less" scoped>
  .top{
    margin-left: 30px;
    margin-top: 25px;
    height: 100px;
  }
  .top p{
    margin-bottom: 25px;
    font-size: 30px;
    color: midnightblue; 
  }
  .adress{
    width: 36%;
    height: 630px;
    margin-top: 30px;
    margin-left: 30px;
    margin-right: 10px;
    float: left;
    border-radius: 2%;
    /* overflow: scroll; */
   
    border: 1px solid gray;
  }
  .adress_bum{
    width: 98%;
    height: 96%;
    margin-top: 2%;
    overflow-y: auto;
  }
  /*滚动条样式*/
  .adress_bum::-webkit-scrollbar {/*滚动条整体样式*/
    width: 8px;     /*高宽分别对应横竖滚动条的尺寸*/
    height: 4px;
    /* scrollbar-arrow-color:red; */
  }
  .adress_bum::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
    border-radius: 60px;
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    background: rgba(0,0,0,0.2);
  }
  .adress_bum::-webkit-scrollbar-track {/*滚动条里面轨道*/
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    border-radius: 60px;
    background: rgba(0,0,0,0.1);
  }
  .hrHide{
    width:90%;
    margin:0 auto;
    border:0;
    border-bottom:2px solid gray;
  }
  .indent{
    width: 90%;
    height: 120px;
    /* max-height: 180px; */
    margin: 10px auto;
    padding: 10px 20px;
    border-radius: 10px;
    /* background-color: aquamarine; */
    /* border-bottom: 2px solid gray; */
  }
   .active{
    width: 90%;
    height: 120px;
    margin: 10px auto;
    padding: 10px 20px;
    border-radius: 10px;
    background-color: #B7B7B7;
    /* border-bottom: 2px solid gray; */
  }
  .name{
    font-size: 18px;
    color: midnightblue;
  }
  .phone{
    font-size: 14px;
  }
  .dizhi{
    font-size: 14px;
  }
  .grade{
    font-size: 14px;
  }
  #container {
    width: 60%;
    height: 630px;
    float: left;
    margin-top: 30px;
  }

</style>
