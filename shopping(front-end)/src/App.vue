<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide v-if="$route.meta.showFooter"></FooterGuide>
  </div>

</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'

export default {
  name: 'App',
  components:{
    FooterGuide
  },
  methods:{
  },
  created(){
    this.$store.dispatch('getCategory')
    this.$store.dispatch('getShops')
    this.$store.dispatch('getdetailShop')
    this.$store.dispatch('getSession')
    this.$store.dispatch('getshopData')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  border:none;
  margin-top: 51px;
  width:100%;
  height:100%;
}
</style>
