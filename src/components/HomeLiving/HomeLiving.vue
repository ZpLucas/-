<template>
    <div>
      <div class="house"  v-if="cargo"  v-for="(goods,index) in cargo" :key="index">
        <div class="goodThings">{{goods.name}}好物</div>
        <ul class="list">
          <li class="item"  v-for="(item,index1) in goods.itemList" :key="index1">
            <div class="img_list">
              <div class="img_size">
                <img :src="item.primaryPicUrl" alt="">
              </div>
              <div class="box">{{item.name}}</div>
            </div>
            <div class="foot">
              <div class="foot_l">{{item.simpleDesc}}</div>
              <div class="money">￥{{item.retailPrice}}</div>
            </div>
          </li>
          <li class="last">
            <div class="manyThings">
              <div class="">更多居家好物</div>
              <i></i>
            </div>
          </li>
        </ul>
      </div>

    </div>
</template>

<script>
  import {mapState} from  'vuex'
  export default {
    computed:{
      ...mapState(['cargo'])
    },
    mounted(){
      this.$store.dispatch('getShops')
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import "../../common/less/mixins";
  .house{
    margin-bottom: 20/@rem;
    background-color: #fff;
    .goodThings{
      height: 120/@rem;
      text-align: center;
      line-height: 120/@rem;
      font-size: .37333rem;
    }
    .list{
      overflow: hidden;
      .item{
        box-sizing: border-box;
        float: left;
        width: 50%;
        height: 537/@rem;
        background-color: #fff;
        padding: 0rem 0.26666666666666666rem 0.44rem 0.13333333333333333rem;
        &:nth-child(2n+1){
          padding: 0 .13333rem .44rem .26667rem;
        }
        .img_list{
          background-color: #F4F4F4;
          border-radius: 0 0 .05333rem .05333rem;
          .img_size{
            width: 345/@rem;
            height: 345/@rem;
            img{
              width: 100%;
              height: 100%;
            }
          }
          .box{
            box-sizing: border-box;
            width: 345/@rem;
            height: 69/@rem;
            background-color: #F1ECE2;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            padding: .26667rem .13333rem;
            font-size: .32rem;
            color: #9F8A60;
          }
        }
        .foot{
          .foot_l{
            height: 48/@rem;
            margin-top: .13333rem;
            padding: 0 .13333rem;
            line-height: .64rem;
            text-align: left;
            font-size: .37333rem;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            color: #333;
          }
          .money{
            line-height: 1;
            font-size: .42667rem;
            text-align: left;
            color: #b4282d;
            padding: 0 .13333rem;
          }
        }
      }
      .last{
        box-sizing: border-box;
        float: left;
        width: 50%;
        height: 537/@rem;
        background-color: #fff;
        padding: 0rem 0.26666666666666666rem 0.44rem 0.13333333333333333rem;
        &:nth-child(2n+1){
          padding: 0 .13333rem .44rem .26667rem;
        }
        .manyThings{
          background-color: #F4F4F4;
          border-radius: 0 0 .05333rem .05333rem;
          width: 345/@rem;
          height: 416/@rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-sizing: border-box;
          padding: 60/@rem 0;
          justify-content:space-around;
          i{
            width: 67/@rem;
            height: 67/@rem;
            background-image: url("./images/jujia/right.png");
            background-size: 100% 100%;
          }
        }

      }
    }
  }
</style>
