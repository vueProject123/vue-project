<template>
  <div id="app">
    
    <router-view></router-view>
    
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
	/*编写通用样式*/
	@import  './style/_reset.scss';
	@import  './style/_common.scss';
	@import  './style/_base.scss';
</style>
