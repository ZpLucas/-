<template>
    <div class="wrap">
      <div class="set-img">
        <img  src="./images/top1.jpg" >
        <img  src="./images/top2.jpg" >
      </div>
      <div class="set-img">
        <img src="./images/bottom.jpg">
        <a href="javascript:;"></a>
        <router-link to="/home">
          <a href="javascript:;" class="go"></a>
        </router-link>
      </div>
    </div>
</template>

<script>
  export default {}
</script>

<style lang="less" rel="stylesheet/less">
  @import "../../common/less/mixins";
  body{
    background-color: #EEEEEE;
  }
  .wrap{
    width: 750/@rem;
    height: 100%;
    margin: 0 auto;
    background-color: #EEEEEE;
    .set-img{
      position: relative;
      &>img{
        width:750/@rem ;
        vertical-align: top;
      }
      .go{
        position: absolute;
        left:3rem;
        top:3rem;
        width:4rem;
        height: 0.5rem;
        display: block;
      }
    }
  }
</style>
