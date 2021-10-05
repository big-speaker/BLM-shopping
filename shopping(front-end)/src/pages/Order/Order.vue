// 订单模块代码
<template>
  <div>
    <!-- 导入头部导航栏组件 -->
    <HeaderTop :title="title"></HeaderTop>
    <!-- 设置没有订单时的背景提示 -->
    <div class="orderImg">
      <img src="../../../static/img/person.png">
      <div class="orderTip">暂无订单...</div>
    </div>
  </div>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
export default {
  components:{HeaderTop},
  name: '',
  data () {
    return {
      title:'订单'
    }
  },
  created () {},
  // mounted () {},
  computed: {},
  watch: {},
  methods: {}
}
</script>

<style src="./Order.css"></style>
<style lang="" scoped>

</style>
