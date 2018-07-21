<template>
    <div class="new1">
      <div class="header">
        <a href="javascript:;">
          <span class="new_first">人气推荐 好物精选</span>
          <div class="see_all">
            <span>查看全部</span>
            <i class="icon"></i>
          </div>
        </a>
      </div>

      <div class="goods">
        <ul class="list">
          <li class="item" v-for="(item,index) in PopularItemList" :key="index">
            <div class="img_chat">
              <img :src="item.listPicUrl" alt="">
            </div>
            <span class="big_letter">{{item.name}}</span>
            <span class="little_letter">{{item.simpleDesc}}</span>
            <div class="money">
              <span>￥</span>
              <span>{{item.retailPrice}}</span>
            </div>
          </li>
          <li class="last">
            <div class="last_chat">查看全部</div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    computed:{
      ...mapState(['PopularItemList'])
    },
    mounted(){
      this.$store.dispatch('getPopularItemList',()=>{
        this.$nextTick(() =>{
          new BScroll('.goods',{
            eventPassthrough: 'vertical',
            scrollX: true,
            scrollY:false,
            click: true
          })
        })
      })
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import "../../common/less/mixins";
  .new1{
    margin-top: 20/@rem;
    width: 100%;
    background-color: #fff;
    .header{
      width: 100%;
      height:260/@rem ;
      background-image: url("./images/bg1.png");
      background-size: 100% 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      a{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .new_first{
          font-size:.48rem ;
          color: #8BA0B6;
          text-align: center;
          margin-bottom: 10/@rem;
        }
        .see_all{
          width: 240/@rem;
          height: 56/@rem;
          margin-top: 20/@rem;
          text-align: center;
          background-color: #F4E9CB;
          font-size: .37333rem;
          line-height: .74667rem;
          .icon{
            display: inline-block;
            width: 10/@rem;
            height: 22/@rem;
            background-image: url("./images/right.png");
            background-size: 100% 100%;
          }
        }
      }
    }
    .goods{
      padding-top: 20/@rem;
      height: 480/@rem;
      background-color: #fff;
      overflow: hidden;
      display: flex;
      .list{
        display: flex;
        .item{
          width: 280/@rem;
          margin-left: .4rem;
          .img_chat{
            width:280/@rem;
            height:280/@rem;
            background-color:#f4f4f4 ;
            img{
              width: 100%;
              height: 100%;
            }
          }
          .big_letter{
            padding: 0 10/@rem;
            margin: 10/@rem 0;
            display: block;
            color: #333;
            font-size: 28/@rem;
            line-height: .45333rem;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
          .little_letter{
            display: block;
            font-size: 24/@rem;
            line-height: 30/@rem;
            padding: 0 20/@rem 0 10/@rem;
            margin-bottom: 14/@rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            color: #7f7f7f;
          }
          .money{
            padding: 0 10/@rem;
            font-size: 28/@rem;
            color:#b4282d ;
          }

        }
        .last{
          width: 280/@rem;
          margin-left: .4rem;
          .last_chat{
            width:280/@rem;
            height:280/@rem;
            text-align: center;
            font-size: 28/@rem;
            background-color:#fff;
            border: 4px solid #f4f4f4 ;
            line-height: 280/@rem;

          }
        }
      }
    }
  }
</style>
