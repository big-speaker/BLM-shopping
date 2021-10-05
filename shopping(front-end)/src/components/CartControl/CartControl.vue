// 购物车按钮模块
<template>
  <div class="cartControl">
      <div class="reduce" @click="racount(false)">-</div>
       <div class="count" v-show="!$store.state.shopData.goods[index1].foods[index2].count">0</div>
      <div class="count" v-show="$store.state.shopData.goods[index1].foods[index2].count">{{$store.state.shopData.goods[index1].foods[index2].count}}</div>
      <div class="add" @click="racount(true)">+</div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
    }
  },
  props:{
        index1:Number,
        index2:Number
    },
  created () {
  },
  mounted(){
  },
  computed: {},
  watch: {},
  methods: {
    // 点击添加或删除购物车商品数量
      racount(ra){
          this.$store.commit('change_count',{change:ra,index1:this.index1,index2:this.index2})
      }
  }
}
</script>

<style src="./CartControl.css"></style>
<style lang="" scoped>

</style>
