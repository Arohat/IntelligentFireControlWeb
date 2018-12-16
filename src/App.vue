<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html,body,#app{
  height:100%;
  width:100%;
  margin:0;
  padding:0;
}
ul{
    list-style: none;
    margin: 0;
    padding: 0;
}
</style>