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
