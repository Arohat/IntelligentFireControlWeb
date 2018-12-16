<template>
  <div class="cloud-home">
    <div class="layout-header">
      <Header></Header>
    </div>
    <div class="layout-container">
      <div class="layout-left">
        <SideBar v-show="showSideBar"></SideBar>
      </div>
      <div class="layout-right">
        <Container>
          <router-view></router-view>
        </Container>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../common/Header";
import SideBar from "../common/SideBar";
import Container from "../common/Container";
import Bus from '../Bus.js'

export default {
  name: "CloudHome",
  data() {
    return {
        showSideBar:true
    };
  },
    mounted: function () {
        Bus.$on('on', (msg) => {
            console.log(msg)
            if(msg.navigateUrl!='index'){
                this.showSideBar = true
            }else {
                this.showSideBar = false
            }
        });
      if(window.location.hash!='#/index'){
          this.showSideBar = true
      }else {
          this.showSideBar = false
      }
    },
  components: {
    Header ,
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
