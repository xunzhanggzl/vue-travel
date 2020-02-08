<template>
  <div>
    <home-header :city="city"></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <div class="line"></div>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'

import axios from 'axios'

export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons
  },
  data () {
    return {
      city: '',
      swiperList: [],
      iconList: []
    }
  },
  methods: {
    getData () {
      axios.get('/data/index.json')
        .then((res) => {
          res = res.data
          this.city = res.city
          if (res.ret) {
            const data = res.data
            this.swiperList = data.swiperList
            this.iconList = data.iconList
          }
        })
    }
  },
  mounted () {
    this.getData()
  }
}
</script>

<style lang="stylus" scoped>
  .line
    height 0.1rem
    background-color: rgb(245, 245, 245)
</style>
