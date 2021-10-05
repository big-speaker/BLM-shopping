// 评分模块
<template>
  <div id="Starc">
      <div class="imgBox">
        <img v-for="(item,index) in imgPath" :key="index" :src="'../../../static/img/shop/star'+item+'.png'">
       </div>
      <!-- <div class="fraction">{{rating}}</div> -->
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {}
  },
  props:{
      rating:Number,
  },
  computed: {
    //   向数组添加不同评分图片路径，1为黄色星星图片路径，2为半黄半灰星星，3为灰色星星
      imgPath(){
          let rating=this.rating
          let reArray=[]
          let ratingInt=Math.floor(rating)
          for(let i=0;i<ratingInt;i++){
              reArray.push('1')
          }
          if(rating*10-ratingInt*10>=5){
              reArray.push('2')
          }
          while(reArray.length<5){
              reArray.push('3')
          }
          return reArray
      }
  },
  watch: {},
  methods: {},
  created () {}
}
</script>

<style src="./Star.css"></style>
<style lang="" scoped>

</style>
