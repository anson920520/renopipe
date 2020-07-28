<template>
  <div>
    <div class="adress">
      <div class="adress_bum">
        <div v-for="(item,index) in mapOrder" :key="index">
          <hr class="hrHide" v-if="index!=0">
          <div class="indent" @click="mapLook(index)" @mouseover="mouseOver($event)" @mouseleave="mouseLeave($event)">
            <p class="name" style="display: inline">{{item.name}} {{item.cname}}</p>
            <img v-if="item.store_provider==2" src="../../assets/images/cxj.png" alt="" style="width:50px;float:right">
            <p class="dizhi">項目編號：{{item.project}}</p>
            <p class="phone">地盤編號：{{item.siteCode1}} {{item.siteCode3}}</p>
            <p class="phone">DMA : {{item.dma}}</p>
            <p class="phone">EMFM Ref.: {{item.emfm}}</p>
            <!-- <p class="grade">
              评分：
              <img src="../../assets/images/grade.png" alt="" style="position: relative;top: 3px;">
              <img src="../../assets/images/grade.png" alt="" style="position: relative;top: 3px;">
              <img src="../../assets/images/grade.png" alt="" style="position: relative;top: 3px;">
              <img src="../../assets/images/grade.png" alt="" style="position: relative;top: 3px;">
              <img src="../../assets/images/grade.png" alt="" style="position: relative;top: 3px;">
            </p> -->
            <!-- <p class="grade">评分：{{item.grade}}</p> -->
          </div> 
        </div>
      </div>
        
    </div>
    <div id="container">
      <el-amap vid="amapDemo" class="amap" :center='center' :zoom="zoom">
        <el-amap-marker 
          v-for="(item,i) in markerList" :key="i"
          vid="marker" :events='event'
          :position="item.position" >
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
        center: [114.14, 22.29],
        position:[114.14, 22.29],
        // position:[114.14, 22.29],
        mapArry:[],
        Wposition:[114.14, 22.29],
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
          retainWhenClose: true,
        },
        lng: 0,
        lat: 0,
        plugin: [
          {
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
          }
        ],
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
          click: (e,i) => {
            console.log(this.visible,e,i)

            this.visible = false
            setTimeout(() => {this.visible = true},300)
            
          }
        },
        markerList:[]
      }
    },
    created() {
      // this.tableShow()
      // this.mounted()
      // this.province()
      this.getData()
      
      // console.log(this.center)
      
    },
    methods: {
      getData () {
        this.$axios({
          url:"site",
          method:"GET",
          header:{
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            'Access-Control-Allow-Methods' : "*"
          },
        }).then(res => {
          console.log(res)
          if (res.data) {
            this.mapOrder = res.data
            this.markerList = []
            this.mapOrder.forEach(item => {
              this.markerList.push({
                position: [item.longitude, item.latitude]
              })
            })
            this.mapLook(0)
          }
          
        }).catch(err => {
          console.log(err)
        })
      },
      mouseOver($event){ 
        // console.log($event)
        $event.currentTarget.className = "indent active";
      },
      mouseLeave($event) {
        $event.currentTarget.className = "indent";
      },
      mapLook(index){
        //console.log(123123123,index)
        this.visible = false
        this.index = index
        // console.log(this.mapOrder[index])
        this.currentWindow.position = [this.mapOrder[index].longitude,this.mapOrder[index].latitude]
        console.log(this.currentWindow.position);

        this.center = [this.mapOrder[index].longitude,this.mapOrder[index].latitude]
        console.log(this.center)

        if(this.center[0] !== 0 && this.center[1] !== 0){
            // this.center = [this.mapOrder[index].longitude,this.mapOrder[index].latitude]
            // this.position = [this.mapOrder[index].longitude+1,this.mapOrder[index].latitude+1]
            this.currentWindow.content = '<strong>地址：</strong>' + this.mapOrder[index].name + '<br>' 
                                           +
                                          '<strong>中文地址：</strong>' + this.mapOrder[index].cname + '<br>'
                                          +
                                          '<strong>項目編號：</strong>' + this.mapOrder[index].project + '<br>'; 
                                          // +
                                          // '<a href="http://www.maintance.pro/admin/#/o_management?Id='+
                                          // this.currentWindows[i].Id+
                                          // '">查看详情</a>' ;
            // console.log(this.currentWindow.position)
            // console.log(this.currentWindow.content)
            setTimeout(() => {
              this.visible = true
            }, 300)
          }else{
            //this.center = [114.14, 22.29];
            alert("沒有經緯度資料");
          }
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
    // height: 120px;
    /* max-height: 180px; */
    margin: 10px auto;
    padding: 10px 20px;
    border-radius: 10px;
    /* background-color: aquamarine; */
    /* border-bottom: 2px solid gray; */
  }
   .active{
    width: 90%;
    // height: 120px;
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
