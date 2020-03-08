<template>
    <div>
        <Button style="margin-left: 10px;margin-right: 5px" type="info" @click="showAdd">新增保险公司</Button>
        
        <Table
        :columns="columns"
        style="marginTop: 10px"
        :data="data_list"></Table>

    <!-- 分页器 -->
        <div style="text-align: right">
            <Page
                :total="count"  
                :page-size="20" 
                :current.sync="page" 
                show-total
                @on-change="changePage"
            ></Page>
        </div>

        <Modal
            v-model="add"
            title="新增保险公司"
            :width="400"
            @on-ok="okAdd('addForm')">
            <Form :model="addForm" :label-width="100" :rules="rule" ref="addForm" class="Form">

                <FormItem label="省份">
                    <Select v-model="province_id" style="width:200px" @on-change="changeProvince">
                        <Option v-for="item in province_list" :value="item.id" :key="item.id">{{ item.name}}</Option>
                    </Select>
                </FormItem>

                <FormItem label="城市">
                    <Select v-model="city_id" style="width:200px">
                        <Option v-for="item in city_list" :value="item.id" :key="item.id">{{ item.name}}</Option>
                    </Select>
                </FormItem>
                <FormItem label="保险公司名称" prop="name">
                    <Input v-model="addForm.name" placeholder="'请输入保险公司名称" style="width:200px" @on-keyup="enter"></Input>
                </FormItem>
                <FormItem label="保险公司地址" prop="address">
                    <Input v-model="addForm.address" placeholder="'请输入保险公司地址" style="width:200px" @on-keyup="enter"></Input>
                </FormItem>
                <!-- <FormItem label="用户名" prop="username" v-if="type == 0">
                    <Input v-model="addForm.username" style="width:200px"></Input>
                </FormItem>
                <FormItem label="密码" prop="password" v-if="type == 0">
                    <Input type="password" v-model="addForm.password" style="width:200px"></Input>
                </FormItem> -->
                
            </Form>
        </Modal>
    </div>
</template>

