<template>
	<div>
		<el-breadcrumb separator-class="el-icon-arrow-right">
			<el-breadcrumb-item :to="{ path: '/manage' }">基础管理</el-breadcrumb-item>
			<el-breadcrumb-item>系统日志</el-breadcrumb-item>
		</el-breadcrumb>
		<el-form :inline="true" :model="formInline" size="mini" class="demo-form-inline">
			<el-form-item label="日志类型">
				<el-select v-model="formInline.logType" placeholder="日志类型">
					<el-option v-for="item in logTypeSelect" :key="item.value" :label="item.name" :value="item.value">
					</el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="开始时间">
				<el-date-picker v-model="formInline.startTime" type="datetime" placeholder="选择日期时间">
				</el-date-picker>
			</el-form-item>
			<el-form-item label="结束时间">
				<el-date-picker v-model="formInline.endTime" type="datetime" placeholder="选择日期时间">
				</el-date-picker>
			</el-form-item>
			<el-form-item label="关键字">
				<el-input v-model="formInline.keyword" placeholder="请输入关键字"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" icon="el-icon-search" @click="onSearch">查询</el-button>
			</el-form-item>
		</el-form>
		<div class="container-table">
			<el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
				<el-table-column type="selection" width="55">
				</el-table-column>
				<el-table-column label="日志类型" prop="logType" show-overflow-tooltip>
					<template slot-scope="scope" prop="logTypeSelect"  >
					</template>
				</el-table-column>
				<el-table-column prop="name" label="操作用户名称" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="ip" label="IP地址" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="operatorDescribe" label="操作描述" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="operatorContent" label="操作内容" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="createTime" label="操作时间" :formatter="dateFormat" show-overflow-tooltip>
				</el-table-column>
			</el-table>
			<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10,20, 50, 100, 200]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="totalCount">
			</el-pagination>
		</div>
	</div>
</template>

<script>
	import api from '@/api/api'
	export default {
		data() {
			return {
				formInline: {
					logType: '',
					keyword: '',
					starTime: '',
					endTime: ''
				},
				//当前页码
				currentPage: 1,
				pageSize: 10,
				logTypeSelect: [],
				value: '',
				tableData3: [],
				//默认数据总数
				totalCount: 0,
				//多选数组
				multipleSelection: []
			}
		},
		created: function() {
			this.getLogType();
			this.loadData(this.currentPage, this.pageSize);
		},
		methods: { 
			//从服务器读取数据
			loadData: function(pageNum, pageSize) {
				this.$http.post(api.systemLogQuery, {
					"logType": this.formInline.logType,
					"startTime": this.formInline.startTime,
					"endTime": this.formInline.endTime,
					"keyword": this.formInline.keyword,
					"pageNum": pageNum,
					"pageSize": pageSize
				}).then(data => {
					this.tableData3 = data.data.list;
					this.totalCount = data.data.total;
				}, function() {
					console.log("失败");
				});
			},
			//获取日志类型
			getLogType: function() {
				this.$http2.get(api.getLogType, {

					})
					.then(data => {
						this.logTypeSelect = data.data;
					}).catch(() => {});
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
			//查询
			onSearch() {
				this.loadData(this.currentPage, this.pageSize);
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