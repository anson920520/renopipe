<style>
.ivu-table-cell {
  overflow:visible !important;
}
.ivu-table {
  overflow:visible !important;
}
.giftImg {
  display: inline-block;
  margin-top: 10px;
  width: 130px;
  display: block;
  margin: auto;
}
.tableImg {
  width: 70px;
  height: 70px;
  /* border: solid #CCC 1px; */
  background-size: cover;
  background-position: center;
}
.bigImgsWrap {
  width: 430px;
  /* border: solid black 2px; */
  position: absolute;
  left: 130px;
  top:0;
  display: none;
  z-index: 1000;
  background: #CCC;
}
.tableImgWrap:hover .bigImgsWrap {
  display: block !important;
}
.imageItem {
  width: 200px;
  height: 200px;
  display: inline-block;
  margin: 5px;
  vertical-align: top;
  background-size: cover !important;
  background-position: center !important;
  /* border: solid red 1px; */
}



.imgWrap {
  border: solid #CCC 1px;
  width: 130px;
  /* height: 130px; */
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  display: inline-block;
  position: relative;
  margin: 5px;
}
.hideIcon {
  position: absolute;
  right: 0;
  top:0;
  width: 20px;
  height: 20px;
  border: solid rgb(172, 154, 154) 1px;
  /* border-radius: 50%; */
  color: rgb(199, 165, 165);
  display:flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  opacity: 0
}
.imgWrap:hover .hideIcon {
  opacity: 1 !important;
}
.tableImgWrap {
  /* border: solid black 1px; */
  position: relative;
}
</style>

<template>
  <div>
    <Button type="info" @click="showAdd=true">新增記錄</Button>
    <!-- 表格 -->
    <Table :data='dataList' :columns="columns"></Table>
    <!-- 分页器 -->
    <div style="text-align: right;margin-bottom: 500px;">
      <Page :total="count" :page-size="offect" show-total class="paging" @on-change="changepage"></Page>
    </div>

    <!-- 新增 -->
    <Modal v-model="showAdd" @on-ok="okAdd" title="新增">
      <Form ref="addForm" :rules='rule' :model="addForm" :label-width='120'>
        <FormItem prop="news_title" label="標題">
          <Input type="text" @on-keyup.enter="okAdd" v-model="addForm.news_title" placeholder="請輸入標題" :maxlength="30" style="width:250px;" />
        </FormItem>

        <FormItem prop="tag" label="類別">
          <Input type="text" @on-keyup.enter="okAdd" v-model="addForm.tag" placeholder="請輸入類別" :maxlength="30" style="width:250px;" />
        </FormItem>

        <FormItem prop="link" label="鏈接">
          <Input type="text" @on-keyup.enter="okAdd" v-model="addForm.link" placeholder="請輸入鏈接" style="width:250px;" />
        </FormItem>

        <FormItem prop="description" label="描述">
          <textarea type="text" @keydown.enter="okAdd" v-model="addForm.description" placeholder="請輸入描述" style="width:250px;height:120px;" ></textarea>
        </FormItem>

        <FormItem label="狀態" >
          <RadioGroup v-model="addForm.status">
            <Radio label="1">狀態一</Radio>
            <Radio label="2">狀態二</Radio>
          </RadioGroup>
        </FormItem>

        <FormItem label='图片' prop="image">
          <Upload :action="baseURL + 'admin/upload/image4'"
            :on-success="okUpload"
            :data='upLoadData'
            :multiple="true"
            :before-upload="before"
            :show-upload-list='true'>
            <Button type='info'>點擊選擇圖片(可多選)</Button>
          </Upload>
          <br />
          <div class="imgWrap" v-for="(item, i) in addForm.image" :key="i"> 
            <div class="hideIcon" @click="deleteImg('addForm', i)">×</div>
            <img :src="item" class="giftImg" />
          </div>
        </FormItem>
      </Form>
    </Modal>

    <!-- 編輯 -->
    <Modal v-model="showEdit" @on-ok="okEdit" title="編輯">
      <Form ref="editForm" :rules='rule' :model="editForm" :label-width='120'>
        <FormItem prop="news_title" label="標題">
          <Input type="text" @on-keydup.enter="okEdit" v-model="editForm.news_title" placeholder="請輸入標題" :maxlength="30" style="width:250px;" />
        </FormItem>

        <FormItem prop="tag" label="類別">
          <Input type="text" @on-keyup.enter="okEdit" v-model="editForm.tag" placeholder="請輸入類別" :maxlength="30" style="width:250px;" />
        </FormItem>

        <FormItem prop="link" label="鏈接">
          <Input type="text" @on-keyup.enter="okEdit" v-model="editForm.link" placeholder="請輸入鏈接" style="width:250px;" />
        </FormItem>

        <FormItem prop="description" label="描述">
          <textarea type="text" @keydown.enter="okEdit" v-model="editForm.description" placeholder="請輸入描述" style="width:250px;height:120px;" ></textarea>
        </FormItem>

        <FormItem label="狀態" >
          <RadioGroup v-model="status">
            <Radio label="1">狀態一</Radio>
            <Radio label="2">狀態二</Radio>
          </RadioGroup>
        </FormItem>

        <FormItem label='图片' prop="image">
          <Upload :action="baseURL + 'admin/upload/image4'"
            :on-success="okUpload2"
            :data='upLoadData'
            :show-upload-list='true'>
            <Button type='info'>點擊選擇圖片(可多選)</Button>
          </Upload>
          <!-- <img v-if="editForm.image" :src="editForm.image" class="giftImg" /> -->
          <div v-for="(item, i) in editForm.image" :key="i" class="imgWrap">
            <div class="hideIcon"  @click="deleteImg('editForm', i)">×</div>
            <img :src="item" class="giftImg" />
          </div>
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>

