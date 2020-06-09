<template>
  <div>
    <div class="sb al">
      <div></div>
      <Button type="info" class="addBtn" @click="showAdd=true">新增地盤</Button>
    </div>
    <!-- 表格展示 -->
    <Table :columns="columns" :data="dataList" >
      <template slot-scope="{row}" slot="operation">
        <div>
          <Button size="small" class="editBtn" @click="edit(row)">編輯</Button>
          <Button size="small" type="error" @click="Delete(row)">刪除</Button>
        </div>
      </template>
    </Table>

    <!-- 新增 -->
    <Modal v-model="showAdd" 
      title="新增地盤">
      <Form :model="addForm" :rules='rule' :label-width="130">
        <FormItem label="地址" prop="address">
          <Input type="text" style="width: 250px;" v-model="addForm.address" />
        </FormItem>
        <div id="placeMap"></div>
      </Form>
    </Modal>

    <!-- 编辑 -->
    <Modal v-model="showEdit" 
      title="编辑地盤">
      <Form :model="editForm" :rules='rule' :label-width="130">
        <FormItem label="地址" prop="address">
          <Input type="text" style="width: 250px;" v-model="editForm.address" />
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
          key: "time"
        },
        {
          title: "地盤編號",
          key: "num"
        },
        {
          title: "地址",
          key: "address"
        },
        {
          title: "經度",
          key: "latitude"
        },
        {
          title: "緯度",
          key: "time"
        },
        {
          title: "緯度",
          key: "longitude"
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
      rule: {},
      addForm: {
        address: ""
      },
      editForm: {

      },
    }
  },
  created () {

  },
  mounted () {
    this.createMap()
  },
  methods: {
    edit (item) {
      console.log(item)
      this.showEdit = true
    },
    Delete (item) {
      console.log(item)
    },
    createMap () {
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
      
    }
  }
}
</script>

<style>
#placeMap,#placeMap2{
  width: 100%;
  height: 300px;
}
</style>