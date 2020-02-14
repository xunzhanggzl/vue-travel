<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      搜索手机
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{city}}
        <span class="iconfont">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
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
      color #fff
</style>
