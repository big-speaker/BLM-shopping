// 底部导航栏代码
<template>
  <div class="bottomBox">
    <!-- 第一个导航按钮“外卖”的代码 -->
    <div class="msiteBox" v-if="switchData[0].isActive" v-on:click="onMSite" >
      <div class="iconBox"><img src="../../../static/icon/MSite.png"></div>
      <div class="iconName">外卖</div>
    </div>
    <div class="msiteBox" v-else v-on:click="onMSite">
      <div class="iconBox"><img src="../../../static/icon/reMSite.png"></div>
      <div class="iconName" style="color:#1296db" >外卖</div>
    </div>
    <!-- 第二个导航按钮“搜索”的代码 -->
    <div class="searchBox" v-if="switchData[1].isActive" v-on:click="onSearch">
      <div class="iconBox"><img src="../../../static/icon/Search.png"></div>
      <div class="iconName">搜索</div>
    </div>
    <div class="searchBox" v-else v-on:click="onSearch">
      <div class="iconBox"><img src="../../../static/icon/reSearch.png"></div>
      <div class="iconName" style="color:#1296db">搜索</div>
    </div>
    <!-- 第二个导航按钮“订单”的代码 -->
    <div class="orderBox" v-if="switchData[2].isActive" v-on:click="onOrder">
      <div class="iconBox"><img src="../../../static/icon/Order.png"></div>
      <div class="iconName">订单</div>
    </div>
    <div class="orderBox" v-else v-on:click="onOrder">
      <div class="iconBox"><img src="../../../static/icon/reOrder.png"></div>
      <div class="iconName" style="color:#1296db">订单</div>
    </div>
    <!-- 第二个导航按钮“我的”的代码 -->
    <div class="profileBox" v-if="switchData[3].isActive" v-on:click="onProfile">
      <div class="iconBox"><img src="../../../static/icon/Profile.png"></div>
      <div class="iconName">我的</div>
    </div>
    <div class="profileBox" v-else v-on:click="onProfile">
      <div class="iconBox"><img src="../../../static/icon/reProfile.png"></div>
      <div class="iconName" style="color:#1296db">我的</div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      switchData:[
        {
        isActive:true,
        path:'/msite'
      },
        {
        isActive:true,
        path:'/search'
      },
        {
        isActive:true,
        path:'/order'
      },
        {
        isActive:true,
        path:'/profile'
      }
    ],
    nowRouter:''
    }
  },
  created () {
    this.nowRouter=this.$route.fullPath
  },
  mounted(){
  },
  methods: {

    // 将底部按钮与当前路由路径进行对比，然后更改底部按钮的颜色
    onSwitch(){
      const switchData=this.switchData
      switchData.forEach(element=>{element.isActive=true})
      let index=switchData.findIndex(element=>{return element.path===this.$route.fullPath})
      switchData[index].isActive=!switchData[index].isActive
    },

    // 底部导航栏的四个监听事件
    // 外卖按钮监听事件
    onMSite(){
      if(this.$route.fullPath==='/msite'){
        return
      }else{
        this.$router.push('/msite')
        this.onSwitch()
      }
    },
    // 搜索按钮监听事件
    onSearch(){
      if(this.$route.fullPath==='/search'){
        return
      }else{
        this.$router.replace('/search')
        this.onSwitch()
      }
    },
    // 订单按钮监听事件
    onOrder(){
      if(this.$route.fullPath==='/order'){
        return
      }else{
        this.$router.replace('/order')
        this.onSwitch()
      }
    },
    // 我的按钮监听事件
    onProfile(){
      if(this.$route.fullPath==='/profile'){
        return
      }else{
        this.$router.replace('/profile')
        this.onSwitch()
      }
    }
  },
  // 监听页面刷新
  watch:{
    nowRouter(value){
      this.onSwitch()
    }
  },
}
</script>

<style src="./FooterGuide.css"></style>
<style lang="" scoped>

</style>
