<template>
  <div class="insurance">
    <Button style="margin-right: 5px;margin-bottom: 10px" type="info" @click="add_insurance">新增套餐</Button>

      <Modal
          v-model="modalAdd"
          :title="formtype"
          class-name="addInsuarance"
          @on-ok="addhandle"
      >
        <div class="formwrap">
          <Form ref="addinsurance" :rules="ruleValidate" :model="addinsurance">
            <FormItem label="保险公司" prop="ic_id" v-if="type == 0"> 
              <Select
                style="width: 250px"
                placeholder="请选择保险公司"
                @on-change="changeic_id"
              >
                <i-option v-for="(item, i) in allCompany" 
                  :key="i" :value="item.id"
                >{{item.name}}</i-option>
              </Select>
            </FormItem>
            
            <FormItem label="保险名称" prop="plan_name">
              <Input placeholder="请输入保险套餐名称" type="text" v-model="addinsurance.plan_name" style="width: 250px" @on-keyup='enter'></Input>
            </FormItem>
          <!-- </Form> -->

          <!-- <Form :model="addinsurance.service_quota" :rules="ruleValidate" ref="service_quota"> -->
            <FormItem label="代驾" prop="D1J1">
              <!-- <Input type="text" v-model="addinsurance.service_quota.D1J1" style="width: 250px"></Input> -->
              <Input placeholder="请输入次数" type="text" v-model="addinsurance.D1J1" style="width: 250px" @on-keyup='enter'></Input>
            </FormItem>
            
            <FormItem label="保养(半合成油)" prop="B1Y1">
              <Input placeholder="请输入次数" type="text" v-model="addinsurance.B1Y1" style="width: 250px" @on-keyup='enter'></Input>
              <!-- <Input type="text" v-model="addinsurance.service_quota.B1Y1" style="width: 250px"></Input> -->
            </FormItem>

            <FormItem label="保养(全合成油)" prop="B2Y2">
              <Input placeholder="请输入次数" type="text" v-model="addinsurance.B2Y2" style="width: 250px" @on-keyup='enter'></Input>
              <!-- <Input type="text" v-model="addinsurance.service_quota.B2Y2" style="width: 250px"></Input> -->
            </FormItem>

            <FormItem label="喷漆" prop="P1Q1">
              <Input placeholder="请输入次数" type="text" v-model="addinsurance.P1Q1" style="width: 250px" @on-keyup='enter'></Input>
              <!-- <Input type="text" v-model="addinsurance.service_quota.P1Q1" style="width: 250px"></Input> -->
            </FormItem>

            <FormItem label="进内机场接送" prop="JNJC">
              <Input placeholder="请输入次数" type="text" v-model="addinsurance.JNJC" style="width: 250px" @on-keyup='enter'></Input>
              <!-- <Input type="text" v-model="addinsurance.service_quota.JNJC" style="width: 250px"></Input> -->
            </FormItem>

            <FormItem label="境内高铁站接送" prop="JNGT">
              <Input placeholder="请输入次数" type="text" v-model="addinsurance.JNGT" style="width: 250px" @on-keyup='enter'></Input>
              <!-- <Input type="text" v-model="addinsurance.service_quota.JNGT" style="width: 250px"></Input> -->
            </FormItem>

            <FormItem label="待办年检" prop="DBNJ">
              <Input placeholder="请输入次数" type="text" v-model="addinsurance.DBNJ" style="width: 250px" @on-keyup='enter'></Input>
              <!-- <Input type="text" v-model="addinsurance.service_quota.DBNJ" style="width: 250px"></Input> -->
            </FormItem>

            <FormItem label="机场/高铁贵宾厅" prop="G1B1">
              <Input placeholder="请输入次数" type="text" v-model="addinsurance.G1B1" style="width: 250px" @on-keyup='enter'></Input>
              <!-- <Input type="text" v-model="addinsurance.service_quota.G1B1" style="width: 250px"></Input> -->
            </FormItem>

            <FormItem label="机场附近停车" prop="JCTC">
              <Input placeholder="请输入次数" type="text" v-model="addinsurance.JCTC" style="width: 250px" @on-keyup='enter'></Input>
              <!-- <Input type="text" v-model="addinsurance.service_quota.JCTC" style="width: 250px"></Input> -->
            </FormItem>

            <FormItem label="洗车" prop="X1C1">
              <Input placeholder="请输入次数" type="text" v-model="addinsurance.X1C1" style="width: 250px" @on-keyup='enter'></Input>
              <!-- <Input type="text" v-model="addinsurance.service_quota.X1C1" style="width: 250px"></Input> -->
            </FormItem>
          </Form>
        </div>
      </Modal>
    <Table
      :columns="columns" :data="data" style="margin-top: 10px"
    ></Table>
    <!-- 分页 -->
    <div style="text-align: right">
        <Page :total="dataCount" :page-size="offect" show-total class="paging" @on-change="changepage"></Page>
    </div>
  </div>
