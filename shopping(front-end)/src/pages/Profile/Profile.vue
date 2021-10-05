// 个人中心模块
<template>
  <div>
    <!-- 导入头部导航组件 -->
    <HeaderTop :title="title"></HeaderTop>
    <!-- 转调至登陆模块 -->
    <router-link :to="$store.state.userInfo.user?'':'/login'"  class="toLoginBox">
      <div class="imgBox">
        <img src="../../../static/img/shop/1.jpg">
      </div>
      <div class="toLoginContent">
        <div class="topText">{{$store.state.userInfo.user? $store.state.userInfo.user :'登陆/注册'}}</div>
        <div class="bottomText">
          <img src="../../../static/img/phone.png">
          <div>暂无绑定手机号</div>
          </div>
      </div>
      <div class="toLoginButton" v-show="!$store.state.userInfo.user">
        <img src="../../../static/img/goto.png">
      </div>
    </router-link>
    <div class="allAccount">

      <!-- 账户 -->
      <div class="accountBox">
      <div class="myAccount">
        <div class="accountContent">0.00<span>分</span></div>
        <button>我的余额</button>
      </div>
      <div class="myAccount">
        <div class="accountContent">0<span>分</span></div>
        <button>我的余额</button>
      </div>
      <div class="myAccount">
        <div class="accountContent">0<span>分</span></div>
        <button>我的余额</button>
      </div>
    </div>

    <!-- 我的订单 -->
    <div class="myOrder">
      <div class="imgBox"><img src="../../../static/profileIcon/order.png"></div>
      <div class="contentBox">
        <span class="leftBox">我的订单</span>
        <img src="../../../static/profileIcon/goto2.png">
        </div>
    </div>

    <div class="myOrder">
      <div class="imgBox"><img src="../../../static/profileIcon/integal.png"></div>
      <div class="contentBox">
        <span class="leftBox">积分商城</span>
        <img src="../../../static/profileIcon/goto2.png">
        </div>
    </div>

    <div class="myOrder">
      <div class="imgBox"><img src="../../../static/profileIcon/vipCard.png"></div>
      <div class="contentBox">
        <span class="leftBox">饱了么外卖会员卡</span>
        <img src="../../../static/profileIcon/goto2.png">
        </div>
    </div>

    <div class="myOrder">
      <div class="imgBox"><img src="../../../static/profileIcon/cityServer.png"></div>
      <div class="contentBox">
        <span class="leftBox">服务中心</span>
        <img src="../../../static/profileIcon/goto2.png">
        </div>
    </div>

    <button v-show="$store.state.userInfo.user" @click="quitLogin">退出登录</button>
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
      title:'我的'
    }
  },
  created () {},
  // mounted () {},
  computed: {},
  watch: {},
  methods: {
    // 发送退出登陆请求,删除服务器中session缓存
    quitLogin(){
      this.$store.dispatch('quitLogin')
    }
  }
}
</script>

<style src="./Profile.css"></style>
<style lang="" scoped>

</style>
