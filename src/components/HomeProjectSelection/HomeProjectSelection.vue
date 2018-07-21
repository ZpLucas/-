<template>
    <div class="project">
      <div class="selection">
        <span>专题精选</span>
        <i></i>
      </div>
      <div class="wraper">
        <div class="ssss">
          <div class="scroll">
            <div class="item" v-for="(item,index) in TopicList" :key="index">
              <div class="img_food">
                <img :src="item.itemPicUrl" alt="">
              </div>
              <div class="title">
                <h4 class="introduce">{{item.title}}</h4>
                <span class="money">{{item.priceInfo}}元起</span>
              </div>
              <div class="talk">{{item.title}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from  'vuex'
  export default {
    computed:{
      ...mapState(['TopicList'])
    },
    mounted(){
      this.$store.dispatch('getTopicList',()=>{
        this.$nextTick(() =>{
          new BScroll('.ssss',{
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
  .project{
    margin-top: 20/@rem;
    margin-bottom: 20/@rem;
    .selection{
      height: 110/@rem;
      text-align: center;
      line-height: 110/@rem;
      font-size:.42667rem;
      background-color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      span{
        display: inline-block;
        vertical-align: middle;
      }
      i{
        width: 30/@rem;
        height: 30/@rem;
        margin-left: 10/@rem;
        margin-top: 2px;
        display: inline-block;
        background-image: url("./images/right.png");
        background-size: 100% 100%;
        vertical-align: middle;
      }
    }
    .wraper{
      display: flex;
      .ssss{
        display: flex;
        overflow: hidden;
        width: 750/@rem;
        background-color: #fff;
        .scroll{
          height: 453/@rem;
          padding: 0 .4rem .48rem;
          background-color: #fff;
          display: flex;
          .item{
            margin-right: 20px;
            width: 575/@rem;
            height: 417/@rem;
            .img_food{
              width: 575/@rem;
              height: 322/@rem;
              img{
                width: 100%;
                height: 100%;
                border-radius: 20/@rem;
              }
            }
            .title{
              margin-top: 20/@rem;
              overflow: hidden;
              .introduce{
                float: left;
                width: 410/@rem;
                height: 41/@rem;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                font-size: .37333rem;
              }
              .money{
                display: block;
                float: right;
                color:#b4282d ;
                font-size: .37333rem;
              }
            }
            .talk{
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              width: 7.66667rem;
              font-size: .32rem;
              color: #7F7F7F
            }
          }
        }
      }
    }


  }
</style>