</template>

<script>
let that = null
export default {
  name: "insurance",
  data() {
    that = this
    return {
      data: [],
      type: 0,
      columns: [
        {title: "保险公司", key: "ic_name"},
        {title: "保险名称", key: "plan_name"},
        {title: "代驾", key: "代驾"},
        {title: "保养(半合成)", key: "保养(半合成油)"},
        {title: "保养(全合成)", key: "保养(全合成油)"},  
        {title: "喷漆", key: "喷漆"},
        {title: "境内机场接送", key: "境内机场接送"},
        {title: "境内高铁站接送", key: "境内高铁站接送"},
        {title: "待办年检", key: "待办年检"},
        {title: "机场/高铁贵宾厅", key: "机场/高铁贵宾厅"},
        {title: "机场附近停车", key: "机场附近停车"},
        {title: "洗车", key: "洗车"},
        {title: "操作", key: "按钮", 
          render (h, params) {
            return h("div", {
              style: {
                position: "relative"
              }
            }, [
              //编辑按钮
              h("Button", {
                props: {
                  type: "info",
                  size: 'small'
                },
                style: {
                  position: "absolute",
                  left: "-34px",
                  top: "-15px"
                },
                on: {
                  click: () => {
                    // console.log(that.edit)
                    that.edit(params.row)
                  }
                }
              }, "编辑"),

              //删除按钮
              h("Button", {
                props: {
                  type: "error",
                  size: "small"
                },
                style: {
                  position: "absolute",
                  left: "15px",
                  top: "-15px"
                },
                on: {
                  click: () => {
                    that.delete(params.row)
                  }
                }
              }, "删除")
            ])
          }
        },
      ],
      modalAdd: false,
      page: 1,
      offect: 20,
      dataCount: 0,
      token: localStorage.getItem("jwt"),
      ic_id: "2",
      addinsurance: {
        plan_name: "",
        ic_id: 3,
        "X1C1": "", //洗车
        "B1Y1": "", //保养(全合成)
        "B2Y2": "", //保养(半合成)
        "P1Q1": "", //喷漆
        "D1J1": "", //代驾
        "JNJC": "", //境内机场接送
        "JNGT": "", //进内高铁站接送
        "G1B1": "", //机场/高铁贵宾厅
        "JCTC": "", //机场附近停车
        "DBNJ": "", //代办年检
      },
      services: {},
      allCompany: [],
      formtype: "",
      plan_id: '',
      ruleValidate: {  //表单验证
        ic_id: [
          {required: true, message: "不能为空"}
        ],
        plan_name: [
          {required: true, message: "不能为空", trigger: "blur"}
        ],
        D1J1: [
          {required: true, message: "不能为空", trigger: "blur"},
          {type: 'string', pattern: /^\d+$/, message: '请输入数字', trigger: 'blur'}
        ],
        X1C1: [
          {required: true, message: "不能为空", trigger: "blur"},
          {type: 'string', pattern: /^\d+$/, message: '请输入数字', trigger: 'blur'}
        ],
        B1Y1: [
          {required: true, message: "不能为空", trigger: "blur"},
          {type: 'string', pattern: /^\d+$/, message: '请输入数字', trigger: 'blur'}
        ],
        B2Y2: [
          {required: true, message: "不能为空", trigger: "blur"},
          {type: 'string', pattern: /^\d+$/, message: '请输入数字', trigger: 'blur'}
        ],
        P1Q1: [
          {required: true, message: "不能为空", trigger: "blur"},
          {type: 'string', pattern: /^\d+$/, message: '请输入数字', trigger: 'blur'}
        ],
        JNJC: [
          {required: true, message: "不能为空", trigger: "blur"},
          {type: 'string', pattern: /^\d+$/, message: '请输入数字', trigger: 'blur'}
        ],
        D1J1: [
          {required: true, message: "不能为空", trigger: "blur"},
          {type: 'string', pattern: /^\d+$/, message: '请输入数字', trigger: 'blur'}
        ],
        JNGT: [
          {required: true, message: "不能为空", trigger: "blur"},
          {type: 'string', pattern: /^\d+$/, message: '请输入数字', trigger: 'blur'}
        ],
        G1B1: [
          {required: true, message: "不能为空", trigger: "blur"},
          {type: 'string', pattern: /^\d+$/, message: '请输入数字', trigger: 'blur'}
        ],
        JCTC: [
          {required: true, message: "不能为空", trigger: "blur"},
          {type: 'string', pattern: /^\d+$/, message: '请输入数字', trigger: 'blur'}
        ],
        DBNJ: [
          {required: true, message: "不能为空", trigger: "blur"},
          {type: 'string', pattern: /^\d+$/, message: '请输入数字', trigger: 'blur'}
        ]
      },
    }
  },
  created() {
    this.showTable()
    // this.get_all_serveice()
    this.get_ic_name()
  },
  
  methods: {
    enter (e) {
      if (e.keyCode == 13) {
        this.addhandle()
      }
    },
    //选择保险公司id
    changeic_id (e) {
      this.ic_id = e + ""
      this.addinsurance.ic_id = e
    },
    //获取展示数据
    showTable() {
      this.$axios({
        url: "admin/plan",
        method: "POST",
        data: {
          token: localStorage.getItem("jwt"),
          ic_id: localStorage.getItem("company_id"),
          page: this.page,
          offect: this.offect
        }
      }).then(res => {
        console.log(123,res)
        if (res.data.code == 420 || res.data.code != 200) {
          this.$Message.warning('登录信息已过期，请重新登录')
          return
        }
        if (res.data.code == 200) {
          
          if (res.data.data.length == 0 && this.page >= 2) {
              this.page--
              this.showTable()
          }

          let arr = res.data.data
          let bus = []
          arr.forEach((item, i) => {
            for (let attr in item) {
              bus[i] = Object.assign(item['show_plan_service_quota'],
                {ic_name: item.ic_name},
                {plan_name: item.plan_name, id: item.id}
              )
            }
          })
          // console.log("after", bus)
          // console.log("after", bus)
          this.data = bus
          this.dataCount = res.data.counts
        } else {
          this.$Message.error("网络错误，请重试")
        }
        
      }).catch(err => {
        console.log(err)
        this.$Message.error('登录信息已过期，请重新登录')
      })
    },
    //添加套餐
    add_insurance() {
      this.reset()
      this.formtype = "添加套餐"
      this.type = 0
      this.modalAdd = true;
    },
    //分页
    changepage (e) {
      this.page = e
      this.showTable()
      document.getElementsByClassName("content-wrapper")[0].scrollTop = 0
    },
    //编辑
    edit (item) {
      this.preview(item)
      this.formtype = "编辑套餐"
      this.type = 1
      this.modalAdd = true
      this.plan_id = item.id
      console.log(item)
      for (let i=0; i<this.allCompany.length;i++) {
        this.allCompany[i].name == item.ic_name ? this.addinsurance.ic_id = this.allCompany[i].id : null
      }
    },
    //删除
    delete (item) {
      this.$Modal.confirm({
        title: '删除',
        content: "确定删除？",
        onOk: () => {
          this.$axios({
            url: "admin/delete/plan",
            method: "POST",
            data: {
              token: this.token,
              plan_id: item.id,
              ic_id: localStorage.getItem("company_id")
            }
          }).then(res => {
            console.log(res)
            if (res.data.code == 200) {
              this.$Message.success('删除成功')
            } else {
              this.$Message.warning('删除失败')
            }
            this.showTable()
          }).catch((err) => {
            this.$Message.error("网络错误，请重试")
          })
        }
      })
    },
    preview (item) {
      this.addinsurance.plan_name = item.plan_name
      let services = this.addinsurance
      services.X1C1 = item["洗车"] + ""
      services.B1Y1 = item["保养(全合成油)"] + ""
      services.B2Y2 = item["保养(半合成油)"] + ""
      services.P1Q1 = item["喷漆"] + ""
      services.D1J1 = item["代驾"] + ""
      services.JNJC = item["境内机场接送"] + ""
      services.JNGT = item["境内高铁站接送"] + ""
      services.G1B1 = item["机场/高铁贵宾厅"] + ""
      services.JCTC = item["机场附近停车"] + ""
      services.DBNJ = item["待办年检"] + ""
    },
    //获取所有保险公司
    get_ic_name () {
      this.$axios({
        url: "/admin/all/company",
        method: "POST",
        data: {
          token: localStorage.getItem("jwt")
        }
      }).then(res => {
        // console.log(res)
        this.allCompany = res.data.data
      })
    },
    // 获取所有服务
    // get_all_serveice () {
    //   this.$axios({
    //     url: "admin/service/all",
    //     method: "POST",
    //     data: {
    //       token: localStorage.getItem("jwt")
    //     }
    //   }).then(res => {
    //     console.log(res)
    //     res.data.data.forEach(item => {
    //       let key = item["service_number"]
    //       this.addinsurance.service_quota[key] = ""
    //     })
    //   })
    // },
    //Modal确定
    addhandle () {
      const that = this
      this.$refs.addinsurance.validate(flag => {
        if (flag) {
          if (this.formtype == "添加套餐") {
                this.$axios({
                  url: "admin/add/plan",
                  method: "POST",
                  data: {
                    token: this.token,
                    ic_id: this.ic_id,
                    plan_name: this.addinsurance.plan_name,
                    // plan_id: this.plan_id,
                    // service_quota: this.addinsurance.service_quota
                    service_quota: {
                      // "X1C1": this.addinsurance.X1C1*1, //洗车
                      // "B1Y1": this.addinsurance.B1Y1*1, //保养(全合成)
                      // "B2Y2": this.addinsurance.B2Y2*1, //保养(半合成)
                      // "P1Q1": this.addinsurance.P1Q1*1, //喷漆
                      // "D1J1": this.addinsurance.D1J1*1, //代驾
                      // "JNJC": this.addinsurance.JNJC*1, //境内机场接送
                      // "JNGT": this.addinsurance.JNGT*1, //进内高铁站接送
                      // "G1B1": this.addinsurance.G1B1*1, //机场/高铁贵宾厅
                      // "JCTC": this.addinsurance.JCTC*1, //机场附近停车
                      // "DBNJ": this.addinsurance.DBNJ*1 //代办年检
                      "X1C1": that.addinsurance.X1C1, //洗车
                      "B1Y1": that.addinsurance.B1Y1, //保养(全合成)
                      "B2Y2": that.addinsurance.B2Y2, //保养(半合成)
                      "P1Q1": that.addinsurance.P1Q1, //喷漆
                      "D1J1": that.addinsurance.D1J1, //代驾
                      "JNJC": that.addinsurance.JNJC, //境内机场接送
                      "JNGT": that.addinsurance.JNGT, //进内高铁站接送
                      "G1B1": that.addinsurance.G1B1, //机场/高铁贵宾厅
                      "JCTC": that.addinsurance.JCTC, //机场附近停车
                      "DBNJ": that.addinsurance.DBNJ //代办年检
                    }
                  }
                }).then(res => {
                  // console.log(res)
                  if (res.data.code == 200) {
                    this.showTable()
                    this.$Message.success("添加成功")
                    this.modalAdd = false
                  } else {
                    this.$Message.error(res.data.msg)
                  }
                  // this.reset()
                }).catch(() => {
                  this.$Message.error("网络错误，请重试")
                })
              } else if (this.formtype == "编辑套餐") {
                this.$axios({
                  url: "admin/update/plan",
                  method: "POST",
                  data: {
                    token: this.token,
                    ic_id: localStorage.getItem("company_id"),
                    plan_name: this.addinsurance.plan_name,
                    plan_id: this.plan_id,
                    // service_quota: this.addinsurance.service_quota
                    service_quota: {
                      "X1C1": this.addinsurance.X1C1, //洗车
                      "B1Y1": this.addinsurance.B1Y1, //保养(全合成)
                      "B2Y2": this.addinsurance.B2Y2, //保养(半合成)
                      "P1Q1": this.addinsurance.P1Q1, //喷漆
                      "D1J1": this.addinsurance.D1J1, //代驾
                      "JNJC": this.addinsurance.JNJC, //境内机场接送
                      "JNGT": this.addinsurance.JNGT, //进内高铁站接送
                      "G1B1": this.addinsurance.G1B1, //机场/高铁贵宾厅
                      "JCTC": this.addinsurance.JCTC, //机场附近停车
                      "DBNJ": this.addinsurance.DBNJ //代办年检
                    }
                  }
                }).then(res => {
                  if (res.data.code == 400) {
                    this.$Message.error(res.msg)
                  } else if (res.data.code == 200) {
                    this.$Message.success("修改成功")
                    this.modalAdd = false
                    this.showTable()
                  }
                  
                }).catch(err => {
                  console.log(err)
                  this.$Message.error("网络错误，请重试")
                })
              }
        } else {
          this.$Message.warning('格式不正确')
        }
      })
    },
    reset () {
      // this.ic_id = "",
      // this.plan_id = "",
      // this.addinsurance = {
      //   plan_name: "",
      //   // ic_id: "", 
      //   "X1C1": "", //洗车
      //   "B1Y1": "", //保养(全合成)
      //   "B2Y2": "", //保养(半合成)
      //   "P1Q1": "", //喷漆
      //   "D1J1": "", //代驾
      //   "JNJC": "", //境内机场接送
      //   "JNGT": "", //进内高铁站接送
      //   "G1B1": "", //机场/高铁贵宾厅
      //   "JCTC": "", //机场附近停车
      //   "DBNJ": "", //代办年检
      // }
      this.addinsurance['X1C1'] = ''//洗车
      this.addinsurance['B1Y1'] = ''//保养(全合成)
      this.addinsurance['B2Y2'] = ''//保养(半合成)
      this.addinsurance['P1Q1'] = ''//喷漆
      this.addinsurance['D1J1'] = ''//代驾
      this.addinsurance['JNJC'] = ''//境内机场接送
      this.addinsurance['JNGT'] = ''//进内高铁站接送
      this.addinsurance['G1B1'] = ''//机场/高铁贵宾厅
      this.addinsurance['JCTC'] = ''//机场附近停车
      this.addinsurance['DBNJ'] = ''//代办年检
      this.addinsurance['plan_name'] = '' //保险名称
    }
  }
};
</script>

<style>
.ivu-table-cell{
  overflow: visible
}
.formwrap .ivu-form-item {
  display: flex;
  justify-content: flex-end;
  padding-right: 100px;
  box-sizing: border-box;
}
.addInsuarance {
  top: -50px;
}

</style>