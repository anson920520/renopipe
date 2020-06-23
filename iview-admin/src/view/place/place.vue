<template>
  <div>
    <div class="sb al">
      <div>未有編輯,刪除api</div>
      <Button type="info" class="addBtn" @click="showAdd=true">新增地盤</Button>
    </div>
    <!-- 表格展示 -->
    <Table :columns="columns" :data="dataList" >
      <template slot-scope="{row}" slot="operation">
        <div>
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
        <FormItem label="地盤地址" prop="address">
          <Input @on-keyup.enter="keydown" type="text" style="width: 250px;" v-model="addForm.address" placeholder="請輸入地盤地址" />
        </FormItem>

        <!-- <FormItem label="地盤編號" prop="uuid">
          <Input type="text" style="width: 250px;" v-model="addForm.uuid" placeholder="請輸入地盤編號" />
        </FormItem> -->

        <FormItem label="地盤經度" prop="lo">
          <Input @on-keyup.enter="keydown" type="text" style="width: 250px;" v-model="addForm.lo" placeholder="請輸入地盤經度" />
        </FormItem>

        <FormItem label="地盤緯度" prop="la">
          <Input @on-keyup.enter="keydown" type="text" style="width: 250px;" v-model="addForm.la" placeholder="請輸入地盤緯度" />
        </FormItem>
        <div id="placeMap"></div>
      </Form>
    </Modal>

    <!-- 编辑 -->
    <Modal v-model="showEdit" 
      @on-ok="okEdit"
      :loading='loading'
      title="编辑地盤">
      <Form :model="editForm" ref='editForm' :rules='rule' :label-width="130">
        <FormItem label="地盤地址" prop="address">
          <Input @on-keyup.enter="keydown" type="text" style="width: 250px;" v-model="editForm.address" placeholder="請輸入地盤地址" />
        </FormItem>

        <!-- <FormItem label="地盤編號" prop="uuid">
          <Input type="text" style="width: 250px;" v-model="editForm.uuid" placeholder="請輸入地盤編號" />
        </FormItem> -->

        <FormItem label="地盤經度" prop="lo">
          <Input @on-keyup.enter="keydown" type="text" style="width: 250px;" v-model="editForm.lo" placeholder="請輸入地盤經度" />
        </FormItem>

        <FormItem label="地盤緯度" prop="la">
          <Input @on-keyup.enter="keydown" type="text" style="width: 250px;" v-model="editForm.la" placeholder="請輸入地盤緯度" />
        </FormItem>
        <div id="placeMap2"></div>
      </Form>
    </Modal>
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
        {
          title: "創建日期",
          key: "createdAt"
        },
        {
          title: "地盤編號",
          key: "uuid"
        },
        {
          title: "地址",
          key: "name"
        },
        {
          title: "經度",
          key: "longitude"
        },
        {
          title: "緯度",
          key: "latitude"
        },
        {
          title: "操作",
          slot:"operation"
        }
      ],
      dataList: [
        {
          time: "220-12-12",
          address: "香港噠噠噠噠噠...",
          latitude: 22.222,
          longitude: 133.0022,
          num: "ajkhdksa"
        }
      ],
      showAdd: false,
      showEdit: false,
      rule: {
        address:[
          { required:true, message:"請輸入地盤地址",trigger:"blur" },
        ],
        uuid:[
          { required:true, message:"請輸入地盤編號",trigger:"blur" },
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
        uuid:"",
        la:"",
        lo:""
      },
      editForm: {
        address: "",
        uuid:"",
        la:"",
        lo:""
      },
      addMarker:{},
      editMarker:{},
      loading:true,
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
        header:{
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          'Access-Control-Allow-Methods' : "*"
        },
      }).then(res => {
        console.log(res)
        if (res.data) {
          this.dataList = res.data
        }
        
      }).catch(err => {
        console.log(err)
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
              "uuid": that.addForm.uuid,
              "name": that.addForm.address,
              "latitude":Number(that.addForm.la),
              "longitude": Number(that.addForm.lo)
            }
          }).then(res => {
            console.log("add",res)
            if (res.data) {
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
            url:"site",
            method:"PUT",
            data: {
              "uuid": that.editForm.uuid,
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
      this.editForm.uuid = item.uuid
      this.editForm.la = item.latitude + ""
      this.editForm.lo = item.longitude  + ""

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
  }
}
</script>

<style>
#placeMap,#placeMap2{
  width: 100%;
  height: 300px;
}
</style>