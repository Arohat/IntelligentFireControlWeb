<template>
    <div class="container-form">
        <div class="custom-tree-container">
            <div class="block">
                <p>菜单管理树形结构</p>
                <el-tree
                        :data="data"
                        show-checkbox
                        node-key="id"
                        default-expand-all
                        :props="defaultProps"
                        :expand-on-click-node="false"
												@node-click="appendEventUpdate"
                        :render-content="renderContent">
                </el-tree>
            </div>
        </div>
        <el-dialog title="菜单名称" :visible.sync="dialogFormVisible">
            <el-form class="container-form" ref="form" :model="form" label-width="80px">
            	<el-form-item label="权限配置">
            		<el-select v-model="form.powerId" placeholder="请选择">
            			<el-option label="请选择" value=""></el-option>
									<el-option label="25" value="25"></el-option>
									<el-option label="26" value="26"></el-option>
									<el-option label="27" value="27"></el-option>
            		</el-select>
            	</el-form-item>
            	<el-form-item label="菜单名称">
            		<el-input v-model="form.name"></el-input>
            	</el-form-item>
							
            	<el-form-item label="菜单图标">
            		<el-input v-model="form.imageUrl"></el-input>
            	</el-form-item>
            	
            	<el-form-item label="菜单地址">
            		<el-input v-model="form.navigateUrl"></el-input>
            	</el-form-item>
							<el-form-item label="顺序编号">
								<el-input v-model="form.sortIndex"></el-input>
							</el-form-item>
            	<el-form-item label="备注信息">
            		<el-input type="textarea" v-model="form.remark"></el-input>
            	</el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="addEventFormSubmitBtn">确 定</el-button>
            </div>
        </el-dialog>
				
				<el-dialog title="菜单名称" :visible.sync="dialogFormVisibleUpdate">
						<el-form class="container-form" ref="updateForm" :model="updateForm" label-width="80px">
							<el-form-item label="权限配置">
								<el-select v-model="updateForm.powerId" placeholder="请选择">
									<el-option label="请选择" value=""></el-option>
									<el-option label="25" value="25"></el-option>
									<el-option label="26" value="26"></el-option>
									<el-option label="27" value="27"></el-option>
								</el-select>
							</el-form-item>
							<el-form-item label="菜单名称">
								<el-input v-model="updateForm.name"></el-input>
							</el-form-item>
							
							<el-form-item label="菜单图标">
								<el-input v-model="updateForm.imageUrl"></el-input>
							</el-form-item>
							
							<el-form-item label="菜单地址">
								<el-input v-model="updateForm.navigateUrl"></el-input>
							</el-form-item>
							<el-form-item label="顺序编号">
								<el-input v-model="updateForm.sortIndex"></el-input>
							</el-form-item>
							<el-form-item label="备注信息">
								<el-input type="textarea" v-model="updateForm.remark"></el-input>
							</el-form-item>
						</el-form>
						<div slot="footer" class="dialog-footer">
								<el-button @click="dialogFormVisibleUpdate = false">取 消</el-button>
								<el-button type="primary" @click="updateEventFormSubmitBtn">确 定</el-button>
						</div>
				</el-dialog>
    </div>

</template>

<script>
	import md5 from 'js-md5';
	import api from '@/api/api';
	import http from '@/http'
    let id = 1000;
    export default {
        data() {
            const data =[] ;
            return {
						

                data: JSON.parse(JSON.stringify(data)),
                form: {
									name:	'',
									imageUrl:	"",
									navigateUrl:	"",
									remark:	"",
									sortIndex:'',
									powerId:'',
									logicRemove:0
									
                },
								updateForm: {
									id:'',
									name:	'',
									imageUrl:	"",
									navigateUrl:	"",
									remark:	"",
									sortIndex:'',
									powerId:'',
									logicRemove:0
									
								},
                dialogTableVisible: false,
                dialogFormVisible: false,
								dialogFormVisibleUpdate: false,
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
				created(){
							console.log('请求成功')
							this.getDictionarytTree();

						},
        methods: {
            getDictionarytTree(){
                let query = {};
                this.$http2.get("/sys/menu/findTree",{params:query} )
                    .then(data => {
                        this.data = data.data.list;
                    }).catch(()=>{
                    console.log("获取树失败");
                });
            },
            appendEvent(s,d,n) {
                this.dialogFormVisible = true;
                this.triggerCurrenNodeData = d;
                this.triggerCurrenNode = n;
            },
						appendEventUpdate(s,d,n) {
								this.dialogFormVisibleUpdate = true;
								this.triggerCurrenNodeData = d;
								this.triggerCurrenNode = n;
								this.updateForm=d.data;
								console.log(d);
						},
            addEventFormSubmitBtn(formname){
                let dataPost=this.form;
								    dataPost.parentId=this.triggerCurrenNodeData.id;
                this.$http2.post('/sys/menu/add',  dataPost)
                    .then((res) => {
                        if (res.code ==0) {
                            this.dialogFormVisible = false;
                            //this.form = res.;
                            /*刷新树形菜单*/
														this.$message({
																type: 'success',
																message: '添加成功!'
														});
                            this.getDictionarytTree();
                        }
                    }).catch((e) => {
                        console.log('请求失败', e)
                    })
            },

            remove(node, data) {
                this.$confirm('此操作将删除该菜单, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    const parent = node.parent;
                    const children = parent.data.children || parent.data;
                    const index = children.findIndex(d => d.id === data.id);
                    children.splice(index, 1);
										this.$http2.post('/sys/menu/deteleOne',  {id:node.data.id})
												.then((res) => {
														if (res.code ==0) {
																this.dialogFormVisible = false;
																this.$message({
																		type: 'success',
																		message: '删除成功!'
																});
														}else{
															this.$message({
																	type: 'fail',
																	message: '删除失败!'
															});
														}
												}).catch((e) => {
														console.log('请求失败', e)
												})
                    
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },

            updateEventFormSubmitBtn(res) {
                
										let postData=this.updateForm;
										postData.id=this.triggerCurrenNodeData.id;
										postData.logicRemove=0;
										this.$http2.post('/sys/menu/update', postData)
												.then((res) => {
														if (res.code ==0) {
																this.dialogFormVisible = false;
																this.$message({
																		type: 'success',
																		message: '删除成功!'
																});
														}else{
															this.$message({
																	type: 'fail',
																	message: '删除失败!'
															});
														}
												}).catch((e) => {
														console.log('请求失败', e)
												})
                
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
