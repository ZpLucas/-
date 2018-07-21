<template>
  <div class="item">
    <div class="time_all">
      <div class="time">
        <div class="shopping">严选限时购</div>
        <div class="watch">
          <span class="hours">00</span>
          <span class="colon">:</span>
          <span class="mins">22</span>
          <span class="colon">:</span>
          <span class="seconds">02</span>
        </div>
        <div class="next">
          <span>下一场</span>
          <span>12:00</span>
          <span>开始</span>
        </div>
      </div>
      <div class="shop">
        <img :src="TimeShop.primaryPicUrl" alt="">
        <div class="price">
          <div class="price_now">
            <span class="money_1">￥</span>
            <span>{{TimeShop.activityPrice }}</span>
          </div>
          <div class="price_before">
            <span class="money_2">￥</span>
            <span>{{TimeShop.originPrice }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="go_watch">
      <img src="./images/welfare/01.jpg" alt="">
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState(['TimeShop'])
    },
    mounted(){
      this.$store.dispatch('getTimeShops')
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
    @import "../../common/less/mixins";
    .item{
      .time_all{
        margin-top: 20/@rem;
        height: 380/@rem;
        padding: .4rem .53333rem .4rem .74667rem;
        background: #fff;
        display: flex;
        .time{
          width: 320/@rem;
          .shopping{
            font-size: .48rem;
            line-height: .48rem;
            margin-top:  1.06667rem;
            margin-bottom: .32rem;
            color: #333;
            letter-spacing: .16rem;
          }
          .watch{
            margin-top: 20/@rem;
            .hours{
              display: inline-block;
              width: 62/@rem;
              height: 56/@rem;
              background-color: #444;
              color: #fff;
              font-size: .42667rem;
              text-align: center;
              line-height: 56/@rem ;
            }
            .mins{
              display: inline-block;
              width: 62/@rem;
              height: 56/@rem;
              background-color: #444;
              color: #fff;
              font-size: .42667rem;
              text-align: center;
              line-height: 56/@rem ;
            }
            .seconds{
              display: inline-block;
              width: 62/@rem;
              height: 56/@rem;
              background-color: #444;
              color: #fff;
              font-size: .42667rem;
              text-align: center;
              line-height: 56/@rem ;
            }
          }
          .next{
            margin-top: 40/@rem;
            display: flex;
            font-size: .32rem;
            line-height: .32rem;
            span{
              margin-right: 10/@rem;
            }
          }

        }
        .shop{
          width: 320/@rem;
          height: 320/@rem;
          position: relative;
          img{
            width: 100%;
            height: 100%;
          }
          .price{
            position: absolute;
            right: .26667rem;
            bottom: .48rem;
            width: 96/@rem;
            height: 96/@rem;
            border-radius: 50%;
            background-color: rgba(244,143,24,.95);
            color: #fff;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            .price_now{
              font-size: .37333rem;
              line-height: .37333rem;
              height: .37333rem;
            }
            .price_before{
              font-size: .37333rem;
              line-height: .37333rem;
              height: .37333rem;
            }
          }
        }
      }
      .go_watch{
        margin-top: 20/@rem;
        width: 100%;
        height: 300/@rem;
        img{
          width: 100%;
          height: 100%;
        }
      }

    }

</style>
