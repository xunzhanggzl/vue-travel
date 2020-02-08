<template>
  <div class="icons">
    <div class="icon" v-for="icon in iconLists" :key="icon.id">
      <img :src="icon.iconUrl" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconLists: [
        {
          id: 1,
          iconUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb65daec7ef7b52cc785f88f78efba37.png?thumb=1&w=144&h=152'
        },
        {
          id: 2,
          iconUrl: 'https://i8.mifile.cn/v1/a1/eb5024fe-dfe3-6e53-3e18-675bef5fa06e.webp'
        },
        {
          id: 3,
          iconUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8a3d25fdc76472277b6d342d12aa7ebe.jpg?thumb=1&w=144&h=152'
        },
        {
          id: 4,
          iconUrl: 'https://i8.mifile.cn/v1/a1/e8bc849a-0a3b-21a0-6810-7da3a3903dee.webp'
        },
        {
          id: 5,
          iconUrl: 'https://i8.mifile.cn/v1/a1/7dbcbf87-6a58-adb6-2f3f-bb3dae3e9c80.webp'
        },
        {
          id: 6,
          iconUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bc1c677a6e10e42d00fb0a063662fbf9.png?thumb=1&w=144&h=152'
        },
        {
          id: 7,
          iconUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9ea68dee2bfa0e55a82236b0d968e975.png?thumb=1&w=144&h=152'
        },
        {
          id: 8,
          iconUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/96c780016ea196743905dc93f9249c39.png?thumb=1&w=144&h=152'
        },
        {
          id: 9,
          iconUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9425031cdd7af22d9a23a5ae16d1f57c.jpg?thumb=1&w=144&h=152'
        },
        {
          id: 10,
          iconUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f11f9df6b0b0b428f8c8fc3267131830.png?thumb=1&w=144&h=152'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .icons
    display flex
    flex-wrap wrap
    .icon
      flex 0 0 20%
      img
        width 100%
</style>
