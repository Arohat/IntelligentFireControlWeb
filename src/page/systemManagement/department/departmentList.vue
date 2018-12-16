<template>
	<div>
		<el-breadcrumb separator-class="el-icon-arrow-right">
			<el-breadcrumb-item :to="{ path: '/manage' }">基础管理</el-breadcrumb-item>
			<el-breadcrumb-item>部门管理</el-breadcrumb-item>
		</el-breadcrumb>
		<el-form :inline="true" :model="formInline" size="mini" class="demo-form-inline">
			<el-form-item label="关键字">
				<el-input v-model="formInline.keyword" placeholder="请输入关键字"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" icon="el-icon-search" @click="onSearch">查询</el-button>
				<el-button type="warning" icon="el-icon-share" @click="departmentTree">树形结构</el-button>
				<el-button type="success" icon="el-icon-plus" @click="departmentAdd">添加</el-button>
				<el-button type="danger" icon="el-icon-delete" @click="departmentDelete">删除</el-button>
			</el-form-item>
		</el-form>
		<div class="container-table">
			<el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
				<el-table-column type="selection" width="55">
				</el-table-column>
				<el-table-column label="上级部门" prop="parentName" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="name" label="部门名称" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="state" label="状态" show-overflow-tooltip>
					<template slot-scope="scope">
						<el-button size="mini" v-if="scope.row.state==1" type="success">已启用</el-button>
						<el-button size="mini" v-else-if="scope.row.state==0" type="danger">已禁用</el-button>
					</template>
				</el-table-column>
				<el-table-column prop="createTime" label="更新时间" :formatter="dateFormat" show-overflow-tooltip>
				</el-table-column>
				<el-table-column label="操作" width="100" show-overflow-tooltip>
					<template slot-scope="scope">
						<el-dropdown trigger="click">
							<el-button type="primary" size="mini">
								操作<i class="el-icon-arrow-down el-icon--right"></i>
							</el-button>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item v-if="scope.row.state==1" @click.native="departmentProhibit(scope.row)"><i class="el-icon-remove-outline" style="margin-right: 5px"></i>禁用</el-dropdown-item>
								<el-dropdown-item v-else-if="scope.row.state==0" @click.native="departmentEnable(scope.row)"><i class="el-icon-remove-outline" style="margin-right: 5px"></i>启用</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
					</template>
				</el-table-column>
			</el-table>
			<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10,20, 50, 100, 200]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="totalCount">
			</el-pagination>
		</div>
	</div>
</template>

<script>
	import api from '@/api/api';
	export default {
		data() {
			return {
				formInline: {
					keyword: ''
				},
				//当前页码
				currentPage: 1,
				pageSize: 10,
				//默认数据总数
				totalCount: 0,
				logTypeSelect: [],
				value: '',
				tableData3: [],
				multipleSelection: []
			}
		},
		created: function() {
			this.loadData(this.currentPage, this.pageSize);
		},
		methods: {
			//从服务器读取数据
			loadData: function(pageNum, pageSize) {
				this.$http2.post(api.departmentQuery, {
					"keyword": this.formInline.keyword,
					"pageNum": pageNum,
					"pageSize": pageSize
				}).then(data => {
					this.tableData3 = data.data.list;
					this.totalCount = data.data.total;
				}, function() {
					console.log("获取部门数据失败");
				});
			},
			departmentTree() {
				this.$router.push({
					path: '/departmentTree'
				});
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
			handleSelectionChange(val) {
				this.multipleSelection = val;
			},
			onSearch() {
				this.loadData(this.currentPage, this.pageSize);
			},
			//格式化日期
			dateFormat: function(row, column) {
				var date = row[column.property];
				if(date == undefined) {
					return "";
				}
				var dateee = new Date(date).toJSON();
				var times = new Date(+new Date(dateee) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
				return times;
			},
			//部门添加
			departmentAdd() {
				this.$router.push({
					path: '/departmentAdd'
				});
			},
			//部门禁用
			departmentProhibit(data) {
				this.$confirm('此操作将禁用该部门, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.prohibit(data.id, 0);
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消禁用'
					});
				});
			},
			//部门启用
			departmentEnable(data) {
				this.$confirm('此操作将启用该部门, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.prohibit(data.id, 1);
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消启用'
					});
				});
			},
			prohibit(id, state) {
				this.$http2.post(api.departmentProhibit, {
					"id": id,
					"state": state
				}).then(data => {
					if(data.code == 0) {
						this.$message({
							type: 'success',
							message: data.msg
						});
						this.onSearch();
					} else {
						this.$message.error(data.msg);
					}
				}, function() {
					console.log("异常");
				});
			},
			//部门删除
			departmentDelete() {
				this.$confirm('此操作将删除该部门, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
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