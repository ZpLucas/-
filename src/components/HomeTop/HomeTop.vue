<template>
  <!--头部导航-->
    <div class="nav-header">
      <header>
        <a href="javascript:;" class="logo"></a>
        <div class="search">
          <i class="icon"></i>
          <span class="search-content">搜索商品，共97565款好物</span>
        </div>
      </header>
      <div class="scroll">
        <div class="scroll-container">
          <div class="list">
            <div class="tab active">
              <span class="txt">推荐</span>
            </div>
            <div class="tab">
              <span class="txt">推荐</span>
            </div>
            <div class="tab">
              <span class="txt">推荐</span>
            </div>
            <div class="tab">
              <span class="txt">推荐</span>
            </div>
            <div class="tab">
              <span class="txt">推荐</span>
            </div>
            <div class="tab">
              <span class="txt">推荐</span>
            </div>
            <div class="tab">
              <span class="txt">推荐</span>
            </div>
            <div class="tab">
              <span class="txt">推荐</span>
            </div>
            <div class="tab">
              <span class="txt">推荐</span>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    mounted(){
      this.$nextTick(() =>{
        new BScroll('.scroll-container',{
          scrollX: true,
          scrollY:false,
          click: true
        })
      })
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import "../../common/less/mixins";
  .nav-header{
    z-index: 5;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    background-color: #fff;
    header{
      display: flex;
      align-items: center;
      padding: 18/@rem 30/@rem;
      .logo{
        width: 138/@rem;
        height: 40/@rem;
        display: inline-block;
        background-image: url("./images/logo.png");
        background-size:cover ;
        background-position: center;
      }
      .search{
        display: flex;
        flex-grow: 1;
        align-items: center;
        justify-content: center;
        height: 56/@rem;
        width: 532/@rem;
        font-size: 28/@rem;
        background-color: #ededed;
        border-radius: 8/@rem;
        margin-left: 20/@rem;
        .icon{
          display: inline-block;
          vertical-align: middle;
          background-image: url("./images/search.png");
          background-repeat: no-repeat;
          background-size: 100% 100%;
          width: 28/@rem;
          height: 28/@rem;
          margin-right: 10/@rem;
        }
        .search-content{
          display: inline-block;
          color: #666;
        }
      }
    }
    .scroll{
      background-color: #fff;
      height: 60/@rem;
      line-height: 60/@rem;
      width: 100%;
      font-size: 28/@rem;
      .scroll-container{
        overflow: hidden;
        display: flex;
        .list{
          display: flex;
          flex-shrink: 0;
          padding: 0 30/@rem ;
          background-color: #fff;
          .tab{
            margin-left: 48/@rem;
            position: relative;
            &.active{
              color: #b4282d;
              margin-left: 0;
              &::after{
                content: '';
                position: absolute;
                left: 0;
                bottom: 0;
                width: 100%;
                height: .05333rem;
                background-color: #b4282d;
              }
            }
            .txt{
              padding: 0 16/@rem;
              font-size: 28/@rem;
              text-align: center;
            }
          }
        }
      }
    }
  }
</style>
