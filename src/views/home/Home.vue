<template>
  <div>
    <home-header></home-header>
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

import { mapState } from 'vuex'

export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons
  },
  data () {
    return {
      lastCity: '',
      swiperList: [],
      iconList: []
    }
  },
  methods: {
    getData () {
      axios.get('/data/index.json')
        .then((res) => {
          res = res.data
          if (res.ret) {
            const data = res.data
            this.swiperList = data.swiperList
            this.iconList = data.iconList
          }
        })
    }
  },
  computed: {
    ...mapState(['city'])
  },
  mounted () {
    this.lastCity = this.city
    this.getData()
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getData()
    }
  }
}
</script>

<style lang="stylus" scoped>
  .line
    height 0.1rem
    background-color: rgb(245, 245, 245)
</style>
