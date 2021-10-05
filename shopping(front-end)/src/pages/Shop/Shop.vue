// 商家模块
<template>
  <div class="shopall">
    <!-- 商家页面导航栏 -->
    <Shopnav></Shopnav>
    <!-- 缓存商家导航组件的数据 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
// 导入导航栏组件
import Shopnav from '../Shop/Shopnav/Shopnav'

export default {
  name: '',
  data () {
    return {}
  },
  components:{
    Shopnav
  },
  beforeCreate(){
    // 发送商家信息数据请求
    this.$store.dispatch('getshopData')
  },
  created () {
  },
  computed: {},
  watch: {},
  methods: {}
}
</script>

<style src="./Shop.css"></style>
<style lang="" scoped>
.shopall{
  position:fixed;
  width:100%;
  top:0;
  left:0px;
  border:0;
}
</style>
