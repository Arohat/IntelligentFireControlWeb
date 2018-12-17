<template>
	<div>
	<el-breadcrumb separator-class="el-icon-arrow-right">
			<el-breadcrumb-item :to="{ path: '/manage' }">基础管理</el-breadcrumb-item>
			<el-breadcrumb-item>部门管理</el-breadcrumb-item>
	</el-breadcrumb>
	<el-form :inline="true" size="mini" class="demo-form-inline">
			<el-form-item>
				<el-button type="primary" icon="el-icon-tickets" @click="departmentList">列表展示</el-button>
			</el-form-item>
	</el-form>
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
    </div>
</div>
</template>

<script>
    let id = 1000;
    import api from '@/api/api'
    export default {
        data() {
            const data = [];
            return {
                data4: JSON.parse(JSON.stringify(data)),
                //data5: JSON.parse(JSON.stringify(data)),
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
		created: function() {
			this.$http2.get(api.departmentTree, {
					})
					.then(data => {
						this.data4 = data.data;
					}).catch(() => {
						console.log("初始化部门数据失败");
					});
		},
        methods: {
        	departmentList(){
        		this.$router.push({path: '/departmentManagement'});
        	},
            getDictionarytTree(){
//_____________________________________________________
                let query = {};
                this.$http2.post("/sys/getTree", query)
                    .then(data => {
                        this.data4 = data.data;
                    }).catch(()=>{
                    console.log("获取树失败");
                });
            },
            //部门添加
            appendEvent(s,d,n) {
                /*this.dialogFormVisible = true;
                this.triggerCurrenNodeData = d;
                this.triggerCurrenNode = n;*/
               this.$router.push({path: '/departmentAdd'});
            },
            //部门编辑
			departmentEdit(row) {
				this.$router.push({
					path: '/departmentEdit',
					query: {
						row: row
					},
				});
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
                        if (res.statusCode === 200) {
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
            //部门删除
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
            //部门禁用Prohibit
            prohibit(data) {
                this.$confirm('此操作将禁用该部门, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '禁用成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消禁用'
                    });
                });
            },
            renderContent(h, { node, data, store }) {
                return (
                    <span class="custom-tree-node">
                    <span>{node.label}</span>
                <span>
                <el-button size="mini" type="text" on-click={ () => this.appendEvent(store,data,node) }>添加</el-button>
                <el-button size="mini" type="text" on-click={ () => this.departmentEdit(data) }>修改</el-button>
               	<el-button size="mini"  type="text" on-click={ () => this.prohibit(node, data) }>禁用</el-button>
               	<el-button size="mini"  type="text" on-click={ () => this.prohibit(node, data) }>启用</el-button>
                <el-button size="mini" type="text" on-click={ () => this.remove(node, data) }>删除</el-button>
                </span>
                </span>);
            }
        }
    };
</script>

<style lang='less'>
	.demo-form-inline {
		.el-form-item__label {
			font-size: 12px;
		}
	}
	
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
