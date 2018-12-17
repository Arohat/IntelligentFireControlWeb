<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/manage' }">用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户权限</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form :inline="true" :model="formInline" size="mini" class="demo-form-inline">
      <el-form-item label="所属部门：">
        <el-select v-model="formInline.department" filterable  placeholder="-请选择-">
          <el-option
            v-for="item in departmentOptions"
            :key="item.value"
            :label="item.name"
            :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="权限筛选：">
        <el-select v-model="formInline.power" filterable  placeholder="-请选择-">
          <el-option
            v-for="item in powerOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="用户性别">
        <el-select v-model="formInline.sex" filterable  placeholder="-请选择-">
          <el-option
            v-for="item in Sexs"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="关键字：">
        <el-input v-model="formInline.keyWords" placeholder="请输入关键字"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" @click="onSearch">搜索</el-button>
        
      </el-form-item>
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
          prop="userName"
          label="用户名
          "
          width="200">
        </el-table-column>
        <el-table-column
          prop="telephone"
          label="账号"
          width="200">
        </el-table-column>
        <el-table-column
          prop="jobNumber"
          label="工号"
          width="200">
        </el-table-column>
        <el-table-column
          prop="dpartmentName"
          label="所属部门"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="sex"
          label="性别"
          show-overflow-tooltip>
          <template slot-scope="scope">
		        <el-text v-if = "scope.row.sex==0" >男</el-text>
		        <el-text v-if = "scope.row.sex==1" >女</el-text>
		      </template>
        </el-table-column>
        <el-table-column
          prop="powerName"
          label="所具备权限"
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
	import api from '@/api/api';
  export default {
    data() {
      return {
        formInline: {
        	department:'',
        	power:'',
        	sex:'',
          keyWords:null
        },
        currentPage: 1,
        currentPageSize: 10,
        total: 0,
        value: '',
        dataList: [],
        multipleSelection: [],
        departmentOptions:[],
        powerOptions:[{
          value: null,
          label: '-请选择-'
        },{
          value: '未设置权限',
          label: '未设置权限'
        }, {
          value: '已设置权限',
          label: '已设置权限'
        }],
        Sexs: [{
          value: null,
          label: '-请选择-'
        },{
          value: '0',
          label: '男'
        }, {
          value: '1',
          label: '女'
        }],
      }
    },
    
    created:function() {
    	this.currentPage = this.$route.query.parampageNum
    	console.log(this.currentPage)
    	this.$http2.post("/basic/userPower/queryPageList", {
          "pageSize": this.currentPageSize,
          "pageNum": this.currentPage,
        })
          .then(data => {
          	if(data.code==0){
          		this.dataList = data.data.list
            	this.total = data.data.total
          	}
          }).catch(()=>{
          console.log("失败");
        });
        this.$http2.get("/basic/userPower/getDpartmentName", {})
          .then(data => {
          	if(data.code==0){
          		this.departmentOptions = data.data
          		this.departmentOptions.unshift(
          			{
				          id: null,
				          name: '-请选择-'
				        }
          		)
          	}
          }).catch(()=>{
          console.log("失败");
        });
    },
    methods: {
    
      currentPage(val){
      	this.currentPage=val;
      	
      },
      add(){
      	this.$router.push({ path: '/systemManagement/basicManagement/systemPermissionsAdd'});
      },
      handleSizeChange(val) {
      	console.log(val)
      	var vm = this;
				vm.currentPageSize = val;
				vm.onSearch()
      },
      handleCurrentChange(val) {
      	console.log(val)
      	var vm = this;
				vm.currentPage = val;
				vm.onSearch()
      },
      setContextData: function(key, value) { 
				if(typeof value == "string"){
					sessionStorage.setItem(key, value);
				}else{
					sessionStorage.setItem(key, JSON.stringify(value));
				}
			},

			getContextData: function(key){
				const str = sessionStorage.getItem(key);
				if( typeof str == "string" ){
					try{
						return JSON.parse(str);
					}catch(e) {
						return str;
					}
				}
				return;
			}
,
      handleSelectionChange(val) {
        this.multipleSelection = val;
        if(this.multipleSelection.length==0){
        	this.deletShow = false
        }else{
        	this.deletShow = true
        }
      },
      onSearch(){
      	this.$http2.post("/basic/userPower/queryPageList", {
          "pageSize": this.currentPageSize,
          "pageNum": this.currentPage,
          "keyWords":this.formInline.keyWords,
          "dpartmentId":this.formInline.department,
          "powerName":this.formInline.power,
          "sex":this.formInline.sex
        })
          .then(data => {
          	if(data.code==0){
          		this.dataList = data.data.list
            	this.total = data.data.total
          	}
          	console.log(data.data.list);
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
