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
                background-color="#1a2942"
                text-color="#b8c7ce"
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

    export default {
        data() {
            return {
                isCollapse: false,
                menuData: []
            };
        },
        components: {
            'MenuTree': MenuTree
        },
        mounted: function () {
            this.$http2.get(api.findMenuByUser+'?userId=1', {
            })
                .then(data => {
                    this.menuData=data.data.list
                }).catch(() => {
                console.log("失败");
            });
        },
        methods: {
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
    .menu-icon {
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

    .el-menu {
        border-right: 0;
    }
</style>