<script>
export default {
    data () {
        const that = this
        return {
            type: 0,     //0 为add   1为edit
            add: false,
            page: 1,
            count: 0,
            data_list: [],
            province_list: [],
            province_id: 9,
            city_id: 73,
            city_list: [],
            showCity: [],
            columns: [
                {
                    title:"公司",
                    key:"name"
                },
                {
                    title: "省份",
                    key: "province_name"
                },
                {
                    title: "城市",
                    key: "city_name",
                },
                {
                    title:"地址",
                    key: "address"
                },
                {
                    title: "操作",
                    align: "center",
                    render: (h, params) => {
                        return h(
                            "div",{},
                            [
                                h(
                                "Button",
                                {
                                    props: {
                                        type: "primary",
                                        size: "small"
                                    },
                                    style: {
                                     margin: "5px"
                                    },
                                    on: {
                                        click: () => {
                                            that.edit(params.row)
                                        }
                                    }
                                },
                                '编辑'
                                ),
                                h(
                                "Button",
                                {
                                    props: {
                                        type: "error",
                                        size: "small"
                                    },
                                    style: {
                                     margin: "5px"
                                    },
                                    on: {
                                        click: () => {
                                            that.delete(params.row)
                                        }
                                    }
                                },
                                '删除'
                                ),
                            ]
                        )
                    }
                }
            ],
            addForm: {
                name: "",
                address: "",
                username: "",
                password: ""
            },
            rule: {
                name: [
                    {required: true, message: "保险公司名称不能为空", trigger: "blur"}
                ],
                address: [
                    {required: true, message: "保险公司地址不能为空", trigger: "blur"}
                ],
                username: [
                    {required: true, message: "保险公司名称不能为空", trigger: "blur"}
                ],
                password: [
                    {required: true, message: "保险公司地址不能为空", trigger: "blur"}
                ]
            },
            id: null
        }
    },
    created () {
        this.showTable()
        this.getProvince()
        this.changeProvince(9)
    },
    methods: {
        showTable () {
            this.$axios({
                url: "admin/all/company",
                method: "POST",
                data: {
                    page: this.page,
                    offect: 20,
                    token: localStorage.getItem("jwt")
                }
            }).then(res => {
                console.log(res)
                if (res.data.code == 420 || res.data.code != 200) {
                    this.$Message.warning('登录信息已过期，请重新登录')
                    return
                }
                this.data_list = res.data.data
                // 当一页只有一条，删掉后自动返回上一页
                if (res.data.data.length == 0 && this.page >= 2) {
                    this.page--
                    this.showTable()
                }
                this.count = res.data.count
            }).catch(err => {
                console.log(err)
                this.$Message.warning('登录信息已过期，请重新登录')
            })
        },
        showAdd () {
            this.changeProvince(9)
            this.add = true
            this.type = 0
            this.province_id = 9
            this.city_id = 73
            this.addForm = {
                name: "",
                address: "",
                username: "",
                password: ""
            }
            //此处需要异步重复赋值多次，来解决不显示默认城市的问题
            setTimeout(() => {this.city_id = 73},10)
            setTimeout(() => {this.city_id = 73},10)
        },
        okAdd (form) {
            if (this.type == 0) {
                this.$refs[form].validate(flag => {
                    if (flag) {
                        this.$axios({
                            url: "admin/company/add",
                            method: "POST",
                            data: {
                                name: this.addForm.name,
                                address: this.addForm.address,
                                province: this.province_id,
                                city: this.city_id,
                                // is_username: this.addForm.username,
                                // is_password: this.addForm.password,
                                token: localStorage.getItem('jwt')
                            }
                        }).then(res => {
                            // console.log(res)
                            if (res.data.code == 400) {
                            //原密码不正确 || 修改失败
                                this.$Message.error(res.data.msg)
                            } else if (res.data.code == 200 && res.data.msg != "保险公司添加失败") {
                                this.$Message.success(res.data.msg)
                                this.showTable()
                                this.add = false
                            } else {
                                this.$Message.warning(res.data.msg)
                            }
                        })
                    } else {
                        this.$Message.error('信息填写不完整')
                    }
                })
            } else {
                this.$refs[form].validate(flag => {
                    if (flag) {
                        this.$axios({
                            url: "admin/company/updata",
                            method: "POST",
                            data: {
                                name: this.addForm.name,
                                address: this.addForm.address,
                                province: this.province_id,
                                city: this.city_id,
                                id: this.id,
                                token: localStorage.getItem('jwt')
                            }
                        }).then(res => {
                            // console.log(res)
                            if (res.data.code == 400) {
                                this.$Message.error(res.data.msg)
                            } else if (res.data.code == 200) {
                                this.$Message.success("修改成功")
                                this.add = false
                                this.showTable()
                            }
                        })
                    } else {
                        this.$Message.error('信息填写不完整')
                    }
                })
            }
        },
        edit (list) {
            console.log(list)
            this.type = 1
            this.id = list.id
            this.add = true
            this.addForm.name = list.name
            this.addForm.address = list.address
            this.province_id = list.province
            this.city_id = list.city
            setTimeout(() => {
                this.city_id = list.city
            },10)
            this.changeProvince(list.province)
        },
        delete (list) {
            this.$Modal.confirm({
                title: "提示",
                content: "确定删除？",
                onOk: () => {
                    this.$axios({
                        url: "admin/company/delete",
                        method: "POST",
                        data: {
                            token: localStorage.getItem("jwt"),
                            id: list.id
                        }
                    }).then(res => {
                        // console.log(res)
                        if (res.data.code == 200) {
                            this.showTable()
                            this.$Message.success(res.data.msg)
                        } else {
                            this.$Message.error(res.data.msg)
                        }
                    })
                }
            })
        },
        changePage (e) {                      //修改当前页数
            this.page = e
            this.showTable()
            document.getElementsByClassName("content-wrapper")[0].scrollTop = 0
        },
        getProvince () {
            this.$axios({
                url: "admin/province/all",
                method: "POST",
                data: {
                    token: localStorage.getItem("jwt")
                }
            }).then(res => {
                this.province_list = res.data.province_list
            })
        },
        changeProvince (e) {
            this.$axios({
                url: "admin/city/all",
                method: "POST",
                data: {
                    token: localStorage.getItem("jwt"),
                    province_id: e
                }
            }).then(res => {
                this.city_list = res.data.city_list
            })
        },
        enter (e) {
            if (e.keyCode == 13) {
                this.okAdd('addForm')
            }
        }
    }
}
</script>

<style>

</style>