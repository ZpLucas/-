<template>
   <div class="make">
     <div class="brand">
       <a href="">
         <span class="text">品牌制造商直供</span>
         <i class="icon"></i>
       </a>
     </div>
     <div class="foot">
       <ul class="list">
         <li class="item" v-for="(goods,index) in goodsList.slice(0,4)" :key="index">
           <div class="flutter">
             <h4 class="title">{{goods.name}}</h4>
             <div class="money">{{goods.floorPrice}}元起</div>
           </div>
           <img :src="goods.picUrl" alt="">
         </li>
       </ul>
     </div>
   </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    mounted(){
      this.$store.dispatch('getHeadGoodsList')
    },
    computed:{
      ...mapState(['goodsList'])
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import "../../common/less/mixins";
  .make{
    background-color: #fff;
    padding-bottom: 8/@rem;
    font-size: .42667rem;
    .brand{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 110/@rem;
      .text{
        font-size: .42667rem;
        color: #333;
        vertical-align: middle;
      }
      .icon{
        display: inline-block;
        width: 30/@rem;
        height: 30/@rem;
        background-image: url("./images/right.png");
        background-size: 100% 100%;
        vertical-align: middle;
      }
    }
    .foot{
      padding-bottom: 8/@rem;
      .list{
        margin:0 14/@rem;
        height:476/@rem;
        .item{
          position: relative;
          display: inline-block;
          float: left;
          margin-bottom: 8/@rem;
          width: 355/@rem;
          height: 236/@rem;
          background-color: #f4f4f4;
          .flutter{
            position: absolute;
            top:14/@rem ;
            left: 14/@rem;
          }
          img{
            width: 100%;
            height: 100%;
          }
          &:nth-child(1){
            margin-right: 8/@rem;
          }
          &:nth-child(3){
            margin-right: 8/@rem;
          }
          .title{
            text-overflow : ellipsis;
            white-space :nowrap;
            overflow : hidden;
            margin-top: .26667rem;
            margin-left: .26667rem;
            color : #333;
            font-size : 28/@rem ;
            line-height :34/@rem;
            margin-bottom : 6/@rem;
          }
          .money{
            margin-left: .26667rem;
            font-size: 24/@rem;
          }
        }
      }
    }
  }
</style>
