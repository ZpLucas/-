<template>
    <div class="new">
      <div class="header">
        <a href="javascript:;">
          <span class="new_first">新品首发</span>
          <div class="see_all">
            <span>查看全部</span>
            <i class="icon"></i>
          </div>
        </a>
      </div>
      <div class="carousel">

      </div>
    </div>
</template>

<script>
  export default {}
</script>

<style lang="less" rel="stylesheet/less">
  @import "../../common/less/mixins";
  .new{
    margin-top: 20/@rem;
    background-color: #fff;
    .header{
      width: 100%;
      height:260/@rem ;
      background-image: url("./images/bg.png");
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
          background-color: #D8E5F1;
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
    .carousel{
      height: 414/@rem;
    }
  }
</style>
