<template>
  <div>
    <Button type="info" style="margin-bottom: 20px" @click="showAddModal">新增门店</Button>

    <!-- 新增 -->
    <Modal v-model="add_modal"
      :width='600'
      title="新增门店"
      @on-ok="okAdd">
      <div class='add_wrap'>
        <Form 
          :model="addForm"
          :rules="rule"
          :label-width='150'
          ref='addForm'>
          <FormItem label="供应商">
            <Select 
              v-model="provider"
              style="width: 300px;">
              <Option v-for="item in provider_list" 
                v-model="item.id"
                :key="item.id">{{item.sp_name}}</Option>
            </Select>
          </FormItem>

          <FormItem label="省份" prop="province">
            <Select 
              @on-change="choose_province"
              style="width: 300px;">
              <Option v-for="item in province_list" 
                v-model="item.id"
                :key="item.id">{{item.name}}</Option>
            </Select>
          </FormItem>

          <FormItem label='城市' prop="city">
            <Select style="width: 300px" @on-change="choose_city">
              <Option v-for="item in city_list"
                :key="item.id" 
                :value="item.id">{{item.name}}</Option>
            </Select>
          </FormItem>

          <FormItem label='区/县' prop="city">
            <Select v-model="addForm.area" style="width: 300px">
              <Option v-for="item in area_list"
                :key="item.id" 
                :value="item.name">{{item.name}}</Option>
            </Select>
          </FormItem>

          <FormItem label="门店名称" prop="name">
            <Input placeholder="请输入门店名称" v-model="addForm.name" style="width:300px" :maxlength="40" @on-keyup='enter'></Input>
          </FormItem>

          <FormItem label="门店电话" prop="store_phone">
              <Input placeholder="请输入门店电话" v-model="addForm.store_phone" style="width: 300px" :maxlength="40" @on-keyup='enter'></Input>
          </FormItem>

          <FormItem label="门店地址" prop="store_address" :maxlength="50">
            <Input placeholder="请输入门店地址" @on-change="getLongAndLat" v-model="addForm.store_address" style="width: 300px" @on-keyup='enter'></Input>
          </FormItem>

          <div style="position: relative">
            <span class="lola">经度： {{longitude}}</span>
            <span class="lola" style="left: 230px !important;">纬度： {{latitude}}</span>
          </div>
          
          <div class="addStoreMapWrap">
            <div id="addStoreMap"></div>
          </div>
          
        </Form>
        <div style="display: flex;justify-content: center;">
          <Checkbox v-model="wash_service">洗车服务</Checkbox>
          <Checkbox v-model="lacquer_service">喷漆服务</Checkbox>
          <!-- <Checkbox v-model="stopcar_service">停车服务</Checkbox> -->
          <Checkbox v-model="fulloil_maintenance_service">保养服务(全合成)</Checkbox>
          <Checkbox v-model="semioil_maintenance_service">保养服务(半合成)</Checkbox>
        </div>
        
      </div>
    </Modal>
    <!-- 编辑 -->
    <Modal v-model="edit_modal"
      :width='600'
      title="修改门店信息"
      @on-ok="okEdit">
      <div class='add_wrap'>
        <Form 
          :model="editForm"
          :rules="rule"
          :label-width='150'
          ref='editForm'>
          <FormItem label="供应商">
            <Select 
              v-model="provider2"
              style="width: 300px;">
              <Option v-for="item in provider_list" 
                v-model="item.id"
                :key="item.id">{{item.sp_name}}</Option>
            </Select>
          </FormItem>


          <FormItem label="省份" prop="province">
            <Select v-model="province_id2" 
              @on-change="choose_province"
              style="width: 300px;">
              <Option v-for="item in province_list" 
                v-model="item.id"
                :key="item.id">{{item.name}}</Option>
            </Select>
          </FormItem>

          <FormItem label='城市' prop="city">
            <Select v-model="city_id2" style="width: 300px" @on-change="choose_city">
              <Option v-for="item in city_list"
                :key="item.id" 
                :value="item.id">{{item.name}}</Option>
            </Select>
          </FormItem>

          <FormItem label='区/县' prop="area">
            <Select v-model="area_id2" style="width: 300px" @on-change="choose_area">
              <Option v-for="item in area_list"
                :key="item.id" 
                :value="item.id">{{item.name}}</Option>
            </Select>
          </FormItem>

          <FormItem label="门店名称" prop="name">
            <Input v-model="editForm.name" style="width:300px" :maxlength="40" @on-keyup='enter'></Input>
          </FormItem>

          <FormItem label="电话" prop="store_phone">
              <Input v-model="editForm.store_phone" style="width: 300px" :maxlength="40" @on-keyup='enter'></Input>
          </FormItem>

          <FormItem label="门店地址" prop="store_address" :maxlength="50">
            <Input v-model="editForm.store_address" style="width: 300px" @on-keyup='enter'></Input>
          </FormItem>

        </Form>
        <div style="display: flex;justify-content: center;">
          <Checkbox v-model="wash_service">洗车服务</Checkbox>
          <Checkbox v-model="lacquer_service">喷漆服务</Checkbox>
          <!-- <Checkbox v-model="stopcar_service">停车服务</Checkbox> -->
          <Checkbox v-model="fulloil_maintenance_service">保养服务(全合成)</Checkbox>
          <Checkbox v-model="semioil_maintenance_service">保养服务(半合成)</Checkbox>
        </div>
      </div>
    </Modal>

    <!-- 展示数据表格 -->
    <Table :data="data_list" :columns="title_list"></Table>

    <!-- 分页 -->
    <Page class="Page" 
      :current="page"
      show-total
      align="right"
      :total="total" 
      :pageSize="20"
      @on-change="changePage"></Page>
  </div>
