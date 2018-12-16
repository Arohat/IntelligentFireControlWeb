<script src="../main.js"></script>
<template>
  <div>
    <div @click="getMenu" class="menu-icon">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAO0lEQVQ4T2NkoBAwUqifAW7AjuPn/pNimIelEVgv9QwgxXZktdQLA4pdMBqI5AYhNRMSxbFAricoTokALwYYETYb1DUAAAAASUVORK5CYII="/>
    </div>
<el-menu
        router :default-active="$route.path"
        default-active="1-4-1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
        background-color="#1a2942"
      text-color="#b8c7ce"
      active-text-color="#fff">
  <el-submenu index="1">
    <template slot="title">
      <i class="el-icon-menu"></i>
      <span slot="title">
          基础管理
      </span>
    </template>
    <el-menu-item index="/userManagement">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span slot="title">
            用户管理
        </span>
      </template>
    </el-menu-item>
    <el-menu-item index="/department">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span slot="title">部门管理</span>
      </template>
    </el-menu-item>
    <el-menu-item index="/informationAdded">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span slot="title">电梯维保合同管理</span>
      </template>
    </el-menu-item>
  </el-submenu>
  <el-submenu index="2">
    <template slot="title">
      <i class="el-icon-menu"></i>
      <span slot="title">
          系统设置
      </span>
    </template>
    <el-menu-item index="/systemManagement/userManagement/userRoleManagement">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span slot="title">
            用户角色
        </span>
      </template>
    </el-menu-item>
    
    <el-menu-item index="/systemManagement/basicManagement/systemRole">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span slot="title">
            	系统角色
        </span>
      </template>
    </el-menu-item>
    
  </el-submenu>
  <el-submenu index="">
    <template slot="title">
      <i class="el-icon-menu"></i>
      <span slot="title">导航一</span>
    </template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
    <el-submenu index="2-4">
      <template slot="title">选项4</template>
      <el-menu-item index="2-4-1">选项1</el-menu-item>
      <el-menu-item index="2-4-2">选项2</el-menu-item>
      <el-menu-item index="2-4-3">选项3</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="">
    <i class="el-icon-document"></i>
    <span slot="title">导航三</span>
  </el-menu-item>
</el-menu>
      <!-- 一级菜单列表 END -->
    </div>
</template>

<script>
  export default {
    data() {
      return {
        isCollapse: false
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      getMenu(){
        this.isCollapse=!this.isCollapse
      }
    }
  }
</script>

<style lang='less'>
  .menu-icon{
    height: 37px;
    line-height: 37px;
    text-align: center;
    background: #162338;
    cursor: pointer;
  }
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-menu{
  border-right:0;
  }
</style>


