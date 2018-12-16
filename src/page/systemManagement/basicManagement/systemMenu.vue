<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/systemManagement/basicManagement/systemMenu' }">基础管理</el-breadcrumb-item>
      <el-breadcrumb-item>系统菜单</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form :inline="true" :model="ruleForm" ref="ruleForm"  size="mini" class="demo-form-inline">
      <el-form-item label="关键字">
      	<el-input v-model="ruleForm.keyWord" placeholder="请输入关键字"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" @click="onSearch">查询</el-button>
        <!-- <el-button type="success" icon="el-icon-refresh">更新数据</el-button> -->
        <el-button type="info" @click="onAdd" icon="el-icon-plus">添加</el-button>
      </el-form-item>
    </el-form>
    <div class="container-table">
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          label="顺序编号"
          prop="id"
          width="120">
        </el-table-column>
        <el-table-column
          prop="oneLabelName"
          label="一级菜单"
          width="120">
        </el-table-column>
        <el-table-column
          prop="twoLabelName"
          label="二级菜单"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="treeLabelName"
          label="三级菜单"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="remark"
          label="备注"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="powerName"
          label="配置权限"
          show-overflow-tooltip>
          <!-- <template slot-scope="scope">
            <el-button size="mini" v-if="scope.row.status==1" type="success">已启用</el-button>
            <el-button size="mini" v-else-if="scope.row.status==2" type="danger">已禁用</el-button>
          </template> -->
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
				:page-sizes="[5, 10, 20, 30]"
        :page-size="pageSize"
        layout="total, prev, pager, next"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
	import md5 from 'js-md5';
	import api from '@/api/api';
	import http from '@/http'
  export default {
    data() {
      return {
        ruleForm: {
        	name: '',
        	password: '',
        	code:''
        },
        currentPage: 1,
				pageSize:10,
				total:0,
        tableData: [], 
        multipleSelection: []
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      handleSizeChange(val) {
        this.pageSize = val;
        console.log('每页 '+val+' 条');
				this.onSearch();
      },
      handleCurrentChange(val) {
        this.currentPage = val;
        console.log('当前页: '+val);
				this.onSearch();
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      onSearch(){
        this.$http2.get(api.queryAllSystemMenuInfo, {params:{
          "keyWord": this.ruleForm.keyWord,
					"pageSize":this.pageSize,
					"pageNum":this.currentPage
        }}).then(data => {
						this.tableData=data.data.list;
						this.total=data.data.total;
						this.currentPage=data.data.pageNum;
						this.pageSize=data.data.pageSize;
            console.log(data.data);
          }).catch(function (error) {
            console.log(error);
          });
      },
			onAdd(){
				this.$router.push({ path: '/systemManagement/basicManagement/systemMenuAdd'});
			}
    },
    created(){
      this.$http2.get(api.queryAllSystemMenuInfo, {params:{
      	pageSize:10,
      	pageNum:1
      }}).then(data => {
      		this.tableData=data.data.list;
      		this.total=data.data.total;
      		this.currentPage=data.data.pageNum;
      		this.pageSize=data.data.pageSize;
      		console.log(data);
      	}).catch(function (error) {
      		console.log(error);
      	});
    }
  }
</script>

<style lang='less'>
  .demo-form-inline{
    .el-form-item__label {
      font-size: 12px;
    }
  }
  .container-table{
    background: #fff;
    .el-table{
      font-size: 12px;
    }
  }
  .demo-form-inline{
    background: #fff;
    margin: 15px 0;
    padding: 15px;
  }
  .el-pagination{
    text-align: right;
    .el-pagination__total{
      float: left;
    }
  }
</style>
