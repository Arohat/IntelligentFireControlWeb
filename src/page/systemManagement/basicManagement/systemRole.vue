<template>
	<div>
		<el-breadcrumb separator-class="el-icon-arrow-right">
			<el-breadcrumb-item :to="{ path: '/manage' }">基础管理</el-breadcrumb-item>
			<el-breadcrumb-item>用户管理</el-breadcrumb-item>
		</el-breadcrumb>
		<el-form :inline="true" :model="formInline" size="mini" class="demo-form-inline">
			<el-form-item label="角色类型">
				<el-select v-model="formInline.type" placeholder="角色类型">
					<el-option v-for="item in developments" :key="item.value" :label="item.label" :value="item.value">
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
				<el-table-column label="角色类型" prop="typeName" width="200">
				</el-table-column>
				<el-table-column prop="name" label="角色名" width="200">
				</el-table-column>
				<el-table-column prop="state" label="状态" show-overflow-tooltip>
					<template slot-scope="scope">
						<el-button size="mini" v-if="scope.row.state==0" type="success">已启用</el-button>
						<el-button size="mini" v-else-if="scope.row.state==1" type="danger">已禁用</el-button>
					</template>
				</el-table-column>
				<el-table-column prop="state" label="操作" width="200" show-overflow-tooltip>
					<template slot-scope="scope">
						<el-dropdown trigger="click">
							<el-button type="primary" size="mini">操作<i class="el-icon-arrow-down el-icon--right"></i></el-button>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item @click.native="onSkipUpdate(scope.row)"><i class="el-icon-remove" style="margin-right: 5px"></i>修改</el-dropdown-item>
								<el-dropdown-item v-if="scope.row.state==1" @click.native="onChange( scope.row.id,scope.row.state)"><i class="el-icon-edit-outline" style="margin-right: 5px"></i>启用</el-dropdown-item>
								<el-dropdown-item v-else="scope.row.state==0" @click.native="onChange( scope.row.id,scope.row.state)"><i class="el-icon-edit-outline" style="margin-right: 5px"></i>禁用</el-dropdown-item>
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
	//勾选框全局变量
	var checkboxs = '';
	export default {
		//inject: ['reload'],
		data() {
			return {
				formInline: {
					type: '',
				},
				pageSize: 10,
				currentPage: 1,
				totalCount: 0,
				tableData:[],
				developments: [],
				value: '',
				multipleSelection: []
			}
		},
		/**
		 * 进入页面加载数据
		 */
		created() {
			this.loadData(this.currentPage, this.pageSize);
		},
		methods: {
			//从服务器读取数据
			loadData: function(pageNum, pageSize) {
				this.$http.post(api.queryListRole, {
					//"keyword": this.formInline.keyword,
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
			 * 跳转新增
			 */
			onSkipAdd() {
				this.$router.push({
					path: '/systemManagement/basicManagement/addSystemRole'
				});
			},
			/**
			 * 跳转修改
			 */
			onSkipUpdate(row) {
				this.$router.push({
					path: '/systemManagement/basicManagement/updateSystemRole',
					query: {
						row:row
					},
				});
			},
			/**
			 * 状态改变 
			 */
			onChange(id, state) {
				if(state <= 0) {
					state = 1;
				} else {
					state = 0;
				}
				this.$http2.post(api.updateRole, {
						'id': id,
						'state': state,
					})
					.then(data => {
						console.log(data);
						if(data.code == '200') {
							this.reload();
							this.$message({
								message: data.msg,
							});
						} else {
							this.$message({
								message: data.msg,
							});
						}
					}).catch(() => {
						console.log("**********失败");
					});
			},
			/**
			 * 更新数据
			 */
			onLoad() {
				this.$http2.get(api.queryListRole +'?pageNum=1&pageSize=10', {

					})
					.then(data => {
						//分页总数
						this.total = data.data.total;
						//每页显示数据
						if(data.data.pageSize == null) {
							this.pageSize = data.data.pageSize;
						} else {
							this.pageSize = 10;
						}
						//数据
						this.tableData = data.data.list;
					}).catch(() => {
						console.log("**********失败");
					});
			},
			/**
			 * 删除
			 */
			onDelete() {
				if(checkboxs.length > 0) {
					let arr = '';
					for(var i = 0; i < checkboxs.length; i++) {
						arr += val[i].id + ',';
					}
					console.log(arr);
					this.$http2.post(api.deleteListRole, {
							'arr': arr,
						})
						.then(data => {
							this.$message({
								message: data.msg,
							});
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
				this.pagesize = val;
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
				checkboxs = '';
				this.multipleSelection = val;
				if(val.length > 0) {
					checkboxs = val;
				} else {
					checkboxs = 0;
				}

			},
			/**
			 * 查询角色类型
			 */
			onQueryRoleType() {
				console.log('*****');
				this.$http2.get(api.queryRoleType, {

					})
					.then(data => {

						console.log(data.data);
					}).catch(() => {
						console.log("**********失败");
					});
			},
			/**
			 * 条件查询
			 */
			onSearch() {
				this.$http2.get(api.queryListRole, {
						//角色类型
						"region": this.formInline.type,
						"keyWord": this.formInline.keyWord,
					})
					.then(data => {
						this.tableData = data.data.list;
						console.log(data.data);
					}).catch(() => {
						console.log("**********失败");
					});
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