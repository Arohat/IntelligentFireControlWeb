<template>
  <div class="cloud-home">
    <div class="layout-header">
      <Header></Header>
    </div>
    <div class="layout-container">
      <div class="layout-left">
        <SideBar></SideBar>
      </div>
      <div class="layout-right">
        <Container>
          <router-view><div>
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
  </div></router-view>
        </Container>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../common/Header";
import SideBar from "../common/SideBar";
import Container from "../common/Container";
export default {
  name: "CloudHome",
  data() {
    return {};
  },
  components: {
    Header,
    SideBar,
    Container
  }
};
</script>

<style lang='less'>
.cloud-home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .layout-header {
    height: 50px;
  }
  .layout-container {
    flex: 1;
    display: flex;
    .layout-left {
      background-color: #1a2942;
    }
    .layout-right {
      flex: 1;
      overflow-y: auto;
      background-color: #ecf0f5;
    }
  }
}
</style>
