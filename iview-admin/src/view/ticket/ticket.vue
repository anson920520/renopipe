<template>
    <div>
        <Button style="margin-right: 5px;margin-bottom: 10px" type="info" @click="add_ticket">导入第三方票券</Button>
        <!-- 上传文件 -->
        <Modal v-model="modalAdd" title="导入第三方票券">
            <Form>
                <FormItem label="选择csv文件">
                    <!-- <Upload action="https://www.acarepro.online/admin/get/csv" -->
                    <Upload :action="baseURL + 'admin/get/csv'"
                        ref="upload"
                        multiple
                        :format="['csv']"
                        :show-upload-list="true"
                        :before-upload="handleBeforUploadAdd"
                        :on-success="handleSuccessAdd"
                        :data="formData"
                    >
                        <Button type="primary" icon="ios-cloud-upload-outline">选择csv文件</Button>
                    </Upload>
                </FormItem>
            </Form>
            
        </Modal>
        <!-- 展示第三方票券 -->
        <Table :columns="columns" :data="ticket_list" style="margin-top: 10px"></Table>

        <!-- 分页 -->
        <div style="text-align: right">
            <Page :total="dataCount" :page-size="offect" show-total class="paging" @on-change="changepage"></Page>
        </div>
    </div>
</template>

<script>
export default {
    name: "ticket",
    data () {
        return {
            baseURL: window.baseURL,
            modalAdd: false,
            formData: {
                file: "",
                token: localStorage.getItem("jwt")
            },
            ticket_list: [],
            columns: [
                {title: "服务提供商", key: "sp_name"},
                {title: "服务名称", key: "service_name"},
                {title: "券码", key: "ticket_code"},
                {title: "是否使用", key: "is_used",render (h, params) {
                    // console.log(params)
                    return h("div",(params.row.is_used == 1? "已使用" : "未使用"))
                }},
            ],
            page: 1,
            offect: 20,
            dataCount: 0
        }
    },
    created () {
        this.tableShow()
    },
    methods: {
        uploadsuccess (e) {
            // console.log(e)
        },
        add_ticket () {
            this.modalAdd = true
        },
        // 获取票券数据
        tableShow () {
            const that = this
            this.$axios({
                url: "admin/tpc/all",
                method: "POST",
                data: {
                    token: localStorage.getItem("jwt"),
                    ic_id: localStorage.getItem("company_id"),
                    page: that.page,
                    offect: that.offect
                }
            }).then(res => {
                if (res.data.code == 420 || res.data.code != 200) {
                    this.$Message.warning('登录信息已过期，请重新登录')
                    return
                }
                that.dataCount = res.data.counts
                this.ticket_list = res.data.data
            }).catch(err => {
                this.$Message.error('登录信息已过期，请重新登录')
            })
        },
        handleBeforUploadAdd (file) {
            this.formData.file = file
        },
        handleSuccessAdd (res) {
            // console.log(res)
            this.modalAdd = false
            if(res["重复的券码列表"].length == 0) {
                this.$Message.success("上传成功")
            } else {
                this.$Message.error("重复的券码")
            }
            this.tableShow()
        },
        changepage (e) {
            this.page = e
            this.tableShow()
            document.getElementsByClassName("content-wrapper")[0].scrollTop = 0
        }
    },
    
}
</script>

<style>

</style>