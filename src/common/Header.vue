<template>
  <div class="header">
    <el-menu mode="horizontal">
      <el-submenu index="0" class="user">
        <template slot="title">
          <span>userName</span>
        </template>
        <el-menu-item index="1" >修改密码</el-menu-item>
        <el-menu-item index="2" >安全退出</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: null,
      userName: ""
    };
  },
  methods: {

  },
  mounted() {}
};
</script>
<style lang="less">
  .el-menu--horizontal>.el-submenu .el-submenu__title {
    height: 50px;
    line-height: 50px;
    border-bottom: 2px solid transparent;
    color: #909399;
  }
  .el-menu.el-menu--horizontal {
    background-color: #343744;
    border: 0;
  }
</style>
