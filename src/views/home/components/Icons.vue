<template>
  <div class="icons">
    <div class="icon" v-for="icon in iconList" :key="icon.id">
      <img :src="icon.imgUrl" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    iconList: Array
  }
}
</script>

<style lang="stylus" scoped>
  .icons
    height 3.2rem
    display flex
    flex-wrap wrap
    .icon
      flex 0 0 20%
      img
        width 100%
</style>
