<template>
	<div>
		<el-breadcrumb separator-class="el-icon-arrow-right">
			<el-breadcrumb-item :to="{ path: '/manage' }">基础管理</el-breadcrumb-item>
			<el-breadcrumb-item>用户管理</el-breadcrumb-item>
		</el-breadcrumb>
		<el-form :inline="true" :model="formInline" size="mini" ref="formInline" class="demo-form-inline">
			<el-form-item label="角色类型">
				<el-select v-model="formInline.type" placeholder="角色类型">
					<el-option label="所有角色类型" value=""></el-option>
					<el-option v-for="item in developments" filterable :key="item.type" :label="item.typename" :value="item.type">
					</el-option>
				</el-select>
			</el-form-item>

			<el-form-item label="关键字">
				<el-input v-model="formInline.keyword" placeholder="请输入关键字"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" icon="el-icon-search" @click="onSearch">查询</el-button>
				<el-button type="success" icon="el-icon-refresh" @click="onDelete">删除</el-button>
				<el-button type="success" icon="el-icon-refresh" @click="onLoad">更新数据</el-button>
				<el-button type="info" icon="el-icon-plus" @click="onSkipAdd">添加</el-button>
			</el-form-item>
		</el-form>
		<div class="container-table">
			<el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
				<el-table-column type="selection" width="50">
				</el-table-column>
				<el-table-column label="角色ID" prop="id" width="100">
				</el-table-column>
				<el-table-column label="角色类型" prop="typename" width="200">
				</el-table-column>
				<el-table-column prop="name" label="角色名" width="200">
					<template slot-scope="scope">
						<el-button @click="onSkipUpdate(scope.row)" type="text">{{scope.row.name}}</el-button>
					</template>
				</el-table-column>
				<el-table-column prop="state" label="状态" show-overflow-tooltip>
					<template slot-scope="scope">
						<el-button size="mini" v-if="scope.row.state==1" type="success">已启用</el-button>
						<el-button size="mini" v-else-if="scope.row.state==0" type="danger">已禁用</el-button>
					</template>
				</el-table-column>
				<el-table-column prop="state" label="操作" width="200" show-overflow-tooltip>
					<template slot-scope="scope">
						<el-dropdown trigger="click">
							<el-button type="primary" size="mini">操作<i class="el-icon-arrow-down el-icon--right"></i></el-button>
							<el-dropdown-menu slot="dropdown">
								
								<el-dropdown-item v-if="scope.row.state==0" @click.native="SystemRoleEnable( scope.row)"><i class="el-icon-remove" style="margin-right: 5px"></i>启用</el-dropdown-item>
								<el-dropdown-item v-else="scope.row.state==1" @click.native="SystemRoleProhibit( scope.row)"><i class="el-icon-remove" style="margin-right: 5px"></i>禁用</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
					</template>
				</el-table-column>
			</el-table>
			<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10,20, 50, 100, 200]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="totalCount"> </el-pagination> 
		</div>
	</div>
</template>

<script>
	import api from '@/api/api';

	export default {
		data() {
			return {
				formInline: {
					type: '',
					keyword:''
				},
				pageSize: 10,
				currentPage: 1,
				totalCount: 0,
				tableData:[],
				developments: [],
				value: '',
				multipleSelection: [],
				rules: {
		         	keyword: [
			            { min: 1, max: 5, message: '长度在 1 到 5个字符', trigger: 'blur' }
		          	]
		        },
			}
		},
		/**
		 * 进入页面加载数据
		 */
		created() {
			this.loadData(this.currentPage, this.pageSize,this.formInline.type,this.formInline.keyword);
			this.onQueryRoleType();
		},
		methods: {
			//从服务器读取数据
			loadData: function(pageNum, pageSize,type,keyword) {
				this.$http.post(api.querySystemRole, {
					"type": type,
					"keyword": keyword,
					"pageNum": pageNum,
					"pageSize": pageSize
				}).then(data => {
					this.tableData = data.data.list;
					this.totalCount = data.data.total;
				}, function() {
					console.log("失败");
				});
			},
			/**
			 *系统 角色启用
			 */
			SystemRoleEnable(data){
				 this.$confirm('是否启用?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.onChange(data.id,1);
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消'
                    });
                });
			},
			/**
			 *系统 角色禁用
			 */
			SystemRoleProhibit(data){
				 this.$confirm('是否禁用?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.onChange(data.id,0);
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消'
                    });
                });
			},
			/**
			 * 角色删除
			 */
			SystemRoleDelete(data){
				 this.$confirm('是否删除?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.onDelete();
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消'
                    });
                });
			},
			
			/**
			 * 跳转新增
			 */
			onSkipAdd() {
				this.$router.push({
					path: '/addSystemRole'
				});
			},
			/**
			 * 跳转修改
			 */
			onSkipUpdate(row) {
				this.$router.push({
					path: '/updateSystemRole',
					query: {
						row:row
					},
				});
			},
			/**
			 * 状态改变 
			 */
			onChange(id, state) {
				this.$http2.post(api.updateSystemRole, {
						'id': id,
						'state': state,
					})
					.then(data => {
						if(data.code == 0) {
							this.$message({
								type: 'success',
								message: data.msg
							});
							this.onLoad();
						} else {
							this.$message.error(data.msg);
						}
					}).catch(() => {
						console.log("**********失败");
					});
			},
			/**
			 * 更新数据
			 */
			onLoad() {
				this.loadData(this.currentPage, this.pageSize);
			},
			/**
			 * 删除
			 */
			onDelete() {
				var checkboxs = this.multipleSelection;
				if(checkboxs.length > 0) {
					let arr = '';
					for(var i = 0; i < checkboxs.length; i++) {
						arr += checkboxs[i].id + ',';
					}
					console.log(arr);
					this.$http2.post(api.deleteSystemRole, {
							'arr': arr,
						})
						.then(data => {
							if(data.code == 0) {
								this.$message({
									type: 'success',
									message: data.msg
								});
								this.onLoad();
							} else {
								this.$message.error(data.msg);
							}
						}).catch(() => {
							console.log("**********失败");
						});
				} else {
					this.$message({
						message: '请勾选需要删除的数据！！！！',
					});
				}

			},
			//每页显示数据量变更
			handleSizeChange(val) {
				this.pageSize = val;
				this.loadData(this.currentPage, this.pageSize);
			},
			//页码变更
			handleCurrentChange(val) {
				this.currentPage = val;
				this.loadData(this.currentPage, this.pageSize);
			},
			/**
			 * 勾选框
			 */
			handleSelectionChange(val) {
				this.multipleSelection = val;
				

			},
			/**
			 * 查询角色类型
			 */
			onQueryRoleType() {
				this.$http2.get(api.querySystemRoleType, {

					})
					.then(data => {
		           		this.developments = data;
					}).catch(() => {
						console.log("**********失败");
					});
			},
			/**
			 * 条件查询
			 */
			onSearch() {
				this.loadData(this.currentPage, this.pageSize,this.formInline.type,this.formInline.keyword);
			}
		}
	}
</script>

<style lang='less'>
	.demo-form-inline {
		.el-form-item__label {
			font-size: 12px;
		}
	}
	
	.container-table {
		background: #fff;
		.el-table {
			font-size: 12px;
		}
	}
	
	.demo-form-inline {
		background: #fff;
		margin: 15px 0;
		padding: 15px;
	}
	
	.el-pagination {
		text-align: right;
		.el-pagination__total {
			float: left;
		}
	}
</style>