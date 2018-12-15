<template>
  <div class="header">

    <!--<div class="h-right">-->
      <!--<el-popover-->
        <!--width="200"-->
        <!--placement="bottom"-->
        <!--trigger="click">-->
        <!--<div>-->
          <!--<p>最近一周您有<span>1</span>条通知</p>-->
          <!--<ul class="message-ul">-->
            <!--<li>testtest</li>-->
            <!--<li>testtest</li>-->
          <!--</ul>-->
          <!--<a href="javascript:;" class="message-footer">查看所有通知</a>-->
        <!--</div>-->
        <!--<div slot="reference">-->
          <!--<i class="el-icon-message"></i>-->
          <!--<el-badge :value="1" class="item" type="primary">-->
            <!--<el-button size="small">通知</el-button>-->
          <!--</el-badge>-->
        <!--</div>-->
      <!--</el-popover>-->
      <!--<span>-->
      <!--<i class="el-icon-bell"></i>-->
      <!--<el-badge :value="1" class="item">-->
        <!--<el-button size="small">公告</el-button>-->
      <!--</el-badge>-->
      <!--</span>-->
      <!--<span>-->
      <!--<img-->
        <!--src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA8UlEQVQ4T7XSIUulURAG4OctJhUEwSYoGNTNazcrWIQ1GASbxWbWssm2mEyajII/wCrY1I1usIhVLZaRC3vlU7zeDy6eemaeM3NmYsCTXvlVtYFtzOAKO0nOP8Z/ClTVJg6wjwusYg0/k1w2kV7AA/aS/OkGV9UxxpIsfQlU1RRuMZnkrgGs4DDJeD9gDjcYTfLYABZxmmSkJ1BV61jAFn7jpRE8jV/YxVG3urc/qKoJ3Lec6r8kHVATmMXflsBzkuGPQLf3Nsb3APO4bvM8Pq3gx/+VbWMM3MJTdx+aUxjCCTob1++cJVl+N4V+Gb3uXwE401gRqrTSIAAAAABJRU5ErkJggg=="/>-->
      <!--<el-badge class="item" type="primary">-->
        <!--<el-button size="small">修改密码</el-button>-->
      <!--</el-badge>-->
      <!--</span>-->
      <!--<span>-->
      <!--<img-->
        <!--src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABCUlEQVQ4T6WSzSpFYRSGn2fiBpgoN0F+RpROJsJYlGKkjNzIGTJSirgAx0QSZaAOrsH8lAswsPTlfOz2OXvbJ99o1VrrWW/v+8k/n1X7EbEDrPb7HfV82OxQQEQcA/ulhSP1oAwZAETEAvBUoWxOfS72hgH2gJMKwK56+hegTsG82q0FpGZE3AKtkop7dbnWg4hYA2aBV2ADWAc+gSugA8wAXfU6g348iIhtIEcVwAVwBqSZFOlmv067W+plKoqAdHW64b96UZPSb0BETAC9hst5bFx9z4Al4GFEwKL6mAErwM2IgJZ6lwGTwBsw1hDyAUypvaKJKbbDorEVsBRrW02x/qbQ8PLA2BcICE8Ri86iRAAAAABJRU5ErkJggg=="/>-->
      <!--<el-badge class="item" type="primary">-->
        <!--<el-button size="small">修改密码</el-button>-->
      <!--</el-badge>-->
      <!--</span>-->
      <!--<span>-->
      <!--<img-->
        <!--src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABPElEQVQ4T6WSv0uVYRiGr4sGR5cElWpxkQOiiINrW3tb4L+gRuKPwcHdwUncFVwigigMaWtwEcTFIRAcHCtoMoLueOWcw3cOn9850Ds+7/1ez/0+9yP/eWx6n+RCnWvSDAJEbdR0L5OMA6fArPq3dE3SBSSZAo6A5+pdx1UV8Am4VDc7l32Aov0AfFNf9wCSzAMfgWfqnzpA21FxeQ08UX+U2r2DJFtAS12qDizJqrrXVzsDdtW3VcBugalvBqWa5D1woh5UARvt4b0aAnAFbPc7mAG+AE/V3w9BkiwAX4EJ9WfXQXsO5U+36kodIMkocA68U9frYnxcYgQ+A2vq90oaL4AdYARYrN2DtotJYB8oD0q3EukYMA0cAsvqr6rD2jVN0gJeAo+AsnXH6k3d1xr3fFAiPUMcRlyn+QdQQn4RIFpe+QAAAABJRU5ErkJggg=="/>-->
      <!--<el-badge class="item" type="primary">-->
        <!--<el-button size="small">修改密码</el-button>-->
      <!--</el-badge>-->
      <!--</span>-->
    <!--</div>-->
    <div class="h-left">
      <span v-if="visualImg" class="logo-mini">
        <img src="../assets/img/logo.png" style="width:40px;height:auto;">
      </span>
      <span v-if="!visualImg" class="logo-lg">
        <img src="../assets/img/logo.png" style="height: 32px;width:auto;margin: 10px 0 0 50px;">
      </span>
    </div>
    <el-menu
            class="el-menu-header"
            mode="horizontal"
            router :default-active="$route.path"
            background-color="rgb(52, 55, 68)"
            text-color="#fff"
            active-text-color="#ffd04b"
    >
      <el-menu-item
              v-for="value in this.menuData"
              :key="value.id"
              :index="value.navigateUrl"
              @click="handleSelect(value)"
      >
        {{value.name}}
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">超级管理员</template>
        <el-menu-item index="2-1">个人资料</el-menu-item>
        <el-menu-item index="2-2">退出</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
    import api from '@/api/api';
    import http from '@/http'
    import Bus from './Bus.js'

    export default {
    data() {
      return {
          userInfo: null,
          userName: "",
          activeIndex: '',
          visualImg:false,
          menuData:[]
      };
    },
      mounted: function () {
          this.$http2.get(api.findMenuByUserAndParentId+'?userId=1', {
          })
              .then(data => {
                  this.menuData = data.data;
              }).catch(() => {
              console.log("失败");
          });
      },
    methods: {
        handleSelect(item) {
            Bus.$emit('on', item);
//            console.log(key, keyPath);
        }
    },
  };
</script>
<style lang="less">
  .el-menu.el-menu--horizontal{
    border-bottom: 0!important;
    height: 50px;
  }
  .el-menu--horizontal>.el-submenu .el-submenu__title,.el-menu--horizontal>.el-menu-item{
    height: 50px!important;
    line-height: 50px!important;
  }
  .el-menu-header{
    float: right;
  }
  .header {
    background-color: #343744;
    border: 0;
    height: 50px;
    .h-left{
      float: left;
    }
    .h-right {
      float: right;
      margin-top: 10px;
      > span {
        color: #fff;
        display: inline-block;
        margin-right: 20px;
        img, i {
          vertical-align: middle;
        }
      }
    }
    .el-button--small, .el-button--small.is-round {
      padding: 9px 6px 9px 0;
      background: transparent;
      border: 0;
      color: #fff;
    }
    .el-badge__content {
      border-radius: 4px;
      padding: 0 4px;
      margin-top: 6px;
      height: 14px;
      line-height: 14px;
      border: 0;
    }
  }
  .message-footer{
    text-align: center;
    display: block;
    text-decoration: none;
  }
  .message-ul li{
    height: 40px;
    line-height: 40px;
  }
  .message-ul li:hover{
    background: #f4f4f4;
    cursor: pointer;
  }
</style>
