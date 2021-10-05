// 附近商家列表组件
<template>
  <div class="neabyBox">

      <!-- 附近商家列表标题 -->
      <div class="neabyTitle">
          <img src="../../../static/img/shop/neaby.png">
          <div class="titleContent">附近商家</div>
        </div>

        <!-- 附近商家列表 -->
      <div class="shopList">

          <!-- 附近商家信息 -->
          <div class="shopItem" v-for="(item1,index1) in $store.state.shops" :key="index1" @click="toshopDetail">
              <div class="shopImg">
                  <img :src="'../../../static/img/shop/('+index1+').jpg'">
              </div>
              <div class="shopContent">
                  <div class="content1">
                      <img src="../../../static/img/shop/brand.png">
                      <div class="shopName">{{item1.name}}</div>
                  </div>
                  <div class="content2">
                      <div class="starBox">
                          <Star :rating="item1.rating"></Star>
                      </div>
                      <div class="starCore">{{item1.rating}}</div>
                      <div class="orderNumber">月销{{item1.recent_order_num}}单</div>
                  </div>
                  <div class="content3">
                      ￥{{item1.float_minimum_order_amount}}元起送/{{item1.piecewise_agent_fee.tips}}
                  </div>
              </div>
              <div class="shopLevel">
                  <div class="level1">
                      <div class="fontBox">保</div>
                      <div class="fontBox">准</div>
                      <div class="fontBox">卷</div>
                  </div>
                  <div class="level2">饱了么专送</div>
              </div>
          </div>
      </div>
      
  </div>
</template>

<script>
import Star from '../Star/Star.vue'

export default {
  name: '',
  data () {
    return {
        n:[1,2]
    }
  },
  components:{
      Star
  },
  created () {
  },
  computed: {},
  watch: {},
  methods: {
    //   点击转跳至商家详情页面
      toshopDetail(){
          this.$router.push('/shop')
      }
  }
}
</script>

<style src="./ShopList.css"></style>
<style lang="" scoped>

</style>
