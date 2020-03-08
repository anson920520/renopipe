<template>
  <div>
    <Button style="margin-right: 5px;margin-bottom: 10px" type="info" @click="add_poster">新增</Button>
    <Table v-if="adm1" :columns="columns1" :data="data1" style="margin-top: 10px"></Table>
    <Table v-if="adm2" :columns="columns2" :data="data1" style="margin-top: 10px"></Table>

    <!--新增-->
    <Modal
      v-model="modalAdd"
      title="新增"
      :width="400"
      @on-ok="okAdd('formAdd')"
      @on-cancel="cancelAdd"
      :loading="loadingAdd"
    >
      <Form :model="formAdd" :label-width="100" :rules="ruleValidateAdd" ref="formAdd">
        <FormItem label="姓名" prop="name">
          <Input v-model="formAdd.name" placeholder="请输入姓名" style="width:200px"></Input>
        </FormItem>
        <FormItem label="内容" prop="content">
          <Input v-model="formAdd.content" placeholder="请输入内容" style="width:200px"></Input>
        </FormItem>
        <FormItem label="图片" prop="img_url">

          <!-- <Upload action="https://www.acarepro.online/admin/upload/image1" -->

          <Upload :action="baseURL + 'admin/upload/image1'"
            ref="upload"
            :data="img_url"
            :multiple="true"
            :format="['jpg','jpeg','png']"
            :show-upload-list="false"
            :before-upload="handleBeforUploadAdd"
            :on-success="handleSuccessAdd"
          >
            <Button icon="ios-cloud-upload-outline">点击上传</Button>
          </Upload>
        </FormItem>
        <FormItem>
          <div
            style="width: 100px;height: 100px;border: 1px darkgrey solid;float: left;margin-right: 5px"
          >
            <img :src="formAdd.img_url" alt="请点击上传" style="width: 100px;height: 100px" />
          </div>
        </FormItem>
      </Form>
    </Modal>
    <!--修改-->
    <Modal
      v-model="modalChange"
      title="修改"
      :width="400"
      @on-ok="okChange('formChange')"
      @on-cancel="cancelChange"
      :loading="loadingChange"
    >
      <Form
        :model="formChange"
        :label-width="100"
        show-message
        :rules="ruleValidateChange"
        ref="formChange"
      >
        <FormItem label="姓名" prop="name">
          <Input v-model="formChange.name" placeholder="请输入姓名" style="width:200px"></Input>
        </FormItem>
        <FormItem label="内容" prop="content">
          <Input v-model="formChange.content" placeholder="请输入内容" style="width:200px"></Input>
        </FormItem>
        <FormItem label="图片" prop="img_url">
          <!-- :data="formAdd.img_url" -->
          <!-- <Upload action="https://www.acarepro.online/admin/upload/image1" -->
          <Upload :action="baseURL + 'admin/upload/image1'"
            ref="upload"
            :data="img_urlChange"
            :multiple="true"
            :format="['jpg','jpeg','png']"
            :show-upload-list="false"
            :before-upload="handleBeforUploadChange"
            :on-success="handleSuccessChange"
          >
            <Button icon="ios-cloud-upload-outline">点击上传</Button>
          </Upload>
        </FormItem>
        <FormItem>
          <div
            style="width: 100px;height: 100px;border: 1px darkgrey solid;float: left;margin-right: 5px"
          >
            <img :src="formChange.img_url" alt="请点击上传" style="width: 100px;height: 100px" />
          </div>
        </FormItem>
      </Form>
    </Modal>
    <!--//分页-->
    <div style="text-align: right">
      <Page
        :total="dataCount"
        :page-size="pageSize"
        show-total
        class="paging"
        @on-change="changepage"
      ></Page>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const validatePhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("手机号不能为空"));
      } else if (!/^1[34578]\d{9}$/.test(value)) {
        callback("手机号格式不正确");
      } else {
        callback();
      }
    };
    const validatePass = (rule, value, callback) => {
      // 此时便能打印value值查看
      // console.log(value,'打印值')
    };
    return {
      baseURL: window.baseURL,
      //新增
      ruleValidateAdd: {
        name: [
          {required: true, message: "姓名不能为空"}
        ],
        content: [
          {required: true, message: "内容不能为空"}
        ],
        img_url:[
          {required: true, message: "图片不能为空"}
        ]
      },
      modalAdd: false,
      loadingAdd: true,
      img_url: {
        // type:1,
        file: "",
        token: localStorage.getItem("jwt")
      },
      formAdd: {
        name: "",
        content: "",
        static_url: "",
        img_url: ""
      },
      //修改
      idChange: "",
      modalChange: false,
      ruleValidateChange: {
        name: [
          {required: true, message: "姓名不能为空"}
        ],
        content: [
          {required: true, message: "内容不能为空"}
        ],
        img_url:[
          {required: true, message: "图片不能为空"}
        ]
      },
      loadingChange: true,
      formChange: {
        name: "",
        content: "",
        static_url: "",
        img_url: ""
      },
      img_urlChange: {
        // type:1,
        file: "",
        token: localStorage.getItem("jwt")
      },
      // img1:'',
      adm1: false,
      adm2: false,
      //    分页
      ajaxHistoryData: [],
      // 初始化信息总条数
      dataCount: 5,
      // 每页显示多少条
      pageSize: 8,
      page: 1,
      columns1: [
        {
          title: "姓名",
          key: "name"
          // width: 100,
        },
        {
          title: "图片",
          key: "img_url",
          render: (h, params) => {
            return h("img", {
              style: {
                width: "80px"
              },
              attrs: {
                src: params.row.img_url,
                style: " width:'80px';height:80px"
              }
            });
          }
        },
        {
          title: "内容",
          key: "content"
        },
        {
          title: "操作",
          key: "action",
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "info",
                    size: "small"
                  },
                  style: {
                    marginRight: "5px",
                    marginBottom: "3px"
                  },
                  on: {
                    click: () => {
                      this.xiugai(params.row);
                    }
                  }
                },
                "修改"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "info",
                    size: "small"
                  },
                  style: {
                    marginRight: "5px",
                    marginBottom: "3px"
                  },
                  attrs: {
                    style: "background-color:#d6514d;border:1px solid #d6514d"
                  },
                  on: {
                    click: () => {
                      this.delete(params.row);
                    }
                  }
                },
                "删除"
              )
            ]);
          }
        }
      ],
      columns2: [
        {
          title: "姓名",
          key: "name"
          // width: 100,
        },
        {
          title: "图片",
          key: "img_url",
          render: (h, params) => {
            return h("img", {
              style: {
                width: "80px"
              },
              attrs: {
                src: params.row.img_url,
                style: " width:'80px';height:80px"
              }
            });
          }
        },
        {
          title: "内容",
          key: "content"
        }
      ],
      data1: [],
      start: 0,
      end: 8
    };
  },
  created() {
    this.tableShow();
    if (localStorage.getItem("role_id") == 3) {
      this.adm1 = false;
      this.adm2 = true;
    } else {
      this.adm1 = true;
      this.adm2 = false;
    }
  },
  methods: {
    //用户信息展示
    tableShow() {
      this.$axios({
        method: "post",
        url: "admin/ad/all",
        data: {
          token: localStorage.getItem("jwt")
        }
      })
        .then(res => {
          if (res.data.code == 420 || res.data.code != 200) {
            this.$Message.warning('登录信息已过期，请重新登录')
            return
          }
          // console.log(res,'用户信息')
          this.ajaxHistoryData = res.data.data;
          this.dataCount = res.data.data.length;
          // var d = new Date()
          // d = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
          // console.log(d)
          //时间格式转换
          // for (var i = 0; i < res.data.data.length; i++) {
          //   var d = new Date(res.data.data[i].booking_date)
          //   d = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
          //   res.data.data[i].booking_date = d
          // }
          // // 初始化显示，小于每页显示条数，全显，大于每页显示条数，取前每页条数显示
          if (res.data.data.length < this.pageSize) {
            // this.historyData = this.ajaxHistoryData;
            this.data1 = res.data.data;
          } else {
            this.data1 = this.ajaxHistoryData.slice(this.start, this.end);
            // console.log(this.data1)
          }
        })
        .catch(res => {
          // console.log(1212)
          this.$Message.error('登录信息已过期，请重新登录')
        });
    },
    //修改
    xiugai(row) {
      console.log(row);
      this.modalChange = true;
      // this.formItem = row
      this.idChange = row.id;
      this.formChange.content = row.content;
      this.formChange.name = row.name;
      this.formChange.img_url = row.img_url;
      // this.formChange = row.image_filename
    },
    handleBeforUploadChange(file) {
      // console.log(file)
      this.img_urlChange.file = file;
      // this.formItem.car_logo.type = file.type
      // this.imgChange = file.name
      // var index = file.name.lastIndexOf(".")
      // var fileChange = 6
      // this.formItem.car_logo[0].type = file.name.substring(index+1,file.name.length);
      // console.log(fileChange,'jdsfsnfjk')

      // const reader = new FileReader()
      // // console.log(reader.readAsDataURL)
      // reader.readAsDataURL(file)
      // reader.onload = () => {
      //   const _base64 = reader.result
      //   this.imgChange = _base64 //将_base64赋值给图片的src，实现图片预览
      //   this.formItem.car_logo[0].base64= _base64
      // }
      // return false//阻止图片继续上传，使得form表单提交时统一上传
    },
    handleSuccessChange(response) {
      console.log(response);
      // this.url = response.url
      this.formChange.img_url = response.img_url;
      this.formChange.static_url = response.static_url;
    },
    //确定修改
    okChange(formChange) {
      this.$refs[formChange].validate(valid => {
        if (valid) {
          this.$axios({
            method: "post",
            url: "admin/ad/update",
            data: {
              ad_id: this.idChange,
              name: this.formChange.name,
              content: this.formChange.content,
              img_url: this.formChange.img_url,
              static_url: this.formChange.static_url,
              token: localStorage.getItem("jwt")
            }
          })
            .then(res => {
              // console.log(res,'用户修改')
              this.modalChange = false;
              // this.fileChange = 1
              this.tableShow();
            })
            .catch(res => {
              this.$Message.error("请求超时,请稍后再试...");
            });
          // callback();
        } else {
          this.loadingChange = false;
          this.$nextTick(() => {
            this.loadingChange = true;
          });
          this.$Message.error("修改失败,请正确填写信息!");
        }
      });
      // this.tableShow()
    },
    cancelChange() {
      this.modalChange = false;
      this.tableShow();
      // this.$Message.info('Clicked cancel');
    },
    //新增
    add_poster() {
      this.modalAdd = true;
    },
    handleBeforUploadAdd(file) {
      // console.log(file)
      this.img_url.file = file;
      // var indexadd = file.name.lastIndexOf(".")
      // this.formAdd.type = file.name.substring(indexadd+1,file.name.length);

      // const reader = new FileReader()
      // // console.log(reader.readAsDataURL)
      // reader.readAsDataURL(file)
      // reader.onload = () => {
      //   const _base64add = reader.result
      //   this.imgAdd = _base64add //将_base64赋值给图片的src，实现图片预览
      //   this.formAdd.base64= _base64add
      // }
      // return false//阻止图片继续上传，使得form表单提交时统一上传
    },
    handleSuccessAdd(response) {
      console.log(response.img_url);
      this.formAdd.img_url = response.img_url;
      this.formAdd.static_url = response.static_url;
      // this.url = response.url
    },
    okAdd(formAdd) {
      // console.log('454')
      this.$refs[formAdd].validate(valid => {
        if (valid) {
          // console.log('454')
          this.$axios({
            method: "post",
            url: "admin/ad/add",
            data: {
              name: this.formAdd.name,
              content: this.formAdd.content,
              img_url: this.formAdd.img_url,
              static_url: this.formAdd.static_url,
              token: localStorage.getItem("jwt")
            }
          })
            .then(res => {
              // console.log(res,'用户修改')
              this.modalAdd = false;
              this.tableShow();
              this.formAdd = {};
              this.$Message.success("新增成功");
            })
            .catch(res => {
              this.$Message.error("请求超时,请稍后再试...");
            });
          // callback();
        } else {
          this.loadingAdd = false;
          this.$nextTick(() => {
            this.loadingAdd = true;
          });
          this.$Message.error("操作失败,请正确填写信息!");
        }
      });
      // this.tableShow()
    },
    cancelAdd() {
      this.modalAdd = false;
      // this.$Message.info('Clicked cancel');
    },
    //删除
    delete(row) {
      // console.log(row)
      this.$Modal.confirm({
        title: "删除",
        content: "确认删除该条信息吗？",
        onOk: () => {
          this.$axios({
            method: "post",
            url: "admin/ad/delete",
            data: {
              ad_id: row.id,
              token: localStorage.getItem("jwt")
            }
          })
            .then(res => {
              this.tableShow();
            })
            .catch(res => {
              this.$Message.warning({
                top: 50,
                duration: 4,
                content: "您的用户信息已过期，请重新登录"
              });
            });
        },
        onCancel: () => {
          this.$Message.info("取消");
        }
      });
    },
    //分页
    changepage(index) {
      // console.log(index,'分页')
      this.page = index;
      this.tableShow();
      var _start = (index - 1) * this.pageSize;
      var _end = index * this.pageSize;
      this.data1 = this.ajaxHistoryData.slice(_start, _end);
    }
  }
};
</script>

<style scoped>
</style>
