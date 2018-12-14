<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/manage' }">基础管理</el-breadcrumb-item>
      <el-breadcrumb-item>通知公告</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form :inline="true" :model="formInline" size="mini" class="demo-form-inline" style="float: right;">
      <el-form-item label="信息类型：">
        <el-select v-model="formInline.typeId" placeholder="请选择">
          <el-option
            v-for="item in typeIdOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      
      <el-form-item label="关键字：">
        <el-input v-model="formInline.keywords" placeholder="请输入关键字"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" @click="onSearch">查询</el-button>
        <el-button type="success" icon="el-icon-plus" @click="add">添加</el-button>
        <el-button type="danger" icon="el-icon-delete" v-show="deletShow" @click="del">删除</el-button>
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
      prop="typeId"
      label="消息类型"
      width="200">
     <template slot-scope="scope">
        <el-tag v-if = "scope.row.typeId==1" type = "primary">通知信息</el-tag>
        <el-tag v-if = "scope.row.typeId==2" type = "danger">公告信息</el-tag>
      </template>
    </el-table-column>
    </el-table-column>
        <el-table-column
      prop="title"
      label="标题"
      width="400">
    </el-table-column>
    <el-table-column
      prop="dId"
      label="查看范围"
      width="200">
      <template slot-scope="scope">
        <el-tag v-if = "scope.row.dId==0" type = "primary">全部可查看</el-tag>
        <el-tag v-if = "scope.row.dId==2" type = "danger"></el-tag>
      </template>
    </el-table-column>
    <el-table-column
      prop="dateLine"
      label="发布时间"
      width="200">
    </el-table-column>
    <el-table-column
          label="操作"
          width="100"
          show-overflow-tooltip>
          <template slot-scope="scope">
            <el-dropdown trigger="click">
              <el-button type="primary" size="mini">
                操作<i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item><i class="el-icon-delete" style="margin-right: 5px"></i>删除账号</el-dropdown-item>
                <el-dropdown-item><i class="el-icon-remove" style="margin-right: 5px"></i>禁用账号</el-dropdown-item>
                <el-dropdown-item><i class="el-icon-edit-outline" style="margin-right: 5px"></i>启用账号</el-dropdown-item>
                <el-dropdown-item><i class="el-icon-edit" style="margin-right: 5px"></i>初始密码</el-dropdown-item>
                      <el-button icon="el-icon-document" type="info" size="mini">操作</el-button>
              </el-dropdown-menu>
            </el-dropdown>
          </template>
    </el-table-column>
  </el-table>
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
          typeId: '',
          keywords: '',
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
    	add(){
    		console.log("添加")
    	},
    	checkDetail(){
//    	this.$router.push('/informationDetail')
				console.log("查询详细")
      },
    	del(){
    		console.log("删除")
    	},
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
      	this.$http2.get("/basic/information/searchPage", {
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
//      this.$http2.post("/sys/login", {
//        "userName": this.ruleForm.name,
//        "password": md5(this.ruleForm.password),
//        "identifyCode": this.ruleForm.code,
//      })
//        .then(data => {
//          console.log("成功");
//        }).catch(()=>{
//        console.log("失败");
//      });
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
</style>-->
