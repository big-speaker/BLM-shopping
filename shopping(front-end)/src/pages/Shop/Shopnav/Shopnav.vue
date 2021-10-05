// 商家页面导航栏模块
<template>
  <div class="detailShop" v-if="$store.state.shopData.info">
    <div class="shopIntroduce">
      <img class="backPage" src="../../../../static/img/goto.png" @click="$router.back()">
      <img class="bgImg" v-bind:src="$store.state.shopData.info.bgImg">
      <div class="avaterBox">
        <img v-bind:src="$store.state.shopData.info.avatar">
      </div>
      <div class="contentBox">
        <div class="shopTitle" @click="shopDetail">
          <img src="../../../../static/img/shop/brand.png">
          <div class="shopName">{{$store.state.shopData.info.name}}</div>
          <div class="toButton">
            <img src="../../../../static/img/shop/toRight.png">
          </div>
        </div>
        <div class="sendType">
          <div>{{$store.state.shopData.info.score}}</div>
          <div>月售{{$store.state.shopData.info.sellCount}}单</div>
          <div>{{$store.state.shopData.info.description}}</div>
          <div>约{{$store.state.shopData.info.deliveryTime}}分钟</div>
          <div>距离{{$store.state.shopData.info.distance}}</div>
        </div>
        <div class="discount" @click="discountDetail">
          <span>{{$store.state.shopData.info.supports[0].name}}</span>
          <div class="discountContent">{{$store.state.shopData.info.supports[0].content}}</div>
          <div class="discountNumber">
            {{$store.state.shopData.info.supports.length}}个优惠
            <img src="../../../../static/img/shop/toBottom .png">
            </div>
        </div>
      </div>
    </div> 
    <div class="shopnavBox">
      <div class="itemBox">
        <router-link class="navItem" :class="switchData[0].isActive?'changeColor':''" to="/shop/shopgoods" replace v-on:click.native="onSwitch">点餐</router-link>
      </div>
      <div class="itemBox">
        <router-link class="navItem" :class="switchData[1].isActive?'changeColor':''" to="/shop/shopratings" replace @click.native="onSwitch">评价</router-link>
      </div>
      <div class="itemBox">
        <router-link class="navItem" :class="switchData[2].isActive?'changeColor':''" to="/shop/shopinfo" replace @click.native="onSwitch">商家</router-link>
      </div>
    </div>
    <!-- 商家信息提示窗口 -->
    <div class="slot1" v-show="showShop">
      <div class="allContent">
        <div class="detailName">
          <img src="../../../../static/img/shop/brand.png">
          <div class="shopName">{{$store.state.shopData.info.name}}</div>
        </div>
        <div class="detailContent">
          <div class="contentType">
            <div class="topBox">{{$store.state.shopData.info.score}}</div>
            <div class="bottomBox2">评分</div>
          </div>
          <div class="contentType">
            <div class="topBox">{{$store.state.shopData.info.sellCount}}</div>
            <div class="bottomBox2">月售</div>
          </div>
          <div class="contentType">
            <div class="topBox">{{$store.state.shopData.info.description}}</div>
            <div class="bottomBox2">约分钟</div>
          </div>
          <div class="contentType">
            <div class="topBox">{{$store.state.shopData.info.deliveryPrice}}元</div>
            <div class="bottomBox2">配送费用</div>
          </div>
          <div class="contentType">
            <div class="topBox">{{$store.state.shopData.info.distance}}</div>
            <div class="bottomBox2">距离</div>
          </div>
        </div>
        <div class="centerTitle">-公告-</div>
        <div class="content">{{$store.state.shopData.info.bulletin}}</div>
      </div>
      <button @click="shopDetail">✖</button>
    </div>

    <!-- 优惠信息提示窗口 -->
    <div class="slot2" v-show="showDiscount">
      <div class="discountWindow">
        <div class="discountTitle">优惠活动<span @click="discountDetail">✖</span></div>
        <div class="allDiscount">
          <div class="discountItem" v-for="(item,index) in $store.state.shopData.info.supports" :key="index">
            <div class="discountRight" :class="'color'+item.type">
              {{item.name}}
            </div>
            <div class="discountLeft">
              {{item.content}}
            </div>
          </div>
        </div>
      </div>
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
          path:'/shop/shopgoods'
        },
        {
          isActive:false,
          path:'/shop/shopratings'
        },
        {
          isActive:false,
          path:'/shop/shopinfo'
        }
      ],
      showShop:false,
      showDiscount:false,
      nowshopR:''
    }
  },
  components:{
  },
  created () {
    this.nowshopR=this.$route.fullPath
  },
  computed: {
  },
  watch: {},
  methods: {
    onSwitch(){
      const switchData=this.switchData
      switchData.forEach(element=>{element.isActive=false})
      let index=switchData.findIndex(element=>{return element.path===this.$route.fullPath})
      switchData[index].isActive=true
      this.switchData=switchData
    },
    shopDetail(){
      const showShop=this.showShop
      this.showShop=!showShop
    },
    discountDetail(){
      const showDiscount=this.showDiscount
      this.showDiscount=!showDiscount
    }
  },watch:{
    nowshopR(value){
      this.onSwitch()
    }
  }
}
</script>

<style src="./Shopnav.css"></style>
<style lang="" scoped>
.changeColor{
  color:#1296db;
  border-bottom:solid;
}
.color0{
  background-color: #1296db;
}
.color1{
  background-color: pink;
}
.color2{
  background-color: orange;
}
</style>
