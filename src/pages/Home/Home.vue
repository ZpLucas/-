<template>
    <div>
      <!--头部导航-->
      <HomeTop/>
      <!--轮播图-->
      <HomeCarousel/>
      <!--新品发布-->
      <HomeBrand/>
      <!--新品首发-->
      <NewFirst/>
    </div>
</template>

<script>
  import HomeTop from '../../components/HomeTop/HomeTop.vue'
  import HomeCarousel from '../../components/HomeCarousel/HomeCarousel'
  import HomeBrand from '../../components/HomeBrand/HomeBrand.vue'
  import NewFirst from '../../components/NewFirst/NewFirst.vue'
  export default {
    components:{
      HomeTop,
      HomeCarousel,
      HomeBrand,
      NewFirst
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import "../../common/less/mixins";
</style>
