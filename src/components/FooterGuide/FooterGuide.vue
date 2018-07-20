<template>
  <footer class="foot_tab">
    <div class="item" @click="goto('/home')">
      <span class="item_icon home" :class="{on: isCurrent('/home')}"></span>
      <span class="letter" :class="{on: isCurrent('/home')}">首页</span>
    </div>
    <div class="item" @click="goto('/seeing')">
      <span class="item_icon seeing" :class="{on: isCurrent('/seeing')}"></span>
      <span class="letter" :class="{on: isCurrent('/seeing')}">识物</span>
    </div>
    <div class="item" @click="goto('/sort')">
      <span class="item_icon sort" :class="{on: isCurrent('/sort')}"></span>
      <span class="letter" :class="{on: isCurrent('/sort')}">分类</span>
    </div>
    <div class="item shop" @click="goto('/cart')">
      <span class="item_icon cart" :class="{on: isCurrent('/cart')}"></span>
      <span class="letter" :class="{on: isCurrent('/cart')}">购物车</span>
    </div>
    <div class="item" @click="goto('/person')">
      <span class="item_icon person" :class="{on: isCurrent('/person')}"></span>
      <span class="letter" :class="{on: isCurrent('/person')}">个人</span>
    </div>
  </footer>
</template>

<script>
  export default {
    methods:{
      goto(path){
        this.$router.replace(path)
      },
      isCurrent(path){
        return this.$route.path === path
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import "../../common/less/mixins";
  .foot_tab{
    font-size: 0rem;
    display: flex;
    position: fixed;
    left: 0;
    bottom:0;
    width: 100%;
    height: 98/@rem;
    justify-content: space-around;
    align-items: center;
    flex-flow: row nowrap;
    background-color: #fafafa;
    border-top: 1px solid #d9d9d9;
    .item{
      position: relative;
      text-align: center;
      width:48/@rem ;
      &.shop{
        width: 72/@rem;
      }
      .item_icon{
        display: inline-block;
        vertical-align: middle;
        width: 40/@rem;
        height: 40/@rem;
        background-image: url("./images/footer.png");
        background-size: 40/@rem 490/@rem;
        background-repeat: no-repeat;
        &.home{
          background-position: 0 -250/@rem;
          &.on{
            background-position: 0 -200/@rem;
          }
        }
        &.seeing{
          background-position: 0 -350/@rem;
          &.on{
            background-position: 0 -300/@rem;
          }
        }
        &.sort{
          background-position: 0 -150/@rem;
          &.on{
            background-position: 0 -100/@rem;
          }
        }
        &.cart{
          background-position: 0 -50/@rem;
          &.on{
            background-position: 0 0;
          }
        }
        &.person{
          background-position: 0 -450/@rem;
          &.on{
            background-position: 0 -400/@rem;
          }
        }
      }
      .letter{
        display: block;
        color: #666;
        line-height: 1;
        font-size: .32rem;
        &.on{
          color: #b4282d;
        }
      }
    }
  }
</style>
