<template>
  <div class="header">
    <div class="h-left">
      <span v-if="visualImg" class="logo-mini">
        <img src="../assets/img/logo.png" style="width:40px;height:auto;">
      </span>
      <span v-if="!visualImg" class="logo-lg">
        <img src="../assets/img/logo.png" style="height: 32px;width:auto;margin: 10px 0 0 50px;">
      </span>
    </div>
    <div class="h-right">
      <el-popover
        width="200"
        placement="bottom"
        trigger="click">
        <div>
          <p>最近一周您有<span>1</span>条通知</p>
          <ul class="message-ul">
            <li>testtest</li>
            <li>testtest</li>
          </ul>
          <a href="javascript:;" class="message-footer">查看所有通知</a>
        </div>
        <div slot="reference">
          <i class="el-icon-message"></i>
          <el-badge :value="1" class="item" type="primary">
            <el-button size="small">通知</el-button>
          </el-badge>
        </div>
      </el-popover>
      <span>
      <i class="el-icon-bell"></i>
      <el-badge :value="1" class="item">
        <el-button size="small">公告</el-button>
      </el-badge>
      </span>
      <span>
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA8UlEQVQ4T7XSIUulURAG4OctJhUEwSYoGNTNazcrWIQ1GASbxWbWssm2mEyajII/wCrY1I1usIhVLZaRC3vlU7zeDy6eemaeM3NmYsCTXvlVtYFtzOAKO0nOP8Z/ClTVJg6wjwusYg0/k1w2kV7AA/aS/OkGV9UxxpIsfQlU1RRuMZnkrgGs4DDJeD9gDjcYTfLYABZxmmSkJ1BV61jAFn7jpRE8jV/YxVG3urc/qKoJ3Lec6r8kHVATmMXflsBzkuGPQLf3Nsb3APO4bvM8Pq3gx/+VbWMM3MJTdx+aUxjCCTob1++cJVl+N4V+Gb3uXwE401gRqrTSIAAAAABJRU5ErkJggg=="/>
      <el-badge class="item" type="primary">
        <el-button size="small">修改密码</el-button>
      </el-badge>
      </span>
      <span>
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABCUlEQVQ4T6WSzSpFYRSGn2fiBpgoN0F+RpROJsJYlGKkjNzIGTJSirgAx0QSZaAOrsH8lAswsPTlfOz2OXvbJ99o1VrrWW/v+8k/n1X7EbEDrPb7HfV82OxQQEQcA/ulhSP1oAwZAETEAvBUoWxOfS72hgH2gJMKwK56+hegTsG82q0FpGZE3AKtkop7dbnWg4hYA2aBV2ADWAc+gSugA8wAXfU6g348iIhtIEcVwAVwBqSZFOlmv067W+plKoqAdHW64b96UZPSb0BETAC9hst5bFx9z4Al4GFEwKL6mAErwM2IgJZ6lwGTwBsw1hDyAUypvaKJKbbDorEVsBRrW02x/qbQ8PLA2BcICE8Ri86iRAAAAABJRU5ErkJggg=="/>
      <el-badge class="item" type="primary">
        <el-button size="small">修改密码</el-button>
      </el-badge>
      </span>
      <span>
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABPElEQVQ4T6WSv0uVYRiGr4sGR5cElWpxkQOiiINrW3tb4L+gRuKPwcHdwUncFVwigigMaWtwEcTFIRAcHCtoMoLueOWcw3cOn9850Ds+7/1ez/0+9yP/eWx6n+RCnWvSDAJEbdR0L5OMA6fArPq3dE3SBSSZAo6A5+pdx1UV8Am4VDc7l32Aov0AfFNf9wCSzAMfgWfqnzpA21FxeQ08UX+U2r2DJFtAS12qDizJqrrXVzsDdtW3VcBugalvBqWa5D1woh5UARvt4b0aAnAFbPc7mAG+AE/V3w9BkiwAX4EJ9WfXQXsO5U+36kodIMkocA68U9frYnxcYgQ+A2vq90oaL4AdYARYrN2DtotJYB8oD0q3EukYMA0cAsvqr6rD2jVN0gJeAo+AsnXH6k3d1xr3fFAiPUMcRlyn+QdQQn4RIFpe+QAAAABJRU5ErkJggg=="/>
      <el-badge class="item" type="primary">
        <el-button size="small">退出系统</el-button>
      </el-badge>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        userInfo: null,
        userName: "",
        visualImg:false
      };
    },
    methods: {},
    mounted() {
    }
  };
</script>
<style lang="less">
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
