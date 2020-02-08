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
          imgUrl: 'https://ossweb-img.qq.com/upload/adw/image/20200207/a111592dbd4739f2c571d4ae4e19f247.jpeg'
        },
        {
          id: 2,
          imgUrl: 'https://ossweb-img.qq.com/upload/adw/image/20200201/ba5d308c7286765270a72066e42dadb2.jpg'
        },
        {
          id: 3,
          imgUrl: 'https://ossweb-img.qq.com/upload/adw/image/20200207/322246cf2cb877beb91cd2310f2fb366.jpeg'
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
    height 100%
    // padding-bottom 41.25%
    overflow hidden
    .img-swiper
      width 100%
</style>
