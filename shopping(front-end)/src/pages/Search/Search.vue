// 搜索模块
<template>
  <div>
    <!-- 导入头部导航栏模块 -->
    <HeaderTop :title="title"></HeaderTop>
    <!-- 搜索框 -->
    <div class="searchnavBox">
      <div class="inputBox">
        <input type="text" v-model="searchContent">
        <button class="clearContent" v-show="searchContent===''?false:true" @click="clearSearch">✖</button>
      </div>
      <button>搜索</button>
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
      title:'搜索',
      searchContent:'',
    }
  },
  created () {},
  mounted () {},
  computed: {},
  watch: {},
  methods: {
    // 清楚搜索框数据事件
    clearSearch(){
      this.searchContent=''
    }
  }
}
</script>

<style src="./Search.css"></style>
<style lang="" scoped>

</style>
