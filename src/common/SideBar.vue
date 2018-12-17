<script src="../main.js"></script>
<template>
    <div>
        <div @click="getMenu" class="menu-icon">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAO0lEQVQ4T2NkoBAwUqifAW7AjuPn/pNimIelEVgv9QwgxXZktdQLA4pdMBqI5AYhNRMSxbFAricoTokALwYYETYb1DUAAAAASUVORK5CYII="/>
        </div>
        <el-menu
                router :default-active="$route.path"
                @open="handleOpen"
                @close="handleClose"
                background-color="#343744"
                text-color="#fff"
                active-text-color="#fff"
                class="menu-Bar"
                :collapse="isCollapse"
        >
            <MenuTree :menuData="this.menuData"></MenuTree>
        </el-menu>
        <!-- 一级菜单列表 END -->
    </div>
</template>
<script>
    import api from '@/api/api';
    import http from '@/http'
    import MenuTree from './MenuTree'
    import Bus from '../Bus.js'
    export default {
        data() {
            return {
                isCollapse: false,
                menuData: [],
                menuId:''
            };
        },
        components: {
            'MenuTree': MenuTree
        },
        mounted: function () {
            this.$http2.get(api.findTwoAndThreeUserMenuTree+'?userId=1&&parentId=9', {
            })
                .then(data => {
                    this.menuData = data.data.list;
                }).catch(() => {
                this.$message('获取左侧菜单失败');
            });
            Bus.$on('on', (msg) => {
                console.log(msg)
                this.menuId = msg.id
                this.refresh(this.menuId)
            })
        },
        methods: {
            refresh (parentId){
                this.$http2.get(api.findTwoAndThreeUserMenuTree+'?userId=1&&parentId='+parentId, {
                })
                    .then(data => {
                        this.menuData = data.data.list;
                    }).catch(() => {
                    this.$message('获取左侧菜单失败');
                });
            },
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            getMenu(){
                this.isCollapse = !this.isCollapse
            }
        }
    }
</script>
<style lang='less'>
  .layout-left{
    .menu-icon {
      height: 37px;
      line-height: 37px;
      text-align: center;
      background: #343744;
      cursor: pointer;
    }

    .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 200px;
      min-height: 400px;
    }

    .el-menu {
      border-right: 0;
    }

    .el-submenu {
      border-bottom: 1px #1a1d24 solid;
      border-top: 1px #535456 solid;
    }
  }

</style>


