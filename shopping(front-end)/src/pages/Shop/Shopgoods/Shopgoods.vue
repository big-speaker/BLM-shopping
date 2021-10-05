// 商家商品列表模块
<template>
  <div class="goodList" v-if="$store.state.shopData.goods">
    <!-- 左侧菜单模块 -->
    <div class="cartlistBox">
      <div class="cartList">
        <div class="cartItem" v-for="(item,index) in $store.state.shopData.goods" :key="index" 
        :class="getscrollIndex===index?'cartActive':''"
        @click="changefoodlist(index)" >
          <img :src="item.icon" v-show="item.icon">
          {{item.name}}
        </div>
      </div>
    </div>
    <!-- 右侧菜单模块 -->
    <div class="foodlistBox">
      <div class="foodList" ref="foodUI">
        <div class="typeItem" v-for="(item1,index1) in $store.state.shopData.goods" :key="index1">
          <div class="foodType">{{item1.name}}</div>
        <div class="foodItem" v-for="(item2,index2) in item1.foods" :key="index2" >
          <div class="topFood" @click="foundDetail(item2,index1,index2)">
            <div class="foodImg">
              <img :src="item2.icon">
            </div>
            <div class="foodContent">
              <div class="foodName">
                {{item2.name}}
              </div>
              <div class="foodComment">
                <span class="leftComent">
                  月售{{item2.sellCount}}份
                </span>
                <span class="rightComment">
                  好评率{{item2.rating}}%
                </span>
              </div>
              <div class="bottomFood">
                <div class="foodPrice">
                  ￥{{item2.price}}
                </div>
              </div>
            </div>
          </div>
          <div class="foodAdd">
            <!-- 购物车添加减少组件 -->
            <cart-control :index1="index1" :index2="index2"></cart-control>
          </div>
        </div>
        </div>
      </div>
    </div>
    <!-- 购物车模块 -->
    <div class="buylistBox" v-show="showbuyList">
      <div class="buyContent" v-if="getbuyLIST.allCount>0">
        <div class="buyTitleBox">
          <div class="buyTitle">购物车</div>
          <div class="cancelList" @click="clearbuyList">清空</div>
        </div>
        <div class="buyList">
          <div class="buyItem" v-for="(item,index) in getbuyLIST.buyList" :key="index">
            <div class="buyName">{{item.name}}</div>
            <div class="buyPrice">￥{{item.price}}</div>
            <div class="foodAdd">
              <CartControl :index1="item.index1" :index2="item.index2"></CartControl>
            </div>
          </div>
        </div>
      </div>
      <div class="buylistTip" v-else>
        购物车空空如也
      </div>
    </div>
    <!-- 底部购物车展示模块 -->
    <div class="bottomCart">
      <div class="carticonBox" @click="showBuy">
        <img :src="getbuyLIST.allCount===0?'../../../../static/img/shop/cart1.png':'../../../../static/img/shop/cart2.png'">
        <div class="cartCount">{{getbuyLIST.allCount}}</div>
      </div>
      <div class="cartpriceBox" @click="showBuy">
        <div class="price">￥{{getbuyLIST.allPrice}}</div>
        <div class="sendPrice">配送费￥{{$store.state.shopData.info.deliveryPrice}}元</div>
      </div>
      <div v-if="getbuyLIST.allPrice<20" class="buyButton">
        满20元起送
      </div>
      <div v-else class="checkOut">
        去结算
      </div>
    </div>
    <!-- 商品详情模块 -->
    <FoodDetail v-if="showFood" 
        :food="food" 
        :index1="index3"
        :index2="index4"
        @closeFoodDetail="closeFoodDetail"></FoodDetail>
  </div>
</template>

<script>
// 导入滑动包和两个组件
import BScroll from 'better-scroll'
import CartControl from "../../../components/CartControl/CartControl.vue"
import FoodDetail from "../../../components/FoodDetali/FoodDetail.vue"

export default {
  components: { 
    CartControl,
    FoodDetail
     },
  name: '',
  data () {
    return {
      scrolly:0,
      tops:[],
      food:Object,
      index3:Number,
      index4:Number,
      showFood:false,
      showbuyList:false
    }
  },

 created () {},
 mounted(){
  //  在发送数据请求后进行滑动实例的创建
    this.$store.dispatch('getshopData',()=>{
      this.$nextTick(()=>{
        // 创建左侧菜单滑动实例
        const BS1=new BScroll('.cartlistBox',{
          click:true,
          disableMouse: false,
          disableTouch: false
        })
        // 创建右侧菜单滑动实例
        this.BS2=new BScroll('.foodlistBox',{
          probeType:3,
          click:true,
          disableMouse: false,
          disableTouch: false
        })
        // 获取右侧菜单滑动实例每个项目的距离.并将数据存入数组
        this.BS2.on('scroll',({x,y})=>{
          this.scrolly=Math.abs(y)
        })
        const tops=[]
        let top=0
        tops.push(top)
        const lis=this.$refs.foodUI.getElementsByClassName('typeItem')
        Array.prototype.slice.call(lis).forEach(element => {
          top+=element.clientHeight
          tops.push(top)
        })
        this.tops=tops
      })
    })
  },
  computed: {
    // 获取左侧滑动块的索引值
    getscrollIndex(){
      const scrolly=this.scrolly
      const tops=this.tops
      const index=tops.findIndex((top,index)=>{
        return scrolly >=top && scrolly<tops[index+1]
      })
      return index
    },
    // 将商品数据进行筛选,返回三个筛选过后的数组
    getbuyLIST(){
      let goods=this.$store.state.shopData.goods
      let buyList=[]
      let allCount=0
      let allPrice=0
      for(let index1=0; index1<goods.length;index1++){
        for(let index2=0;index2<goods[index1].foods.length;index2++){
          if(goods[index1].foods[index2].count>=1){
            goods[index1].foods[index2].index1=index1
            goods[index1].foods[index2].index2=index2
            buyList.push(goods[index1].foods[index2])
          }
        }
      }
      for(let element of buyList){
        allCount=element.count+allCount
        allPrice=element.count*element.price+allPrice
      }
      return {
        buyList,
        allCount,
        allPrice
      }
    }
  },
  methods: {
    // 点击左侧菜单,右侧菜单进行转跳
    changefoodlist(index){
      let y=this.tops[index]
      this.BS2.scrollTo(0,-y,300)
    },
    // 点击显示食物详情页面
    foundDetail(food,index1,index2){
      this.food=food
      this.index3=index1
      this.index4=index2
      const showFood=this.showFood
      this.showFood=!showFood
    },
    // 点击关闭食物详情页面
    closeFoodDetail(message){
      this.showFood=message
    },
    // 点击打开和关闭购物车列表
    showBuy(){
      const showbuyList=this.showbuyList
      this.showbuyList=!showbuyList
    },
    // 点击清空购物车
    clearbuyList(){
      this.$store.dispatch('getshopData')
    }
  }
}
</script>

<style src="./Shopgoods.css"></style>
<style lang="" scoped>
.cartActive{
  background-color: #e6e6e6;
}
</style>
