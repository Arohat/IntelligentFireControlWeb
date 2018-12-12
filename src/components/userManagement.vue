<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/manage' }">基础管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form :inline="true" :model="formInline" size="mini" class="demo-form-inline">
      <el-form-item label="所属部门">
        <el-select v-model="formInline.region" placeholder="所属部门">
          <el-option
            v-for="item in developments"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="用户性别">
        <el-select v-model="formInline.Sex" placeholder="用户性别">
          <el-option
            v-for="item in Sexs"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="开始时间">
        <el-date-picker
          v-model="formInline.starTime"
          type="datetime"
          placeholder="选择日期时间">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="结束时间">
        <el-date-picker
          v-model="formInline.endTime"
          type="datetime"
          placeholder="选择日期时间">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="关键字">
        <el-input v-model="formInline.user" placeholder="请输入关键字"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" @click="onSearch">查询</el-button>
        <el-button type="success" icon="el-icon-refresh">更新数据</el-button>
        <el-button type="info" icon="el-icon-plus">添加</el-button>
      </el-form-item>
    </el-form>
    <div class="container-table">
      <el-table
        ref="multipleTable"
        :data="tableData3"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          label="用户名"
          prop="user"
          width="120">
        </el-table-column>
        <el-table-column
          prop="name"
          label="账号"
          width="120">
        </el-table-column>
        <el-table-column
          prop="address"
          label="工号"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="department"
          label="所属部门"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="sex"
          label="性别"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="idcard"
          label="身份证"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="status"
          label="状态"
          show-overflow-tooltip>
          <template slot-scope="scope">
            <el-button size="mini" v-if="scope.row.status==1" type="success">已启用</el-button>
            <el-button size="mini" v-else-if="scope.row.status==2" type="danger">已禁用</el-button>
          </template>
        </el-table-column>
        <el-table-column
          prop="date"
          label="注册时间"
          show-overflow-tooltip>
          <template slot-scope="scope">{{ scope.row.date }}</template>
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
              </el-dropdown-menu>
            </el-dropdown>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage1"
        :page-size="100"
        layout="total, prev, pager, next"
        :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        formInline: {
          user: '',
          region: '',
          starTime:'',
          endTime:''
        },
        currentPage1: 5,
        developments: [{
          value: '5',
          label: '案场管理服务部'
        }, {
          value: '7',
          label: '区域办公室'
        }, {
          value: '8',
          label: '绿化管理服务部'
        }, {
          value: '9',
          label: '业户报修'
        }, {
          value: '10',
          label: '租售中心'
        }, {
          value: '11',
          label: '人力资源部'
        }, {
          value: '12',
          label: '财务部'
        }, {
          value: '13',
          label: '职厨'
        }, {
          value: '20',
          label: '测试下级'
        }, {
          value: '21',
          label: '测试同级'
        }, {
          value: '31',
          label: '环境管理服务部t'
        }, {
          value: '32',
          label: '张勇光部门01'
        }],
        Sexs: [{
          value: '0',
          label: '男'
        }, {
          value: '1',
          label: '女'
        }],
        value: '',
        tableData3: [{
          user: '超级管理员',
          name: 'admin',
          address: '00001',
          department: '物业服务中心',
          sex: '男',
          idcard: '',
          status: '1',
          date: '2018-07-26 08:42:53'
        },{
          user: '李伟林',
          name: '15865645387',
          address: '201710240110',
          department: '工程维修服务部7',
          sex: '女',
          idcard: '370629198010305230',
          status: '1',
          date: ''
        },{
          user: '王康贵',
          name: '13695665679',
          address: '2011030477',
          department: '-',
          sex: '男',
          idcard: '342830196912254855',
          status: '1',
          date: ''
        },{
          user: '余跃',
          name: '15099866402',
          address: '20170424',
          department: '工程维修服务部7',
          sex: '男',
          idcard: '422212345678909999',
          status: '2',
          date: ''
        },{
          user: '夏开之',
          name: '15099866402',
          address: '2011060380',
          department: '工程维修服务部7',
          sex: '男',
          idcard: '342222198412054837',
          status: '2',
          date: ''
        }],
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
      },
      onSearch(){
        this.$http2.post("/sys/login", {
          "userName": this.ruleForm.name,
          "password": md5(this.ruleForm.password),
          "identifyCode": this.ruleForm.code,
        })
          .then(data => {
            console.log("成功");
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
