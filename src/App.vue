<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
  components:{
    FooterGuide
  }
}
</script>

<style lang="less" rel="stylesheet/less">

</style>
