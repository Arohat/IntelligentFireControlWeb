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
                        :expand-on-click-node="false"
                        :render-content="renderContent">
                </el-tree>
            </div>
        </div>
    </div>
    <!--<el-button type="text" @click="open2">点击打开 Message Box</el-button>-->
</template>

<script>
    let id = 1000;
    export default {
        data() {
            const data = [{
                id: 1,
                label: '工程维修服务部7',
                children: [{
                    id: 4,
                    label: '测试下级',
                    children: [{
                        id: 9,
                        label: '测试三级'
                    }, {
                        id: 10,
                        label: '测试三级同级'
                    }]
                }]
            }, {
                id: 2,
                label: '案场管理服务部',
                children: [{
                    id: 5,
                    label: '测试二级'
                }, {
                    id: 6,
                    label: '测试下级2-2'
                }]
            }, {
                id: 3,
                label: '绿化管理服务部',
                children: [{
                    id: 7,
                    label: '绿化管理服务部二级'
                }, {
                    id: 8,
                    label: '绿化管理服务部二级'
                }]
            }];
            return {
                data4: JSON.parse(JSON.stringify(data)),
                data5: JSON.parse(JSON.stringify(data)),
                departmentName:'dddd'
            }
        },

        methods: {
            append(data) {
                const h = this.$createElement;
                this.$msgbox({
                    title: '部门',
                    message: h('p', null, [
                        h('el-input', { style: 'color: teal' }, 'VNode')
                    ]),
                    showCancelButton: true,
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    beforeClose: (action, instance, done) => {
                        if (action === 'confirm') {
                            instance.confirmButtonLoading = true;
                            instance.confirmButtonText = '执行中...';
                            setTimeout(() => {
                                done();
                                setTimeout(() => {
                                    instance.confirmButtonLoading = false;
                                }, 300);
                            }, 3000);
                        } else {
                            done();
                        }
                    }
                }).then(action => {
                    this.$message({
                        type: 'info',
                        message: 'action: ' + action
                    });
                });
                const newChild = { id: id++, label: '人力资源部', children: [] };
                if (!data.children) {
                    this.$set(data, 'children', []);
                }
                data.children.push(newChild);
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
                <el-button size="mini" type="text" on-click={ () => this.append(data) }>添加</el-button>
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
