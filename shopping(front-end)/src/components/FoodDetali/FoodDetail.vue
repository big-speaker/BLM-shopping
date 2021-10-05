// 食物详情模块
<template>
  <div class="foodDetail">
      <div class="topfoodBox">
          <div class="imgBox">
            <img v-lazy="food.icon">
        </div>
        <div class="closeButton">
            <img src="../../../static/img/goto.png" @click="closefoodDetail">
        </div>
        <div class="foodCombination">{{food.info}}</div>
        </div>
        <div class="bottomfoodBox">
            <div class="foodName">{{food.name}}</div>
            <div class="foodComment">
                <span>月售{{food.sellCount}}份</span>
                <span>好评率{{food.rating}}%</span>
            </div>
            <div class="foodPrice">
                ￥{{food.price}}
            </div>
        </div>
        <div class="AddCount">
                <cart-control :index1="index1" :index2="index2"></cart-control>
            </div>
  </div>
</template>

<script>
import CartControl from '../CartControl/CartControl.vue'

export default {
  name: '',
  data () {
    return {}
  },
  props:{
      food:Object,
      index1:Number,
      index2:Number
  },
  components:{
      CartControl
  },
  created () {},
  computed: {},
  watch: {},
  methods: {
    //   点击发送事件传递布尔值,关闭食物详情页面
      closefoodDetail(){
          this.$emit('closeFoodDetail',false)
      }
  }
}
</script>

<style src="./FoodDetail.css"></style>
<style lang="" scoped>

</style>
