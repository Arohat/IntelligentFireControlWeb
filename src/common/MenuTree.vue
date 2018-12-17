<template>
    <div>
        <template v-for="value in this.menuData">
            <el-submenu :index="value.navigateUrl" v-if="value.children.length>0">
                <template slot="title">
                    <i :class="value.imageUrl"></i>
                    <span slot="title">{{value.name}}</span>
                </template>
                <MenuTree :menuData="value.children"></MenuTree>
            </el-submenu>
            <el-menu-item :index="value.navigateUrl" v-else>
                <!-- <i :class="value.imageUrl"></i> -->
				<i class="fa fa-gear"></i>
                <span slot="title">{{value.name}}</span>
            </el-menu-item>
        </template>
    </div>
</template>

<script>
    export default {
        props: ['menuData'],
        name: 'MenuTree'
    }
</script>
<style @>
	@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css";
	</style>
