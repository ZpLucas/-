<template>
    <div>
      <!--头部导航-->
      <HomeTop/>
      <!--轮播图-->
      <HomeCarousel/>
      <!--品牌直供-->
      <HomeBrand/>
      <!--新品首发-->
      <NewFirst/>
      <!--人气推荐-->
      <HomePeople/>
      <!--严选限时购，福利社-->
      <HomeTimeShopping/>
      <!--专题精选-->
      <HomeProjectSelection/>
      <!--居家好物-->
      <HomeLiving/>
    </div>
</template>

<script>
  import HomeTop from '../../components/HomeTop/HomeTop.vue'
  import HomeCarousel from '../../components/HomeCarousel/HomeCarousel'
  import HomeBrand from '../../components/HomeBrand/HomeBrand.vue'
  import NewFirst from '../../components/NewFirst/NewFirst.vue'
  import HomePeople from '../../components/HomePeople/HomePeople.vue'
  import HomeTimeShopping from '../../components/HomeTimeShopping/HomeTimeShopping.vue'
  import HomeProjectSelection from '../../components/HomeProjectSelection/HomeProjectSelection.vue'
  import HomeLiving from '../../components/HomeLiving/HomeLiving.vue'
  export default {
    components:{
      HomeTop,
      HomeCarousel,
      HomeBrand,
      NewFirst,
      HomePeople,
      HomeTimeShopping,
      HomeProjectSelection,
      HomeLiving
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import "../../common/less/mixins";
</style>
