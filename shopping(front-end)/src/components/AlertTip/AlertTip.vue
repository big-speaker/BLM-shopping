// 警告提示模块
<template>
  <div id="AlertTip">
      <div class="alertBox">
          <div class="alertImg">!</div>
          <div class="alertText">{{alertTitle}}</div>
          <button @click="closeTip">确认</button>
      </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {}
  },
  props:{
      alertTitle:'',
  },
  created () {},
  computed: {},
  watch: {},
  methods: {
      closeTip(){
          this.$emit('closeTip')
      }
  }
}
</script>

<style src="./AlertTip.css"></style>
<style lang="" scoped>

</style>
