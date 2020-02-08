<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="img-swiper" :src="item.imgUrl">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        effect: 'fade',
        loop: true
      },
      swiperList: [
        {
          id: 1,
          imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8a759102ea77eb2ffaa8da6aab6fc2f9.jpg?thumb=1&w=720&h=360'
        },
        {
          id: 2,
          imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/dc4c461bd70ad225a51b0d522c1d75fb.jpg?thumb=1&w=720&h=360'
        },
        {
          id: 3,
          imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2bea16c2f81cb22867afeae3e7467a92.jpg?thumb=1&w=720&h=360'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background #fff
  .wrapper
    width 100%
    height 0
    padding-bottom 50%
    overflow hidden
    .img-swiper
      width 100%
</style>
