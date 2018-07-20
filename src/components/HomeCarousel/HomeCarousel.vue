<template>
  <div class="wrap">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="./images/01.jpg" alt=""></div>
        <div class="swiper-slide"><img src="./images/02.jpg" alt=""></div>
        <div class="swiper-slide"><img src="./images/03.jpg" alt=""></div>
        <div class="swiper-slide"><img src="./images/04.jpg" alt=""></div>
        <div class="swiper-slide"><img src="./images/05.jpg" alt=""></div>
        <div class="swiper-slide"><img src="./images/06.jpg" alt=""></div>
      </div>
      <!--如果需要分页器-->
      <div class="swiper-pagination"></div>
    </div>
    <div class="footer">
      <div class="item">
        <i class="icon"></i>
        <span class="word">网易自营品牌</span>
      </div>
      <div class="item">
        <i class="icon"></i>
        <span class="word">30天无忧退货</span>
      </div>
      <div class="item">
        <i class="icon"></i>
        <span class="word">48小时快速退款</span>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import 'swiper/dist/js/swiper.min'
  export default {
    mounted(){
      this.$nextTick(()=>{
        new Swiper ('.swiper-container', {
          loop: true,
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          },
        })
      })
    }

  }
</script>

<style lang="less" rel="stylesheet/less">
    @import "../../common/less/mixins";
    .wrap{
      padding-bottom: 20/@rem;
      margin-top: 152/@rem;
      .swiper-container{
        height:400/@rem;
        .swiper-wrapper{
          height: 100%;
          img{
            width: 100%;
            height: 100%;
          }
        }

      }
      .footer{
        display: flex;
        align-items: center;
        justify-content: space-around;
        background-color: #fff;
        height: 72/@rem;
        padding: 0 .4rem;
        font-size: .32rem;
        .item{
          .icon{
            display: inline-block;
            vertical-align: middle;
            width: 32/@rem;
            height: 32/@rem;
            background-image: url("./images/icon/arrow.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
          }
          .word{
            vertical-align: middle;
          }
        }
      }
    }
</style>