</template>
<script>
import { METHODS } from 'http'
import AMap from 'AMap'
export default {
  data () {
    const that = this
    return {
      province_id: '',     //绑定新增的省份ID
      city_id: '',     
      province_id2: "北京市",    //绑定编辑的省份ID
      city_id2: "",    
      area_id2: "",
      province_list: [],
      city_list: [],
      area_list: [],
      token: localStorage.getItem("jwt"),
      add_modal: false,
      edit_modal: false,
      data_list: [],
      page: 1,
      total: 0,
      title_list: [
        {title:"省份", key: "province"},
        {title:"城市", key: "city"},
        {title:"区/县", key: "area"},
        {title:"门店名称", key: "name"},
        // {title:"类型", key: "store_type"},
        {title:"电话", key: "store_phone"},
        {title:"地址", key: "store_address"},
        {
          title: "操作",
          align: "center",
          render(h, params) {
            return h(
              "div",
              {
                class:"btnwrap",
              },
              [
                h(
                  "Button", {
                    props: {type: "info", size: "small"},
                    style: {
                      marginRight: "5px"
                    },
                    on: {
                      click: () => {
                        that.edit(params.row)
                      }
                    }
                  }, "编辑"
                ),
                h(
                  "Button", {
                    props: {type: "error", size: "small"},
                    on: {
                      click: () => {
                        that.delete(params.row)
                      }
                    }
                  }, "删除"
                ),
              ]
            )
          }
        }
      ],
      addForm: {
        province: "",
        city: '',
        area: "",
        name: "",
        store_address: "",
        store_phone: ""
      },
      rule: {
        name: [
          {required: true, message: "不能为空", trigger: "blur"}
        ],
        province: [
          {required: true, message: "不能为空"}
        ],
        store_address: [
          {required: true, message: "不能为空", trigger: "blur"}
        ],
        store_phone: [
          {required: true, message: "不能为空", trigger: "blur"},
          {pattern: /^\d{7,13}$/, message: "电话号码格式错误", trigger: "blur"}

        ],
        city: [
          {required: true, message: "不能为空"}
        ],
        area: [
          {required: true, message: "不能为空"}
        ]
      },
      editForm: {
        province: "",
        city: '',
        area: "",
        name: "",
        store_address: "",
        store_phone: ""
      },
      id: "",
      wash_service: true,
      lacquer_service: true,
      stopcar_service: false,
      fulloil_maintenance_service: true,
      semioil_maintenance_service: true,

      provider: 2,
      provider2: 2,
      provider_list: [],
      latitude: null,
      longitude: null,
      map: null,
      center: [121.4712313, 31.20001],
      marker: null
    }
  },
  created () {
    this.showTable()
    this.getProvince()
  },
  mounted () {
    console.log(AMap)
    const that = this
    this.map = new AMap.Map('addStoreMap', {
      zoom: 15,
      dragEnable: true,
      center: that.center
    })

    this.marker = new AMap.Marker({
      icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
      position: [0, 0]
    })

    this.map.on('click', this.clickMap)

    this.map.add(this.marker)
  },
  methods: {
    //点击地图事件
    clickMap (e) {
      window.console.log(e)
      this.longitude = e.lnglat.lng
      this.latitude = e.lnglat.lat
      this.map.remove(this.marker)
      this.marker = new AMap.Marker({
        icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
        position: [this.longitude, this.latitude]
      })
      this.map.add(this.marker)
    },
    //输入框回车事件
    enter (e) {
      if (e.keyCode == 13) {
        if (this.add_modal) {
          this.okAdd()
        } else if (this.edit_modal) {
          this.okEdit()
        }
      }
      
    },
    showAddModal () {
      // this.resetData()
      this.add_modal = true
      this.getProvider()
    },
    showTable () {
      this.$axios({
        url: "admin/stores",
        method: "POST",
        data: {
          token: this.token,
          page: this.page,
          offect: "20"
        }
      }).then(res => {
        console.log(res)
        if (res.data.code == 420 || res.data.code != 200) {
          this.$Message.warning('登录信息已过期，请重新登录')
          return
        }
        if (res.data.code == 200) {
          this.total = res.data.count
          this.data_list = res.data.data
        } else {
          this.$Message.error(res.data.msg)
        }
      }).catch(err => {
        this.$Message.error('登录信息已过期，请重新登录')
      })
    },
    edit (list) {
      // this.resetData()
      this.getProvider()
      this.editForm.name = list.name
      this.editForm.store_address = list.store_address
      this.editForm.province = list.province
      this.e_city = list.city
      this.editForm.city = list.city
      this.editForm.area = list.area

      this.wash_service = list.wash_service==0?false:true
      this.lacquer_service = list.lacquer_service==0?false:true
      this.stopcar_service = list.stopcar_service==0?false:true
      this.fulloil_maintenance_service = list.fulloil_maintenance_service==0?false:true
      this.semioil_maintenance_service = list.semioil_maintenance_service==0?false:true

      this.editForm.name = list.name
      this.editForm.store_address = list.store_address
      this.editForm.store_phone = list.store_phone 
      this.edit_modal = true
      this.id = list.id
      this.provider2 = list.store_provider * 1
      window.console.log(list)

      //根据省份获取所有城市
      this.province_list.forEach(item => {
        // console.log(item.name, list.province)
        if (item.name == list.province) {
          this.province_id2 = item.id

          this.$axios({
            url: "admin/city/all",
            method: "POST",
            data: {
              token: this.token,
              province_id: item.id
            }
          }).then(res => {
            if (res.data.code == 200) {
              this.city_list = res.data.city_list
              this.city_list.forEach(attr => {
                // console.log(attr.name, list.city)
                if (list.city == attr.name) {
                  this.city_id2 = attr.id

                  // 根据城市获取所有区县
                  this.$axios({
                    url: "admin/area/all",
                    method: "POST",
                    data: {
                      token: this.token,
                      city_id: attr.id
                    }
                  }).then(res => {
                    // console.log('区', res)
                    if (res.data.code == 200) {
                      this.area_list = res.data.district_list
                      console.log(this.area_list)
                      this.area_list.forEach(key => {
                        if (key.name == list.area) {
                          this.area_id2 = key.id
                          console.log(this.area_id2)
                        }
                      })
                    }
                  })
                }
              })
            }
          })
        }
      })
    },
    delete (list) {                     //确定删除
      // window.console.log(list)
      const that = this
      this.$Modal.confirm({
        title: "提示",
        content: "确定删除？",
        onOk () {
          this.$axios({
            url: "admin/store/del",
            method: "POST",
            data: {
              token: that.token,
              id: list.id
            }
          }).then(res => {
            // console.log(res)
            if (res.data.code == 200) {
              this.$Message.success(res.data.msg)
              that.showTable()
            } else {
              this.$Message.error(res.data.msg)
            }
          })
        }
      })
    },
    okAdd () {                          //确定添加
      this.$refs.addForm.validate(flag => {
        if (flag) {
          this.$axios({
            url: "admin/store/new",
            method: "POST",
            data: {
              token: this.token,
              name: this.addForm.name,
              store_address: this.addForm.store_address,
              store_phone: this.addForm.store_phone,
              province: this.addForm.province,
              city: this.addForm.city,
              area: this.addForm.area,
              longitude: this.longitude + "",
              latitude: this.latitude + "",

              wash_service: this.wash_service?1:0,
              fulloil_maintenance_service: this.fulloil_maintenance_service? 1:0,
              semioil_maintenance_service: this.semioil_maintenance_service?1:0,
              lacquer_service: this.lacquer_service? 1:0,
              stopcar_service: this.stopcar_service?1:0,

              store_provider: this.provider        //供应商
            }
          }).then(res => {
             if (res.data.code == 200) {
              this.$Message.success("新增成功")
              this.add_modal = false
              this.showTable()
            } else {
              this.$Message.warning(res.data.msg)
            }
          })
        } else {
          this.$Message.warning("信息填写不完整")
        }
      })
    },
    okEdit () {                         //确定编辑
      this.$refs.editForm.validate(flag => {
        if (flag) {
          this.$axios({
            url: "admin/store/update",
            method: "POST",
            data: {
              token: this.token,
              name: this.editForm.name,
              store_address: this.editForm.store_address,
              store_phone: this.editForm.store_phone,
              province: this.editForm.province,
              city: this.editForm.city,
              area: this.editForm.area,

              wash_service: this.wash_service?1:0,
              fulloil_maintenance_service: this.fulloil_maintenance_service? 1:0,
              semioil_maintenance_service: this.semioil_maintenance_service?1:0,
              lacquer_service: this.lacquer_service? 1:0,
              stopcar_service: this.stopcar_service?1:0,
              store_provider: this.provider2,
              id: this.id
            }
          }).then(res => {
            // console.log(res)
            if (res.data.code == 200) {
              this.$Message.success("修改成功")
              this.edit_modal = false
              this.showTable()
            } else {
              this.$Message.warning(res.data.msg)
            }
          })
        } else {
          this.$Message.warning('信息填写不完整')
        }
      })
    },
    changePage (e) {
      this.page = e
      this.showTable()
      document.getElementsByClassName("content-wrapper")[0].scrollTop = 0
    },
    resetData () {         //重置表单数据
      this.addForm = {
        province: "",
        city: '',
        area: "",
        name: "",
        store_address: "",
        store_phone: ""
      },
      
      this.wash_service = true
      this.lacquer_service = true
      this.stopcar_service = false
      this.fulloil_maintenance_service = true
      this.semioil_maintenance_service = true

      // this.province_id2 = "",
      // this.addForm
    },
    getProvince () {
      this.$axios({
        url: "admin/province/all",
        method: "POST",
        data: {
          token: this.token
        }
      }).then(res => {
        if (res.data.code == 200) {
          this.province_list = res.data.province_list
        } else {
          this.$Message.error(res.data.msg)
        }
      }).catch(err => {
        console.log(err)
        // this.$Message.error("网络错误，请稍后重试")
      })
    },
    choose_province (e) {
      // console.log(e)
      this.getLongAndLat()
      let id = e
      this.province_list.forEach(item => {
        if (item.id == e) {
          if (this.add_modal) {
            this.addForm.province = item.name
          } else if (this.edit_modal) {
            this.editForm.province = item.name
          }
        }
      })
      console.log(id)
      this.$axios({
        url: "admin/city/all",
        method: "POST",
        data: {
          token: this.token,
          province_id: id
        }
      }).then(res => {
        if (res.data.code == 200) {
          this.city_list = res.data.city_list
        } else {
          this.$Message.error(res.data.msg)
        }
      })
    },
    choose_city (e) {
      this.getLongAndLat()
      for (let i=0;i<this.city_list.length;i++) {
        if (this.city_list[i].id == e) {
          if (this.add_modal) {
            this.addForm.city = this.city_list[i]['name']
          } else if (this.edit_modal) {
            this.editForm.city = this.city_list[i]['name']
          }
          break
        }
      }
      this.$axios({
        url: "admin/area/all",
        method: "POST",
        data: {
          token: this.token,
          city_id: e
        }
      }).then(res => {
        // console.log('区', res)
        if (res.data.code == 200) {
          this.area_list = res.data.district_list
        } else {
          this.$Message.error(res.data.msg)
        }
      })
    },
    choose_area (e) {
      this.getLongAndLat()
      this.area_list.forEach(item => {
        if (e == item.id) {
          this.editForm.area = item.name
          this.addForm.area = item.name
        }
      })
    },
    //获取供应商
    getProvider () {
      this.$axios({
        url: "admin/stores/provider",
        method: "POST",
        data: {
          token: localStorage.getItem("jwt")
        }
      }).then(res => {
        // console.log(res)
        this.provider_list = res.data.data
      })
    },
    //获取经纬度
    getLongAndLat () {
      //可在此处判断是add 还是edit
      if (this.add_modal) {
        var address = this.addForm.province + "" + this.addForm.city + "" +this.addForm.area + "" + this.addForm.store_address
        this.$axios({
          url: "https://restapi.amap.com/v3/geocode/geo?&key=e3db0da3b984bd6dfdce30798b5edb34&address=" + address,
          method: "GET",
        }).then(res => {
          console.log(res)
          if (res.data.geocodes.length != 0) {
            let arr = res.data.geocodes[0].location.split(",")
            // console.log(arr)
            this.longitude = arr[0] * 1
            this.latitude = arr[1] * 1
            this.map.setCenter([this.longitude, this.latitude])
            this.map.remove(this.marker)
            this.marker = new AMap.Marker({
              icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
              position: [this.longitude, this.latitude]
            })
            this.map.add(this.marker)
          } else {
            this.longitude = "",
            this.latitude = ""
          }
        }).catch(err => {
          console.log(err) 
        })
      } else if (this.edit_modal) {}
    }
  }
}
</script>

<style>
.addStoreMapWrap {
  width: 80%;
  height: 200px;
  overflow: hidden;
  position: relative;
  border: solid #CCC 1px;
  margin: 30px auto;
}
#addStoreMap {
  width: 100%;
  height: 250px;
  position: absolute
}
.lola {
  position: absolute;
  left: 110px;
  top: -10px;
}
</style>