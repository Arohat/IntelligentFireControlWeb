<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/manage' }">基础管理</el-breadcrumb-item>
      <el-breadcrumb-item>系统权限</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form :inline="true" :model="formInline" size="mini" class="demo-form-inline">
      
      <el-form-item label="关键字：">
        <el-input v-model="formInline.keyWords" placeholder="请输入关键字"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" @click="onSearch">搜索</el-button>
        <el-button type="success" icon="el-icon-refresh">更新</el-button>
        <el-button type="info" icon="el-icon-plus" @click="add">新增</el-button>
        <el-button type="danger" icon="el-icon-delete" v-show="deletShow" @click="delet">删除</el-button>
      </el-form-item>·
    </el-form>
    <div class="container-table">
      <el-table
        ref="multipleTable"
        :data="dataList"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>       
        
        <el-table-column
          prop="modelName"
          label="模块名称
          "
          width="200">
        </el-table-column>
        <el-table-column
          prop="powerName"
          label="权限名称"
          width="200">
        </el-table-column>
        <el-table-column
          prop="displayName"
          label="权限值"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="remark"
          label="备注"
          show-overflow-tooltip>
        </el-table-column>
    
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-size="currentPageSize"
        layout="total, prev, pager, next"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        formInline: {
          keyWords: '',
        },
        deletShow:false,
        currentPage: 1,
        currentPageSize: 10,
        total: 0,
        value: '',
        dataList: [],
        multipleSelection: []
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      handleSizeChange(val) {

      },
      handleCurrentChange(val) {

      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
        if(this.multipleSelection.length==0){
        	this.deletShow = false
        }else{
        	this.deletShow = true
        }
      },
      
      onSearch(){
      	this.$http2.post("/basic/modelPower/queryPageList", {
          "pageSize": this.currentPageSize,
          "pageNum": this.currentPage
        })
          .then(data => {
          	if(data.code==0){
          		this.dataList = data.data.list
            	this.total = data.data.total
          	}
          }).catch(()=>{
          console.log("失败");
        });
      }
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
