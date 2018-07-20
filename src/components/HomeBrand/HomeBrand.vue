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
         <li class="item">
           <h4 class="title">CK制造商</h4>
           <div class="money">25元起</div>
         </li>
         <li class="item">
           <h4 class="title">CK制造商</h4>
           <div class="money">25元起</div>
         </li>
         <li class="item">
           <h4 class="title">CK制造商</h4>
           <div class="money">25元起</div>
         </li>
         <li class="item">
           <h4 class="title">CK制造商</h4>
           <div class="money">25元起</div>
         </li>
       </ul>
     </div>
   </div>
</template>

<script>
  export default {}
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
          display: inline-block;
          float: left;
          //margin-right: 8/@rem;
          margin-bottom: 8/@rem;
          width: 355/@rem;
          height: 236/@rem;
          background-color: #f4f4f4;
          background-image: url("./images/brand/01.png");
          background-size: 100% 100%;
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
