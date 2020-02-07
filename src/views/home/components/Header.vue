<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      城市
      <span class="iconfont">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'; // 引入CSS文件时，需要在代表src目录的@前面加上~
  .header
    display flex
    line-height 0.86rem
    background $bgColor
    color #fff
    .header-left
      width 0.64rem
      text-align center
    .header-input
      flex 1
      height 0.64rem
      line-height 0.64rem
      margin-top 0.11rem
      padding-left 0.2rem
      background #fff
      border-radius 0.1rem
      color #333
    .header-right
      width 1.24rem
      text-align center
</style>
