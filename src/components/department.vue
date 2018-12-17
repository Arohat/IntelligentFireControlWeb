<template>
    <div class="container-form">
        <div class="custom-tree-container">
            <div class="block">
                <p>部门管理树形结构</p>
                <el-tree
                        :data="data4"
                        show-checkbox
                        node-key="id"
                        default-expand-all
                        :props="defaultProps"
                        :expand-on-click-node="false"
                        :render-content="renderContent">
                </el-tree>
            </div>
        </div>
        <el-dialog title="部门名称" :visible.sync="dialogFormVisible">
            <el-form>
                <el-form-item  style="width: 100%;">
                    <el-input v-model="departmentName" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="addEventFormSubmitBtn">确 定</el-button>
            </div>
        </el-dialog>
    </div>

</template>

<script>
    let id = 1000;
    export default {
        data() {
            const data = [{
                id: 1,
                name: '工程维修服务部7',
                children: [{
                    id: 4,
                    name: '测试下级',
                    children: [{
                        id: 9,
                        name: '测试三级'
                    }, {
                        id: 10,
                        name: '测试三级同级'
                    }]
                }]
            }, {
                id: 2,
                name: '案场管理服务部',
                children: [{
                    id: 5,
                    name: '测试二级'
                }, {
                    id: 6,
                    name: '测试下级2-2'
                }]
            }, {
                id: 3,
                name: '绿化管理服务部',
                children: [{
                    id: 7,
                    name: '绿化管理服务部二级'
                }, {
                    id: 8,
                    name: '绿化管理服务部二级'
                }]
            }];
            return {
                data4: JSON.parse(JSON.stringify(data)),
                data5: JSON.parse(JSON.stringify(data)),
                departmentName:'',
                dialogTableVisible: false,
                dialogFormVisible: false,
                newChild:[],
                /*触发的当前的节点，放到全局，方便调用*/
                triggerCurrenNodeData:{},
                /*触发的当前节点*/
                triggerCurrenNode:{},
                defaultProps: {
                    children: 'children',
                    label: 'name'
                }
            }
        },

        methods: {
            getDictionarytTree(){
//                接口调通后删除此部分
                const treeData = [{
                    id: 1,
                    name: '工程维修服务部7',
                    children: [{
                        id: 4,
                        name: '测试下级',
                        children: [{
                            id: 9,
                            name: '测试三级'
                        }, {
                            id: 10,
                            name: '测试三级同级'
                        }]
                    }]
                }];
                this.data4=treeData;
//_____________________________________________________
                let query = {};
                this.$http2.post("/sys/getTree", query)
                    .then(data => {
                        this.data4 = data.data;
                    }).catch(()=>{
                    console.log("获取树失败");
                });
            },
            appendEvent(s,d,n) {
                this.dialogFormVisible = true;
                this.triggerCurrenNodeData = d;
                this.triggerCurrenNode = n;
            },
            addEventFormSubmitBtn(formname){
                let dataPost={
                    label: this.departmentName.trim(),
                    parentId: this.triggerCurrenNodeData.id,  //当前节点id
                    depth: this.triggerCurrenNode.level, //当前节点层级
                };
//                接口调通后删除
                this.getDictionarytTree();
                this.dialogFormVisible = false;
                this.departmentName = '';
//                ____________________
                this.$http('post', '/api/***/****', {queryParams: dataPost})
                    .then((res) => {
                        if (res.statusCode ==0) {
                            this.dialogFormVisible = false;
                            this.departmentName = '';
                            /*刷新树形菜单*/
                            this.getDictionarytTree();
                        }
                    })
                    .catch((e) => {
                        console.log('请求失败', e)
                    })
            },

            remove(node, data) {
                this.$confirm('此操作将删除该部门, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    const parent = node.parent;
                    const children = parent.data.children || parent.data;
                    const index = children.findIndex(d => d.id === data.id);
                    children.splice(index, 1);
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },

            renderContent(h, { node, data, store }) {
                return (
                    <span class="custom-tree-node">
                    <span>{node.label}</span>
                <span>
                <el-button size="mini" type="text" on-click={ () => this.appendEvent(store,data,node) }>添加</el-button>
                <el-button size="mini" type="text" on-click={ () => this.remove(node, data) }>删除</el-button>
                </span>
                </span>);
            }
        }
    };
</script>

<style lang='less'>
    .container-form {
        background: #fff;
        padding: 20px;
    }
    .custom-tree-node {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 14px;
        padding-right: 50px;
    }
    .demo-form-inline {
        background: #fff;
        margin: 15px 0;
        padding: 15px;
    }

    .el-pagination {
        text-align: right;
    }
</style>
