<template>
  <div>
    <div class="sb al">
      <div class="ju al">
        <Input type="text" @on-enter="search" v-model="searchVal"  placeholder="輸入關鍵字搜索"/>
        <Button @click="search"  type="info">搜索</Button>
      </div>
      <Button type="info" class="addBtn" @click="showAdd=true">新增地盤</Button>
    </div>
    <!-- 表格展示 -->
    <Table :columns="columns" :data="dataList" >
      <template slot-scope="{row}" slot="operation">
        <div>
          <Button size="small" type="info" class="createQRBtn noBorder" @click="createQR(row)">生成二維碼</Button>
          <Button size="small" class="editBtn" @click="edit(row)">編輯</Button>
          <Button size="small" class="noBorder" type="error" @click="Delete(row)">刪除</Button>
        </div>
      </template>
    </Table>

    <!-- 新增 -->
    <Modal v-model="showAdd" 
      @on-ok="okAdd"
      :loading='loading'
      title="新增地盤">
      <Form :model="addForm" ref="addForm" :rules='rule' :label-width="130">
        <img style="width:50%;display:flex;justify-content: center;" src="../../assets/images/ex.png"/>
        <small style=" display: flex;justify-content: center;">沒有*的欄位可以選填，有*的欄位如果沒有資料請填寫NA</small>
        <FormItem label="項目編號" prop="">
          <Input type="text" style="width: 300px;" v-model="addForm.project" placeholder="報工介面第一層過濾器選項" />
        </FormItem>

        <FormItem label="DIS(2)" prop="">
          <Input type="text" style="width: 300px;" v-model="addForm.siteCode1" placeholder="報工介面第二層過濾器選項" />
        </FormItem>

        <FormItem label="DIS(2) 中文翻譯" prop="">
          <Input type="text" style="width: 300px;" v-model="addForm.siteCode2" placeholder="DIS(2)的中文翻譯 *報工介面第二層過濾器選項" />
        </FormItem>

        <FormItem label="DIS(1)" prop="">
          <Input type="text" style="width: 300px;" v-model="addForm.siteCode3" placeholder="輸入DIS(1)" />
        </FormItem>

        <FormItem label="Site C. To" prop="">
          <Input type="text" style="width: 300px;" v-model="addForm.sitetoc" placeholder="請輸入地盤Site C. To" />
        </FormItem>

        <FormItem label="Imple To." prop="">
          <Input type="text" style="width: 300px;" v-model="addForm.imple" placeholder="請輸入地盤Imple To." />
        </FormItem>

        <FormItem label="DMA" prop="">
          <Input type="text" style="width: 300px;" v-model="addForm.dma" placeholder="請輸入地盤DMA" />
        </FormItem>

        <FormItem label="EMFM" prop="">
          <Input type="text" style="width: 300px;" v-model="addForm.emfm" placeholder="請輸入地盤EMFM Ref." />
        </FormItem>

        <FormItem label="地盤英文全名" prop="address">
          <Input @on-keyup.enter="keydown" type="text" style="width: 300px;" v-model="addForm.address" placeholder="Loc. Name (Eng)" />
        </FormItem>

        <FormItem label="地盤中文全名" prop="">
          <Input @on-keyup.enter="keydown" type="text" style="width: 300px;" v-model="addForm.cname" placeholder=" 報工介面第三層過濾器選項" />
        </FormItem>

         <FormItem label="Nature(MM/ EC/ NC/MC)" prop="">
          <Input @on-keyup.enter="keydown" type="text" style="width: 300px;" v-model="addForm.region" placeholder="請輸入 Nature(MM/ EC/ NC/MC)" />
        </FormItem>

        <FormItem label="地盤經度" prop="lo">
          <Input @on-keyup.enter="keydown" type="text" style="width: 300px;" v-model="addForm.lo" placeholder="latitude (地盤經度)" />
        </FormItem>

        <FormItem label="地盤緯度" prop="la">
          <Input @on-keyup.enter="keydown" type="text" style="width: 300px;" v-model="addForm.la" placeholder="longitude (地盤緯度)" />
        </FormItem>
        <small style=" display: flex;justify-content: center;">點擊地圖選擇座標</small>
        <div id="placeMap"></div>
      </Form>
    </Modal>

    <!-- 编辑 -->
    <Modal v-model="showEdit" 
      @on-ok="okEdit"
      :loading='loading'
      title="编辑地盤">
      <Form :model="editForm" ref='editForm' :rules='rule' :label-width="130">
        <FormItem label="項目編號" prop="">
          <Input type="text" style="width: 250px;" v-model="editForm.project" placeholder="請輸入項目編號" />
        </FormItem>

        <FormItem label="DIS(2)" prop="">
          <Input type="text" style="width: 250px;" v-model="editForm.siteCode1" placeholder="輸入DIS(2)" />
        </FormItem>

        <FormItem label="DIS(2) 中文翻譯" prop="">
          <Input type="text" style="width: 250px;" v-model="editForm.siteCode2" placeholder="請輸入DIS(2)的中文翻譯" />
        </FormItem>

        <FormItem label="DIS(1)" prop="">
          <Input type="text" style="width: 250px;" v-model="editForm.siteCode3" placeholder="輸入DIS(2)" />
        </FormItem>

        <FormItem label="Site C. To" prop="">
          <Input type="text" style="width: 250px;" v-model="editForm.sitetoc" placeholder="請輸入地盤Site C. To" />
        </FormItem>

        <FormItem label="Imple To." prop="">
          <Input type="text" style="width: 250px;" v-model="editForm.imple" placeholder="請輸入地盤Imple To." />
        </FormItem>

        <FormItem label="DMA" prop="">
          <Input type="text" style="width: 250px;" v-model="editForm.dma" placeholder="請輸入地盤DMA" />
        </FormItem>

        <FormItem label="EMFM" prop="">
          <Input type="text" style="width: 250px;" v-model="editForm.emfm" placeholder="請輸入地盤EMFM" />
        </FormItem>

        <FormItem label="地盤地址" prop="address">
          <Input @on-keyup.enter="keydown" type="text" style="width: 250px;" v-model="editForm.address" placeholder="請輸入地盤地址" />
        </FormItem>

        <FormItem label="地盤中文地址" prop="">
          <Input @on-keyup.enter="keydown" type="text" style="width: 250px;" v-model="editForm.cname" placeholder="請輸入中文地址" />
        </FormItem>

        <FormItem label="Nature(MM/ EC/ NC/MC)" prop="">
          <Input @on-keyup.enter="keydown" type="text" style="width: 250px;" v-model="editForm.region" placeholder="請輸入 Nature(MM/ EC/ NC/MC)" />
        </FormItem>

        <FormItem label="地盤經度" prop="lo">
          <Input @on-keyup.enter="keydown" type="text" style="width: 250px;" v-model="editForm.lo" placeholder="請輸入地盤經度" />
        </FormItem>

        <FormItem label="地盤緯度" prop="la">
          <Input @on-keyup.enter="keydown" type="text" style="width: 250px;" v-model="editForm.la" placeholder="請輸入地盤緯度" />
        </FormItem>
        <div id="placeMap2"></div>
      </Form>
    </Modal>

    <div class="qrBox" v-if="showQR">
      <div id="qr" class="ju"></div>
      <div class="qrBtnBox sa">
        <Button type="primary" size="small" @click="saveQR">保存到本地</Button>
        <Button type="error" size="small" @click="hideQR">關閉</Button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "place",
  data () {
    return {
      addMap: {},
      editMap: {},
      columns: [
       /* {
          title: "創建日期",
          key: "createdAt"
        },
        {
          title: "編號1",
          key: "siteCode1"
        },
        {
          title: "編號2",
          key: "siteCode2"
        },
        {
          title: "編號3",
          key: "siteCode3"
        },*/
        {
          title: "項目編號",
          key: "project"
        },
        {
          title: "中文地址",
          key: "cname"
        },
        {
          title: "地址",
          key: "name"
        },
        /*{
          title: "經度",
          key: "longitude"
        },
        {
          title: "緯度",
          key: "latitude"
        },*/
         {
          title: "Imple. TO",
          key: "imple"
        },
         {
          title: "Site C. TO.",
          key: "sitetoc"
        },
        {
          title: "Dis(1)",
          key: "siteCode1"
        },
        {
          title: "Dis(1)中文",
          key: "siteCode2"
        },
        {
          title: "Dis(2)",
          key: "siteCode3"
        },
        {
          title: "DMA",
          key: "dma" //need to adjust field name
        },
        {
          title: "EMFM Ref.",
          key: "emfm" //need to adjust field name
        },
                {
          title: "Nature",
          key: "region" //need to adjust field name
        },
        {
          title: "操作",
          slot:"operation",
          width:199
        }
      ],
      dataList: [ ],
      showAdd: false,
      showEdit: false,
      showQR: false,
      qr:{},    //二維碼對象
      rule: {
        address:[
          { required:true, message:"請輸入地盤地址",trigger:"blur" },
        ],
        uuid:[
          { required:true, message:"請輸入地盤編號",trigger:"blur" },
        ],
        region:[
          { required:true, message:"請輸入地區",trigger:"blur" },
        ],
        siteCode1:[
          { required:true, message:"請輸入地盤大編號",trigger:"blur" },
        ],
        siteCode2:[
          { required:true, message:"請輸入地盤中編號",trigger:"blur" },
        ],
        siteCode3:[
          { required:true, message:"請輸入地盤小編號",trigger:"blur" },
        ],
        proId:[
          { required:true, message:"請輸入項目編號",trigger:"blur" },
        ],
        la:[
          { required:true, message:"請輸入地盤緯度",trigger:"blur" },
        ],
        lo:[
          { required:true, message:"請輸入地盤經度",trigger:"blur" },
        ],
      },
      addForm: {
        address: "",
        cname: "",
        uuid:"",
        proId: "",     //項目編號
        siteCode1: "",
        Nature:"",
        siteCode2: "",
        siteCode3: "",
        region: "",
        la:"",
        lo:""
      },
      editForm: {
        cname: "",
        address: "",
        uuid:"",
        proId: "",     //項目編號
        siteCode1: "",
        siteCode2: "",
        siteCode3: "",
        region: "",
        la:"",
        lo:""
      },
      addMarker:{},
      editMarker:{},
      loading:true,
      currant: {},     // 當前數據
      allData:[],
      searchVal:"",
    }
  },
  created () {
    this.showTable()
  },
  mounted () {
    this.createMap()
  },
  methods: {
    keydown () {
      if (this.showAdd) {
        this.okAdd()
      } else if (this.editForm) {
        this.okEdit()
      }
    },
    showTable () {
      this.$axios({
        url:"site",
        method:"GET",
        // headers:{
        //   "Content-Type": "application/json",
        //   "Access-Control-Allow-Origin": "*",
        //   'Access-Control-Allow-Methods' : "*",
        //   "Authorization": localStorage.getItem('tokan')
        // },
      }).then(res => {

        console.log(res)
        if (res.data.Message != 'cannot get authorization token') {
          res.data.forEach(item => {
              item.createdAt = item.createdAt.slice(0,16).replace("T"," ").split("-").join("/")
          })
          this.allData = res.data
          this.dataList = this.allData.slice(0)
        }
        
      }).catch(err => {
        console.log(err.response)
      })
    },
    search () {
      this.dataList = this.allData.filter((item,i) => {
        for(let key in item) {
          if ( typeof item[key] == "string") {
            if (item[key].indexOf(this.searchVal) != -1) {
              return true
            }
          }
          
        }
      })
    },
    okAdd () {
      let that = this
      that.$refs.addForm.validate(flag => {
        console.log(flag)
        if (flag) {
          that.$axios({
            url:"site",
            method:"POST",
            data: {
              cname:that.addForm.cname,
              project:that.addForm.project,
              sitetoc:that.addForm.sitetoc,
              emfm:that.addForm.emfm,
              imple:that.addForm.imple,
              dma:that.addForm.dma,
              siteCode1: that.addForm.siteCode1,
              siteCode2: that.addForm.siteCode2,
              siteCode3: that.addForm.siteCode3,
              region: that.addForm.region,
              "name": that.addForm.address,
              "latitude":Number(that.addForm.la),
              "longitude": Number(that.addForm.lo)
            }
          }).then(res => {
            console.log("add",res)
            if (res.data) {
              // alert('123')
              that.$Message.success("已新增地盤")
              that.showAdd = false
              that.hideLoading()
              that.showTable()
            }
          })
        } else {
          that.hideLoading()
        }
      })
    },
    okEdit () {
      let that = this
      that.$refs.editForm.validate(flag => {
        console.log(flag)
        if (flag) {
          that.$axios({
            url:"site/" + that.current.ID,
            method:"PUT",
            data: {
              name:that.editForm.name,
              cname:that.editForm.cname,
              project:that.editForm.project,
              sitetoc:that.editForm.sitetoc,
              emfm:that.editForm.emfm,
              imple:that.editForm.imple,
              dma:that.editForm.dma,
              siteCode1: that.editForm.siteCode1,
              siteCode2: that.editForm.siteCode2,
              siteCode3: that.editForm.siteCode3,
              region: that.editForm.region,
              "name": that.editForm.address,
              "latitude":Number(that.editForm.la),
              "longitude": Number(that.editForm.lo)
            }
          }).then(res => {
            console.log("edit",res)
            if (res.data) {
              that.$Message.success("已修改")
              that.showEdit = false
              that.hideLoading()
              that.showTable()
            }
          })
        } else {
          that.hideLoading()
        }
      })
    },
    edit (item) {
      
      console.log(item)
      let that = this
      this.showEdit = true
      this.editForm.address = item.name
      this.editForm.cname = item.cname
      this.editForm.siteCode1 = item.siteCode1
      this.editForm.siteCode2 = item.siteCode2
      this.editForm.siteCode3 = item.siteCode3
      this.editForm.sitetoc = item.sitetoc
      this.editForm.emfm = item.emfm
      this.editForm.imple = item.imple
      this.editForm.dma = item.dma
      this.editForm.region = item.region
      this.editForm.la = item.latitude + ""
      this.editForm.lo = item.longitude  + ""
      this.editForm.project = item.project
      this.current = item
      setTimeout(() => {
        that.editMap.remove(that.editMarker)
        that.editMarker = new AMap.Marker({
          icon: "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png",
          position:[item.longitude,item.latitude]
        })
        that.editMap.add(that.editMarker)
        that.editMap.setCenter([item.longitude,item.latitude])
      },200)
      
    },
    Delete (item) {
      console.log(item)
      let that = this
      that.$Modal.confirm({
        title:"提示",
        content: "確定刪除?",
        onOk () {
          that.$axios({
            url:"site/" + item.ID,
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
    createMap () {
      let that =this
      this.addMap = new AMap.Map('placeMap', {
        resizeEnable: true,
        zoom:11,
        lang:"zh_en",
        center: [114.14, 22.29]
      });
      this.editMap = new AMap.Map('placeMap2', {
        resizeEnable: true,
        zoom:11,
        center: [114.15, 22.15]
      });
      this.addMap.on('click',function (e) {
        that.addMap.remove(that.addMarker)
        that.addForm.lo = String(e.lnglat.lng)
        that.addForm.la = String(e.lnglat.lat)
        that.addMarker = new AMap.Marker({
          icon: "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png",
          position:[e.lnglat.lng,e.lnglat.lat]
        })
        that.addMap.add(that.addMarker)
      })

      this.editMap.on('click',function (e) {
        // console.log(e)
        that.editMap.remove(that.editMarker)
        that.editForm.lo = String(e.lnglat.lng)
        that.editForm.la = String(e.lnglat.lat)
        that.editMarker = new AMap.Marker({
          icon: "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png",
          position:[e.lnglat.lng,e.lnglat.lat]
        })
        that.editMap.add(that.editMarker)
      })
      // 搜索地址获取经纬度
      // AMap.plugin('AMap.Autocomplete', function(){
      //   // 实例化Autocomplete
      //   var autoOptions = {
      //     city: '全国'
      //   }
      //   var autoComplete = new AMap.Autocomplete(autoOptions);
      //   autoComplete.search('香港九龙',(status, result) => {
      //     console.log(status,result)
      //   })
      // })
      
    },
    hideLoading() {
      this.loading = false
      this.$nextTick(() => {
        this.loading = true
      })
    },
    //生成二維碼
    createQR (item) {
      // console.log(item)
      this.current= item
      this.showQR = false
      this.$nextTick(() => {
        this.showQR = true
        this.$nextTick(() => {
          this.qr = new this.$QR("qr",{
            width:200,
            height: 200,
            text:item.uuid
          })
        })
      })
    },
    hideQR () { this.showQR = false },
    saveQR () {
        var img = document.querySelector("#qr>img")
        // 将图片的src属性作为URL地址
        var url = img.src
        // console.log(url)
        var a = document.createElement('a')
        var event = new MouseEvent('click')

        a.download = this.current.uuid.slice(0,3) + Date.now()
        a.href = url

        a.dispatchEvent(event)
    },
  }
}
</script>

<style lang="less" scoped>
#placeMap,#placeMap2{
  width: 100%;
  height: 300px;
}
.qrBox {
  width: 300px;
  height: 300px;
  border: solid black 1px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  background: white;
  border-radius: 10px;
  display:flex;
  flex-direction: column;
  justify-content: space-around;
  z-index:998;
}
#qr {
  width: 200px;
  height: 200px;
  margin: auto;
  // border: solid red 1px;
}
.qrBtnBox {
  margin-bottom: 10px;
}
.createQRBtn {
  margin-right: 3px;
}
</style>