<script>
  export default {
    data () {
      const that = this
      return {
        showAdd: false,
        showEdit: false,
        page: 1,
        offect: 20,
        dataList: [],
        count: 0,
        addForm: {
          description: "",
          image: [],
          link: "",
          news_title: "",
          status: "1",
          tag: ""
        },
        editForm: {
          description: "",
          image: [],
          link: "",
          news_title: "",
          status: "1",
          tag: "",
        },
        id: "",
        status: "",
        baseURL: window.baseURL,
        upLoadData: {token: localStorage.getItem('jwt'), file: ""},
        rule: {
          description: [
            {required: true, message: "不能爲空", trigger: "blur"}
          ],
          news_title: [
            {required: true, message: "不能爲空", trigger: "blur"}
          ],
          link: [
            {required: true, message: "不能爲空", trigger: "blur"}
          ],
          tag: [
            {required: true, message: "不能爲空", trigger: "blur"}
          ],
          image: [
            {required: true, message: "不能爲空"}
          ]
        },

        columns: [
          {title: "標題", key: "news_title"},
          {title: "時間", key: "post_date"},
          {title: "圖片", key: "image",
            render: (h, params) => {
              return h(
                "div",
                {
                  class: "tableImgWrap"
                },
                [
                  h(
                    'div',
                    {
                      class: "tableImg",
                      style: {
                        backgroundImage: "url(" + params.row.image[0] + ")"
                      },
                    }
                  ),
                  h(
                    'div',
                    {
                      class: "bigImgsWrap"
                    }
                  ),
                ]
              )
            }
          },
          {title: "鏈接", key: "link"},
          {title: "status", key: "status"},
          {title: "類別", key: "tag"},
          {title: "描述", key: "description"},
          {title: "操作",align: 'center',
            render: (h, params) => {
              return h(
                "div",
                [
                  h("Button",
                    {
                      props: {
                        type:'info',
                        size: "small"
                      },
                      on: {
                        click: () => {that.edit(params.row) }
                      }
                    },
                    '编辑'
                  ),
                  h("Button",
                    {
                      props: {
                        type: "error",
                        size: "small"
                      },
                      on: {
                        click: () => {that.delete(params.row)}
                      },
                      style: {
                        "margin-left": "7px"
                      }
                    },
                    "删除"
                  )
                ]
              )
            }
          }
        ]
      }
    },
    created () {
      this.showTable()
    },
    methods: {
      edit (list) {
        console.log(list)
        this.showEdit = true
        this.editForm.description = list.description
        this.editForm.news_title = list.news_title
        this.editForm.image = [...list.image]
        this.editForm.link = list.link
        this.editForm.status = list.status + ""
        this.editForm.tag = list.tag
        this.id = list.id
        this.status = list.status + ""
      },
      delete (list) {
        console.log(list)
        this.$Modal.confirm({
          title: '删除',
          content: "確定刪除",
          onOk: () => {
            this.$axios({
              url: "admin/cms/news/delete",
              method: "DELETE",
              data: {
                token: localStorage.getItem("jwt"),
                id: list.id
              }
            }).then(res => {
              console.log(res)
              if (res.data.code == 200) {
                this.$Message.success('刪除成功')
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
      okAdd () {
        const that = this
        this.$refs.addForm.validate(flag => {
          if (flag) {
            that.$axios({
              url: "admin/cms/news/create",
              method: "POST",
              data: {
                description: this.addForm.description,
                image: this.addForm.image,
                link: this.addForm.link,
                news_title: this.addForm.news_title,
                status: this.addForm.status,
                tag: this.addForm.tag,
                token: localStorage.getItem("jwt")
              }
            }).then(res => {
              console.log("新增", res)
              if (res.data.code == 200) {
                that.$Message.success("新增成功")
                that.showAdd = false
                that.showTable()
                this.addForm = {
                  description: "",
                  image: [],
                  link: "",
                  news_title: "",
                  status: "1",
                  tag: ""
                }
              } else {
                that.$Message.warning(res.data.msg)
              }
            }).catch(err => {
              that.$Message.error('网络错误')
            })
          } else {
            that.$Message.warning('格式不正确')
          }
        })
      },
      okEdit () {
        const that = this
        this.$refs.editForm.validate(flag => {
          if (flag) {
            this.$axios({
              url: "admin/cms/news/edit",
              method: "PUT",
              data: {
                description: this.editForm.description,
                news_title: this.editForm.news_title,
                tag: this.editForm.tag,
                image: this.editForm.image,
                link: this.editForm.link,
                status: this.status,
                id: this.id,
                token: localStorage.getItem('jwt')
              }
            })
            .then(res => {
              console.log('编辑', res)
              if (res.data.code == 200) {
                that.$Message.success('修改成功')
                that.showTable()
                that.showEdit = false
              } else {
                that.$Message.warning(res.data.msg)
              }
            }).catch(err => {
              that.$Message.error("网络错误")
            })
          } else {
            that.$Message.warning("格式错误")
          }
        })
      },
      // 獲取所有
      showTable () {
        this.$axios({
          // url: "admin/cms/news/all?page=" + this.page + 
          // "&offect=" + this.offect + "&token=" + localStorage.getItem('jwt'),
          url: "admin/cms/news/all",
          method: "GET",
          headers: {
            token: localStorage.getItem('jwt')
          },
          params: {
            // token: localStorage.getItem("jwt"),
            page: this.page,
            offect: this.offect
          }
        }).then(res => {
          console.log(res)
          if (res.data.code == 200) {
          //删除最后一条，自动返回上一页
          if (res.data.data.length == 0 && this.page >= 2) {
              this.page--
              this.showTable()
          }
          this.dataList = res.data.data
          this.count = res.data.count

          // 根据数据生成hover后出现的图片
          setTimeout(() => {
            // console.log(this.dataList)
            this.dataList.forEach((item, i) => {
              let oWrap = document.getElementsByClassName('bigImgsWrap')[i]
              console.log(oWrap)
              item.image.forEach(attr => {
                oWrap.innerHTML += `
                  <div class="imageItem" style="background: url('${attr}') no-repeat"></div>
                `
              })
              
            }) 
          }, 1000)
          

        } else {
          this.$Message.warning(res.data.msg)
        }
        }).catch(err => {
          this.$Message.error('網絡錯誤')
        })
      },
      //點擊分頁
      changepage (e) {
        this.page = e
        this.showTable()
        document.getElementsByClassName("content-wrapper")[0].scrollTop = 0
      },
      okUpload (res) {
        console.log(res)
        // console.log(res.img_url)
        if (res.code == 200) {
          this.addForm.image.push(res.img_url[0])
        }
      },
      okUpload2 (res) {
        if (res.code == 200) {
          this.editForm.image.push(res.img_url[0])
        }
      },
      before (file) {
        // console.log(file)
      },
      deleteImg (form, i) {
        console.log(this[form])
        this[form].image.splice(i,1)
      }
    }
  }
</script>