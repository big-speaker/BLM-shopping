// 商家信息模块
<template>
  <div class=allinfoBox v-if="$store.state.shopData.info">
      <div class="infoBox">
        <div class="senddataBox">
          <div class="sendTitle">配送信息</div>
          <div class="sendContent">
            <span>饱了么专送</span>
            由商家提供配送，约{{$store.state.shopData.info.deliveryTime}}分钟，距离{{$store.state.shopData.info.distance}}
          </div>
          <div class="sendPrice">配送费￥{{$store.state.shopData.info.deliveryPrice}}</div>
        </div>
        <div class="serverdataBox">
          <div class="serverTitle">活动与服务</div>
          <div class="serverItems" v-for="(item,index) in $store.state.shopData.info.supports" :key="index">
            <span :class="'color'+item.type">{{item.name}}</span>
            {{item.content}}
          </div>
        </div>
        <div class="shoppictureBox">
          <div class="shoppictureBox2">
            <div class="shoppictureTitle">商家实景</div>
            <div class="shoppictureItem">
              <img :src="item2" v-for="(item2,index2) in $store.state.shopData.info.pics" :key="index2">
            </div>
          </div>
        </div>
        <div class="infodataBox">
          <div class="infodataTitle">商家信息</div>
          <div class="infoType">
            <span class="leftS">品类</span>
            <span class="rightS">{{$store.state.shopData.info.category}}</span>
          </div>
          <div class="infoPhone">
            <span class="leftS">商家电话</span>
            <span class="rightS">{{$store.state.shopData.info.phone}}</span>
          </div>
          <div class="infoPlace">
            <span class="leftS">地址</span>
            <span class="rightS">{{$store.state.shopData.info.address}}</span>
          </div>
          <div class="infoTime">
            <span class="leftS">营业时间</span>
            <span class="rightS">{{$store.state.shopData.info.workTime}}</span>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {}
  },
  created () {},
  computed: {},
  watch: {},
  methods: {}
}
</script>

<style src="./Shopinfo.css"></style>
<style lang="" scoped>
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
