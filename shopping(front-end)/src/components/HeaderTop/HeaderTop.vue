// 头部导航栏模块
<template>
  <div class="HeaderTop">
      <slot name="leftSlot" class="leftSlot"></slot>
      <div class="centerBox">{{title}}</div>
      <slot name="rightSlot" class="rightSlot"></slot>
  </div>
</template>

<script>
export default {
  name: '',
  props:{
      title:String
  },
  data () {
    return {}
  },
  created () {},
  computed: {},
  watch: {},
  methods: {}
}
</script>

<style src="./HeaderTop.css"></style>
<style lang="" scoped>

</style>
