<style lang="less" scoped>
.loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 999;
}
.loading .img {
  display: block;
  width: 200px;
  height: 100px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  font-size: 18px;
  color: #fff;
}
/*加载中icon样式*/
.demo-spin-icon-load {
  animation: ani-demo-spin 1s linear infinite;
}
@keyframes ani-demo-spin {
  from {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.previewWrap {
  width: 100px;
  height: 100px;
  /* border: solid red 1px; */
  overflow: hidden;
}
.previewImg {
  width: auto;
  height: 100px;
}
.recordBox {
  >div {
    flex:3.33;
    // border: solid black 1px;
    padding: 10px;
    font-size: 17px;
  }
}
.bigImgWrap {
  width: 400px;
  height: 330px;
  border: solid #CCC 1px;
  overflow:hidden;
  transition: 0.3s;
  >img {
    width:auto;
    height: 100%;
  }
}
.recordSmallImgWrap {
  margin: 10px 0;
}
.imgRela {
  position: relative;
  width: 320px;
  height: 130px;
  overflow: hidden;
  display: flex;
  // border: solid green 1px;
}
// .fcolumn {
//   display: flex;
//   flex-direction: column;
//   flex-wrap: wrap;
// }
.showBig {
  position: fixed !important;
  width: 70% !important;
  height: auto !important;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  border: solid #CCC 1px;
  z-index:10;
}
.imgAbso {
  transition:0.3s;
  position: absolute;
  width: 400px;
  height: 130px;
  left: 0;
  top: 0;
  
  // border: solid blue 1px;
  >.smallImgWrap {
    float:left;
    width:64px;
    height: 64px;
    overflow: hidden;
    border: solid #CCC 1px;
    display: block;
    box-sizing: border-box;
    >img {
      width:auto;
      height: 100%;
      display: block
    }
  }
}
.imgAct {
  border: solid red 1px !important;
}
.lefttopIcon {
  cursor: pointer;
  position: relative;
  z-index: 10;
}
.recordDetailUl>li {
  margin: 20px 0;
}
.centerItem {
  flex-direction: column;
}

.allWorker {
  height: 380px;
  border: solid #CCC 1px;
  width: 80%;
  margin: auto;
  padding: 5px;
  overflow: auto;
  >li {
    padding: 20px 0;
    border-bottom: solid #CCC 1px;
  }
  >li:last-child{
    border: none !important;
  }
}
::-webkit-scrollbar {
  width: 10px;
  background: #F0F0F0;
}
::-webkit-scrollbar-track {
  width: 10px;
}
::-webkit-scrollbar-thumb {
  width: 10px;
  border-radius:6px;
  background: #CCC;
}

.section{
  width:100%;
  display:flex;
}

.selectBox{
  padding:20px;
}



</style>

<template>
  <div><!--關鍵字搜索!-->
    <div class="sb al">
      

      <div class="ju al">
        <div style="padding-right: 10px;">
          <DatePicker type="date" @on-change="changeDate" placeholder="搜索日期" style="width: 200px"></DatePicker>
        </div>

        <Input type="text" @on-enter="search" v-model="searchVal"  placeholder="輸入關鍵字搜索"/>
        <Button @click="search"  type="info">搜索</Button>
      </div>

      <Button type="info" class="editBtn" @click="exportData2">導出CSV</Button>


    </div>
    <hr/>
    <!--過濾器!-->
    <div class="">
      <div class="section ">
          <div class="selectBox">
            <label>項目編號</label>
            <select @change="search" v-model="pro">
              <option value="">全部</option>
              <option v-for="(item,i) in proList" :key="i" :value="item">{{item}}</option>
            </select>
          </div>
          <div class="selectBox">
            <label>DIS(1)</label>
            <select @change="search" v-model="dis1">
              <option value="">全部</option>
              <option v-for="(item,i) in disList3" :key="i" :value="item">{{item}}</option>
            </select>
          </div>
          <div class="selectBox">
              <label>DIS(2)</label>
              <select @change="search" v-model="dis2">
                <option value="">全部</option>
                <option v-for="(item,i) in disList1" :key="i" :value="item">{{item}}</option>
              </select>
         </div>
          <div class="selectBox">
            <label> 地盤</label>
            <select @change="search" v-model="site">
              <option value="">全部</option>
              <option v-for="(item,i) in SiteList" :key="i" :value="item">{{item}}</option>
            </select>
          </div>
           <div class="selectBox">
            <label>Imple TO.</label>
            <select @change="search" v-model="impleVal">
              <option value="">全部</option>
              <option v-for="(item,i) in imple" :key="i" :value="item">{{item}}</option>
            </select>
          </div>
            <div class="selectBox">
            <label>Site C To.</label>
            <select @change="search" v-model="sitetocVal">
              <option value="">全部</option>
              <option v-for="(item,i) in sitetoc" :key="i" :value="item">{{item}}</option>
            </select>
          </div>
            <div class="selectBox">
            <label>DMA</label>
            <select @change="search" v-model="dmaVal">
              <option value="">全部</option>
              <option v-for="(item,i) in dma" :key="i" :value="item">{{item}}</option>
            </select>
          </div>
             <div class="selectBox">
            <label>EMFM</label>
            <select @change="search" v-model="emfmVal">
              <option value="">全部</option>
              <option v-for="(item,i) in emfm" :key="i" :value="item">{{item}}</option>
            </select>
          </div>
          <div class="selectBox">
            <label>Nature</label>
            <select @change="search" v-model="natureVal">
              <option value="">全部</option>
              <option v-for="(item,i) in nature" :key="i" :value="item">{{item}}</option>
            </select>
          </div>
            <div class="selectBox">
            <label>工頭</label>
              <select @change="search"  v-model="cName">
                <option  value="">全部</option>
              <option v-for="(item,i) in superList" :key="i" :value="item.cName">{{item.cName}}</option>
            </select>
          </div>
      </div>
        <!--<Button @change="search"  type="info">搜索</Button>!-->
    </div>
     <br/>
      <br/>
    <!-- 表格展示 -->
    <Table :columns="columns" ref="recordTable" :data="dataList" @on-row-click="showDetail" :loading="tableLoad">
      <template slot-scope="{row}" slot="operation">
        <div>
          <!-- <Button size="small" class="editBtn" @click.stop.prevent="edit(row)">編輯</Button> -->
          <Button size="small" class="noBorder" type="error" @click.stop.prevent="Delete(row)">刪除</Button>
        </div>
      </template>

      <template slot="preview" slot-scope="{row}">
        <div class="previewWrap ju al">
          <img :src="row.preview" class="previewImg">
        </div>
      </template>

    </Table>

    <!-- 顯示詳細 -->
    <Modal v-model="showBox" :width="1300">
      <div style="border-top:solid 5px #5F98EC" class="recordBox ju">
        <!-- 左邊圖片 -->
        <div v-if="current.images">
          <div class="bigImgWrap  ju al">
            <img @click="showBig=!showBig" :class="['bigImg',{ showBig: showBig }]" :src="url + current.images[currentImg].filePath" >
          </div>
          <div class="recordSmallImgWrap al ju">
            <Icon @click="preNext(true)" v-show="current.images.length>10" class="lefttopIcon" type="ios-arrow-back" size="30" />
            <div :class="['imgRela']">
              <div :class="['imgAbso']" :style="{width:absWidth+'px',left:left+'px'}">
                <div @mouseover="currentImg=i" :class="['smallImgWrap', 'ju', 'al',{imgAct:currentImg==i}]" v-for="(item,i) in current.images" :key="i">
                  <img :src="url + item.filePath" >
                </div>

              </div>
            </div>
            <Icon @click="preNext(false)" v-show="current.images.length>4" class="lefttopIcon" size="30" type="ios-arrow-forward" />
          </div>
<!-- 
          <div class="recordSmallImgWrap al ju">
            <Icon @click="preNext(true)" v-show="current.images.length>4" class="lefttopIcon" type="ios-arrow-back" size="30" />
            <div class="imgRela">
              <div class="imgAbso al" :style="{width:absWidth+'px',left:left+'px'}">
                <div @mouseover="currentImg=i" :class="['smallImgWrap', 'ju', 'al',{imgAct:currentImg==i}]" v-for="(item,i) in current.images" :key="i">
                  <img :src="url + item.filePath" >
                </div>
              </div>
            </div>
            <Icon @click="preNext(false)" v-show="current.images.length>4" class="lefttopIcon" size="30" type="ios-arrow-forward" />
          </div> -->


        </div>
        <div v-else>暫無圖片</div>

        <!-- 中間詳細信息 -->
        <div class="centerItem sb">
          <ul class="recordDetailUl">
            <li><span><b>地盤名稱:</b> </span><span>{{thisSite.cname}}{{thisSite.name}}</span></li>
            <li><span><b>地盤項目編號:</b> </span><span>{{thisSite.project}}</span></li>
            <li><span><b>地盤編號:</b> </span><span>{{thisSite.siteCode1}}({{thisSite.siteCode2}}) , {{thisSite.siteCode3}}</span></li>
            <li><span><b>EMFM:</b> </span><span>{{thisSite.emfm}}</span></li>
            <li><span><b>DMA:</b> </span><span>{{thisSite.dma}}</span></li>
            <li><span><b>Imple To.:</b> </span><span>{{thisSite.imple}}</span></li>
            <li><span><b>Site C To:</b> </span><span>{{thisSite.sitetoc}}</span></li>
            <li><span><b>Nature(MM/ EC/ NC/MC):</b> </span><span>{{thisSite.region}}</span></li>
            <li><span><b>創建者:</b> </span><span>{{current.supervisors[0].cName}} {{current.supervisors[0].fullname}} </span></li>
            <li><span><b>創建日期:</b> </span><span>{{current.createdAt}}</span></li>
            <li><span><b>使用機械:</b> </span><span>{{current.machine}}</span></li>
            <li><span><b>判頭:</b> <span>{{current.rporsubCRP}}</span></span></li>
            <li><span><b>時段:</b> <span>{{current.time}}</span></span></li>
            <li><span><b>工作種類:</b> <span>{{current.worktype}}</span></span></li>
            <li><span><b>副項目編號:</b> <span>{{current.subcontract}}</span></span></li>

            <li style="border:solid 1px lightgray;padding:10px;"><span>{{current.description}}</span></li>
          </ul>
          <Button class="addBtn" :v-id="current.ID" type="info" @click="downloadIMG(current.ID)">{{this.msg}}</Button>
        </div>

        <!-- 右邊工人列表 -->
        <div class="recordRight">
          <div>
              <div class="ju al">
                <span>當日上班工人列表 </span>
                <span style="color: red;font-size:18px;"> </span>
              </div>
              <ul class="allWorker">
                <li class="sb" v-for="(item,i) in current.workers" :key="i">
                  <span>{{item.cName}} {{item.fullname}} </span>
                  <span style="color:#5F98EC"><b>{{item.position}}</b></span>
                </li>
              </ul>
            </div>
            <!--判頭不是renopiipe!-->
            <div v-if="current.remark" >
              <div class="ju al">
                <span></span>
                <b style="font-size:18px;">{{current.remark}} </b>
              </div>
            </div>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
import JsonExcel from "vue-json-excel";

export default {
  data () {
    let that = this
    return {
        json_fields: {
          "Complete name": "name",
          City: "city",
          Telephone: "phone.mobile",
          "Telephone 2": {
            field: "phone.landline",
            callback: (value) => {
              return `Landline Phone - ${value}`;
            },
          },
        json_data: [
          {
            name: "Tony Peña",
            city: "New York",
            country: "United States",
            birthdate: "1978-03-15",
            phone: {
              mobile: "1-541-754-3010",
              landline: "(541) 754-3010",
            },
          },
          {
            name: "Thessaloniki",
            city: "Athens",
            country: "Greece",
            birthdate: "1987-11-23",
            phone: {
              mobile: "+1 855 275 5071",
              landline: "(2741) 2621-244",
            },
          },
        ],
        json_meta: [
          [
            {
              key: "charset",
              value: "utf-8",
            },
          ],
        ],
      },
      //the above is for export
      showBox: false,
      showBig: false,
      url:"",
      thisSite:"",
      msg:"下載圖片",
      columns: [
        { title: "創建日期", key:"createdAt" ,sortable: true},
        { title: "工作日期", key:"startTimestamp" ,sortable: true},
        { title: "報工記錄編號", key:"ID" ,sortable: true},
        // { title: "圖片預覽", slot:"preview" },
        { title: "地盤項目編號", key:"siteId",sortable: true,
              render:(h,p) => {
              let str = "讀取中..."
              that.siteList.forEach(item => {
                  if (item.ID==p.row.siteId) {
                    str = item.project
                  }
              })
              return h('div',str)
          }
        },
        { title: "DIS(1)", key:"siteId" ,sortable: true,
              render:(h,p) => {
              let str = "讀取中..."
              that.siteList.forEach(item => {
                  if (item.ID==p.row.siteId) {
                    str = item.siteCode3
                  }
              })
              return h('div',str)
          }
        },
        { title: "DIS(2)地盤地區", key:"siteId",sortable: true,
              render:(h,p) => {
              let str = "讀取中..."
              that.siteList.forEach(item => {
                  if (item.ID==p.row.siteId) {
                    str = item.siteCode1
                  }
              })
              return h('div',str)
          }
        },
         { title: "地盤地址", key:"siteId",sortable: true,
              render:(h,p) => {
              let str = "讀取中..."
              that.siteList.forEach(item => {
                  if (item.ID==p.row.siteId) {
                    str = item.cname
                  }
              })
              return h('div',str)
          }
        },
        { title: "Imple.", key:"siteId" ,sortable: true,
              render:(h,p) => {
              let str = "讀取中..."
              that.siteList.forEach(item => {
                  if (item.ID==p.row.siteId) {
                    str = item.imple
                  }
              })
              return h('div',str)
          }
        },
        { title: "Site C.", key:"siteId",sortable: true,
              render:(h,p) => {
              let str = "讀取中..."
              that.siteList.forEach(item => {
                  if (item.ID==p.row.siteId) {
                    str = item.sitetoc
                  }
              })
              return h('div',str)
          }
        },
          { title: "DMA", key:"siteId",sortable: true,
              render:(h,p) => {
              let str = "讀取中..."
              that.siteList.forEach(item => {
                  if (item.ID==p.row.siteId) {
                    str = item.dma
                  }
              })
              return h('div',str)
          }
        },
        { title: "EMFM", key:"siteId",sortable: true,
              render:(h,p) => {
              let str = "讀取中..."
              that.siteList.forEach(item => {
                  if (item.ID==p.row.siteId) {
                    str = item.emfm
                  }
              })
              return h('div',str)
          }
        },
        { title: "Nature", key:"region",sortable: true,
              render:(h,p) => {
              let str = "讀取中..."
              that.siteList.forEach(item => {
                  if (item.ID==p.row.siteId) {
                    str = item.region
                  }
              })
              return h('div',str)
          }
        },
        { title: "詳請", key:"description",sortable: true, },
        { title: "工頭", key:"supervisor",sortable: true,
          render:(h,p) => {
            let str = "暫無"
            that.superList.forEach(item => {
              if (item.ID==p.row.supervisorId) {
                str = item.cName
                //console.log(str)
              }
            })
            return h('div',str)
          }
        },
        { title: "操作", slot:"operation" },
        // "data:image/jpeg;base64,
      ],
      dataList: [],
      current:{
        images:[""
          // "https://dss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/1d0c56603d49db876f4d03741aa3fe61_259_194.jpg",
          // "https://img11.360buyimg.com/mobilecms/s140x140_jfs/t1/128591/36/5097/194298/5eeadc25E00feebca/92f40ac8b69a4a84.jpg.webp",
          // "https://img11.360buyimg.com/mobilecms/s140x140_jfs/t1/139702/40/1124/114877/5eec6051Ee8dc932e/0f1d11fc63bd90a8.jpg.webp",
          // "https://img12.360buyimg.com/mobilecms/s140x140_jfs/t1/116210/16/10224/98176/5ee88917E2f42fa34/62566dccc33876a6.jpg.webp",
          // "https://img12.360buyimg.com/mobilecms/s150x150_jfs/t1/79366/36/1115/93724/5cf5c8ffE1fd3c6c0/2358374b90d8fe87.jpg!q70.jpg.webp",
          // "https://img12.360buyimg.com/mobilecms/s140x140_jfs/t1/116210/16/10224/98176/5ee88917E2f42fa34/62566dccc33876a6.jpg.webp",
        ],
        supervisors:[""]
      },
      absWidth:1000,
      left:0,
      currentImg:0,
      superList:[],
      siteList:[],
      load:function(){},
      allData:[],
      searchVal:"",

      // 五个搜索框
      proList:[],
      disList1:[],
      disList2:[],
      disList3:[],
      dma:[],
      emfm:[],
      SiteList:[],
      imple:[],
      nature:[],
      sitetoc:[],
      pro:"",
      dis1:"",
      dis2:"",
      site:'',
      cName:"",
      impleVal: "",
      dmaVal:"",
      emfmVal:"",
      natureVal:"",
      sitetocVal:"",
      filterTime:"",
      tableLoad: false
    }
  },
  created () {
    this.url = window.baseURL
    this.getSuper()
    this.getSite()
  },
  mounted () {
    // this.load = this.$Message.loading({
    //   content:"獲取記錄中...",
    //   duration:10
    // })
    
    
  },
  
  methods:{
    changeDate (e) {
      // console.log(e)
      let start = e.replace("-","/").replace("-","/")
      // this.dataList = this.allData.filter(item => {
      //   // console.log(item.createdAt, start)
      //   if (item.createdAt.indexOf(start) != -1) {
      //     return true
      //   }
      // })
      this.filterTime = start
      this.search()
      // let D = new Date(new Date(e).getTime() + 86400000)
      // let y = D.getFullYear()
      // let M = D.getMonth() < 9 ? "0" + (D.getMonth()+1) : (D.getMonth()+1)
      // let d = D.getDate() < 10 ? "0" + D.getDate() : D.getDate()
      // let end = y + M + d
      // // console.log(end)
      // let params = "?start=" + start + "&end=" + end
      // this.showTable(params)
    },
    createSearchData () {
      this.proList = []
      this.disList1 = []

      this.allData.forEach(item => {
        // console.log(item,item.sitecode1)
        this.proList.push(item.project)
        this.disList1.push(item.sitecode1)
        this.disList2.push(item.sitecode2)
        this.disList3.push(item.sitecode3)
        this.imple.push(item.imple)
        this.nature.push(item.region)
        this.sitetoc.push(item.sitetoc)
        this.dma.push(item.dma)
        this.emfm.push(item.emfm)
        this.SiteList.push(item.siteName)
      })
      // console.log(123,this.proList)
      this.proList = [...new Set(this.proList)].filter(item => item)
      this.disList1 = [...new Set(this.disList1)].filter(item => item)
      this.disList2 = [...new Set(this.disList2)].filter(item => item)
      this.disList3 = [...new Set(this.disList3)].filter(item => item)
      this.imple = [...new Set(this.imple)].filter(item => item)
      this.nature = [...new Set(this.nature)].filter(item => item)
      this.sitetoc = [...new Set(this.sitetoc)].filter(item => item)
      this.dma = [...new Set(this.dma)].filter(item => item)
      this.emfm = [...new Set(this.emfm)].filter(item => item)
      this.SiteList = [...new Set(this.SiteList)].filter(item => item)


    },
    showTable (params="") {
      this.$axios({
        url:"attendence" + params,
        method:"GET"
      }).then(res => {
        console.log(res)
        this.tableLoad = false
        if (res.data) {
          res.data.forEach(item => {

              item.createdAt = item.createdAt.slice(0,16).replace("T"," ").split("-").join("/")
              item.startedAt = item.startedAt.slice(0,16).replace("T"," ").split("-").join("/")
              item.endedAt = item.endedAt.slice(0,16).replace("T"," ").split("-").join("/")

              // console.log(new Date())
              this.loopData(item)
          })
          this.allData = res.data
          this.dataList = this.allData.slice(0)
          
          // this.load()
        }
      }).catch(() => {
          this.tableLoad = false
        // this.load()
      })
    },
    loopData (item) {
      setTimeout(() => {
        this.siteList.forEach(site => {
          if (site.ID == item.siteId) {
            item.sitecode1 = site.siteCode1
            item.sitecode2 = site.siteCode2
            item.sitecode3 = site.siteCode3
            item.imple = site.imple
            item.region = site.region
            item.sitetoc = site.sitetoc
            item.dma = site.dma
            item.emfm = site.emfm
            item.siteName = site.cname
            item.project = site.project
          }
        })
        this.superList.forEach(supervisor => {
          if (supervisor.ID == item.supervisorId) {
            item.cName = supervisor.cName
          }
        })

        this.createSearchData()

      },200)
    },
    search () {
      this.dataList = this.allData.filter((item,i) => {
        for(let key in item) {
          if ( typeof item[key] == "string") {
            if ( item[key].indexOf(this.cName) != -1 ) {
              return true
            }
          }
        }
      })


      this.dataList = this.dataList.filter((item,i) => {
        for(let key in item) {
          if ( typeof item[key] == "string") {
            if ( item[key].indexOf(this.site) != -1 ) {
              return true
            }
          }
        }
      })

      this.dataList = this.dataList.filter((item,i) => {
        for(let key in item) {
          if ( typeof item[key] == "string") {
            if ( item[key].indexOf(this.dis1) != -1 ) {
              return true
            }
          }
        }
      })

      this.dataList = this.dataList.filter((item,i) => {
        for(let key in item) {
          if ( typeof item[key] == "string") {
            if ( item[key].indexOf(this.dis2) != -1 ) {
              return true
            }
          }
        }
      })

      this.dataList = this.dataList.filter((item,i) => {
        for(let key in item) {
          if ( typeof item[key] == "string") {
            if ( item[key].indexOf(this.pro) != -1 ) {
              return true
            }
          }
        }
      })

      this.dataList = this.dataList.filter((item,i) => {
        for(let key in item) {
          if ( typeof item[key] == "string") {
            if ( item[key].indexOf(this.emfmVal) != -1 ) {
              // console.log(item[key], this.emfmVal, item[key].indexOf(this.emfmVal))
              return true
            }
          }
        }
      })

      this.dataList = this.dataList.filter((item,i) => {
        for(let key in item) {
          if ( typeof item[key] == "string") {
            if ( item[key].indexOf(this.dmaVal) != -1 ) {
              return true
            }
          }
        }
      })

      this.dataList = this.dataList.filter((item,i) => {
        for(let key in item) {
          if ( typeof item[key] == "string") {
            if ( item[key].indexOf(this.impleVal) != -1 ) {
              return true
            }
          }
        }
      })

      this.dataList = this.dataList.filter((item,i) => {
        for(let key in item) {
          if ( typeof item[key] == "string") {
            if ( item[key].indexOf(this.natureVal) != -1 ) {
              return true
            }
          }
        }
      })


      this.dataList = this.dataList.filter((item,i) => {
        for(let key in item) {
          if ( typeof item[key] == "string") {
            if ( item[key].indexOf(this.sitetocVal) != -1) {
              return true
            }
          }
        }
      })

      this.dataList = this.dataList.filter((item,i) => {
        for(let key in item) {
          if ( typeof item[key] == "string") {
            // console.log(item[key], this.searchVal)
            if ( item[key].indexOf(this.searchVal) != -1) {
              return true
            }
          }
        }
      })
      this.dataList = this.dataList.filter(item => {
        console.log(item.createdAt, this.filterTime)
        if (item.createdAt.indexOf(this.filterTime) != -1) {
          return true
        }
      })

    },
    //獲取所有工頭
    getSuper (item,i) {
      this.$axios({
        url:"supervisor",
        method:"GET"
      }).then(res => {
        // console.log(res,123)
        if (res.data) {
          this.superList = res.data
        }
      })
    },
    //獲取所有site
    getSite (item,i) {
        this.tableLoad = true
      this.$axios({
        url:"site",
        method:"GET"
      }).then(res => {
        // console.log(res,123)
        if (res.data) {
          this.siteList = res.data
          this.showTable()

        } else {
            this.tableLoad = false
        }
      }).catch(() => [
          this.tableLoad = false
      ])
    },
    showDetail(e) {
      this.currentImg = 0
      this.left = 0
      this.current = e 
      // e.images.forEach(item => {
      //   item.base64Image = "data:image/jpeg;base64," + item.base64Image
      // })
      this.showBox = true
      this.$nextTick(() => {
        this.createImgDOM()
      })
      
      console.log(e)

      //show site
      this.siteList.forEach(item => {
         if (item.ID==e.siteId) {
              this.thisSite = item
           }
       })
    },
    edit (item){
      console.log(item)
    },
    Delete (item) {
      console.log(item)
      let that = this
      that.$Modal.confirm({
        title:"提示",
        content: "確定刪除?",
        onOk () {
          that.$axios({
            url:"attendence/" + item.ID,
            method:"DELETE",
            data: {
              id: item.ID
            }
          }).then(res => {
            console.log("delete",res)
            that.$Message.success("已刪除")
            that.showTable()
          })
        }
      })
    },
    createImgDOM () {
      let oAbs = document.getElementsByClassName('imgAbso');
      if (this.current.images) {
        this.absWidth = Math.ceil(this.current.images.length / 2) *64 + 10
      }
      
    },
    preNext (boo) {
      if (boo) {
        //向左滑動
        this.left += 320
        if (this.left > 0) {
          this.left = 0
        }
      } else {
        if (this.absWidth > (Math.abs(this.left) + 320)) {
          this.left -= 320
        }
      }
    },
    exportData () { // 不再使用
      this.$refs.recordTable.exportCsv({
        filename: "報工記錄"
      });
    },
    convertToCSV(objArray){
            var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
            var str = '';

            for (var i = 0; i < array.length; i++) {
                var line = '';
                for (var index in array[i]) {
                    if (line != '') line += ','

                    line += array[i][index];
                }

                str += line + '\r\n';
            }

            return str;
    },
    exportCSVFile(headers, items, fileTitle) {
          if (headers) {
              items.unshift(headers);
          }
            // console.log(items)
          // Convert Object to JSON
          var jsonObject = JSON.stringify(items);
          var csv = this.convertToCSV(jsonObject);

          var exportedFilenmae = fileTitle + '.csv' || 'export.csv';

          var blob = new Blob(["\uFEFF"+csv], {type: 'text/csv; charset=utf-18'});
          if (navigator.msSaveBlob) { // IE 10+
              navigator.msSaveBlob(blob, exportedFilenmae);
          } else {
              var link = document.createElement("a");
              if (link.download !== undefined) { // feature detection
                  // Browsers that support HTML5 download attribute
                  var url = URL.createObjectURL(blob);
                  link.setAttribute("href", url);
                  link.setAttribute("download", exportedFilenmae);
                  link.style.visibility = 'hidden';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
              }
          }
    },
    exportData2 () { //新的導出報功記錄功能
      //文件的title
      let headers = {
        //   siteName:"地盤名稱",
        //   siteId:"地盤編號",
        //   project:"項目編號",
        //   EMFM:"EMFM",
        //   DMA:"DMA",
        //   impleto:"Imple To.",
        //   sitecto:"Site C To",
        //   nature:"Nature",
        //   supvisiorName:"創建者",
        //   createdAt:"創建日期",
        //   machine:"使用機械",
        //   company:"判頭",
        //   time:"時段",
        //   worktype:"工作種類",
        //   subcontract:"副項目編號",
        //   description:"工作內容",
        //   workers:"Renopipe工人",
        //   remark:"其他公司工人",

            DMA: "DMA",
            EMFM: "EMFM",
            company: "判頭",
            createdAt: "創建日期",
            description: "工作內容",
            imageUrl: "圖片",
            impleto: "Imple To.",
            machine: "使用機械",
            nature: "Nature",
            project: "項目編號",
            remark: "其他公司工人",
            siteId: "地盤編號",
            siteName: "地盤名稱",
            sitecto: "Site C To",
            subcontract: "副項目編號",
            supvisiorName: "創建者",
            time: "時段",
            workers: "Renopipe工人",
            worktype: "工作種類",
      };

      //文件的內容
      //你要在這個地方整合好資料
    //   let itemsNotFormatted = [
    //       {
    //         siteName:"TTA no.2N/A",
    //         siteId:"J1003",
    //         project:"WPR(環保道) NA", //英文＋中文
    //         EMFM:"NA",
    //         DMA:"NA",
    //         impleto:"NA",
    //         sitecto:"NA",
    //         nature:"EC",
    //         supvisiorName:"吳家軒 Ng Ka Hin",
    //         createdAt:":2020/08/27 06:48",
    //         machine:"發電機1部",
    //         company:"Renopipe",
    //         time:"上午",
    //         worktype:"代工(試制)",
    //         subcontract:"45345",
    //         description:"測試報告",
    //         workers:"聶國富 Nie Guofu - 什工 聶聶聶 NieNieNie - 木工",
    //         remark:"信昌:什工1人 木工2人",
    //         imageUrl:"https://renopipe.co/attendence-attachment/bbf94b34eb32268ada57a3be5062fe7d/27-Aug-2020-06-48-22-picture-1.jpeg" //直接把連結放進來
    //       },
    //   ];
        let itemsNotFormatted = this.dataList

      var itemsFormatted = [];

      // format the data
      itemsNotFormatted.forEach((item) => {
          
          itemsFormatted.push({
                DMA:item.dma,
                EMFM:item.emfm,
                company:item.rporsubCRP,
                createdAt:item.createdAt,
                description:String(item.description).replace(/,/g,"-").replace(/，/g,"-").replace(/\n/g,"-"),
                imageUrl:item.images ? (item.images.map(item => this.url + item.filePath)).join(";") : "",
                impleto:item.imple,
                machine:String(item.machine).replace(/,/g, ''),
                nature:item.region,  // undefiend
                project:String(item.project).replace(/,/g, ''),
                remark:String(item.remark).replace(/,/g, ''),
                siteId:item.siteId,
                siteName:String(item.siteName).replace(/,/g, ''),
                sitecto:item.sitetoc,
                subcontract:item.subcontract,
                supvisiorName:String(item.cName),
                time:item.time,
                workers:(item.workers.map(item => item.cName + "(" + item.position + ")")).join("-"),
                worktype:String(item.worktype).replace(/,/g, ''),
          })
          
      });
    //   itemsFormatted.forEach(item => {
    //       for(let key in item) {
    //           item[key] = String(item[key]) + "."
    //       }
    //   })


      let currentDate = new Date();
      var fileTitle = 'Renopipe報工記錄' + currentDate; // or 'my-unique-title'
        console.log(itemsFormatted)
      this.exportCSVFile(headers, itemsFormatted, fileTitle); // call the exportCSVFile() function to process the JSON and trigger the download
    },
    downloadIMG(e){
      this.msg = "下載中...請稍候"
       this.$axios({
            url:"attendence/"+ e +"/image",
            method:"GET"
          }).then(res => {
            console.log(res)
            this.msg = "下載圖片"
            window.location.href = res.request.responseURL
            //trigger download link by open a window in background
        })
      }
    },
}
</script>

