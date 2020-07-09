<style lang="less" scoped>
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
  // border: solid red 1px;
  overflow:hidden;
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
  height: 80px;
  overflow: hidden;
  // border: solid green 1px;
}
.imgAbso {
  transition:0.3s;
  position: absolute;
  width: 400px;
  height: 80px;
  left: 0;
  top: 0;
  // border: solid blue 1px;
  >.smallImgWrap {
    width:80px;
    height: 80px;
    overflow: hidden;
    border: solid #CCC 1px;
    // display: inline-block;
    box-sizing: border-box;
    >img {
      width:auto;
      height: 100%;
      
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
</style>

<template>
  <div>
    <div class="sb al">
      <div></div>
      <Button type="info" class="editBtn" @click="exportData">導出CSV</Button>
    </div>
    <!-- 表格展示 -->
    <Table :columns="columns" ref="recordTable" :data="dataList" @on-row-click="showDetail">
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
        <div>
          <div class="bigImgWrap  ju al">
            <img style="border:solid 1px lightgray" class="bigImg" :src="url + current.images[currentImg].url" >
          </div>
          <div class="recordSmallImgWrap al ju">
            <Icon @click="preNext(true)" v-show="current.images.length>4" class="lefttopIcon" type="ios-arrow-back" size="30" />
            <div class="imgRela">
              <div class="imgAbso al" :style="{width:absWidth+'px',left:left+'px'}">
                <div @mouseover="currentImg=i" :class="['smallImgWrap', 'ju', 'al',{imgAct:currentImg==i}]" v-for="(item,i) in current.images" :key="i">
                  <img :src="item.url" >
                </div>
              </div>
            </div>
            <Icon @click="preNext(false)" v-show="current.images.length>4" class="lefttopIcon" size="30" type="ios-arrow-forward" />
          </div>
        </div>

        <!-- 中間詳細信息 -->
        <div class="centerItem sb">
          <ul class="recordDetailUl">
            <li><span><b>地盤:</b> </span><span>地盤信息....</span></li>
            <li><span><b>創建者:</b> </span><span>{{current.supervisors[0].cName}} {{current.supervisors[0].fullname}} </span></li>
            <li><span><b>創建日期:</b> </span><span>{{current.createdAt}}</span></li>
            <li><span><b>使用機械:</b> </span><span>{{current.machine}}</span></li>
            <li><span><b>判頭:</b> <span>{{current.rporsubCRP}}</span></span></li>
            <li><span><b>時段:</b> <span>{{current.time}}</span></span></li>
            <li><span><b>工作種類:</b> <span>{{current.worktype}}</span></span></li>
            <li><span><b>副項目編號:</b> <span>{{current.subcontract}}</span></span></li>

            <li style="border:solid 1px lightgray;padding:10px;"><span>{{current.description}}</span></li>
          </ul>
          <Button class="addBtn" type="info">下載圖片</Button>
        </div>

        <!-- 右邊工人列表 -->
        <div class="recordRight">
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
      </div>
    </Modal>
  </div>
</template>

<script>
export default {
  data () {
    let that = this
    return {
      showBox: false,
      url:"",
      columns: [
        { title: "創建日期", key:"createdAt" },
        // { title: "圖片預覽", slot:"preview" },
        { title: "地盤ID", key:"siteId" },
        { title: "開始時間", key:"startedAt" },
        { title: "結束時間", key:"updatedAt" },
        { title: "詳請", key:"description" },
        {
          title: "工頭", key:"supervisor",
          render:(h,p) => {
            let str = "暫無"
            that.superList.forEach(item => {
              if (item.ID==p.row.supervisorId) {
                str = item.fullname
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
      load:function(){},
    }
  },
  created () {
    this.url = window.baseURL
    this.showTable()
  },
  mounted () {
    this.$Message.loading({
      content:"獲取記錄中...",
      duration:10
    })
    this.load = this.createImgDOM()
  },
  methods:{
    showTable () {
      this.$axios({
        url:"attendence",
        method:"GET"
      }).then(res => {
        console.log(res)
        if (res.data) {
          this.dataList = res.data
          this.getSuper()
          this.load()
        }
      }).catch(() => {
        this.load()
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
    showDetail(e) {
      this.showBox = true
      e.images.forEach(item => {
        item.base64Image = "data:image/jpeg;base64," + item.base64Image
      })
      this.current = e  
      console.log(e)
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
      this.absWidth = this.current.images.length*80
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
    exportData () {
      this.$refs.recordTable.exportCsv({
        filename: "報工記錄"
      });
    },
  }
}
</script>

