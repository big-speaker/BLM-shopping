// 外卖首页组件
<template>
  <div>

    <!-- 头部组件 -->
    <HeaderTop :title="title">
      <div class="leftSlot" slot="leftSlot"><img src="../../../static/icon/leftSearch.png"></div>
      <div class="rightSlot" slot="rightSlot">登录|注册</div>
    </HeaderTop>

    <!-- 轮播图 -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide swiperitemBox" v-for="(item1,index1) in getallCategory" :key="index1">
            <div class="swiperItem" v-for="(item2,index2) in item1" :key="index2" >
            <img :src="baseURL+item2.image_url">
            <span>{{item2.title}}</span>
            </div>
            <div class="swiper-pagination"></div>
        </div>
      </div>
     </div> 
      
      <!-- 附近商家组件 -->
      <ShopList></ShopList>

  </div>
</template>

<script>
// 导入轮播图js和css文件
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'


// 导入两个组件
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
import ShopList from '../../components/ShopList/ShopList.vue'
import {mapState} from 'vuex'




export default {
  components: { 
    HeaderTop,
    ShopList,
    // Swiper,
    // SwiperItem
     },
  name: 'MSite',
  data () {
    return {
      title:'东莞市寮步镇东莞城市学院5A227宿舍',
      baseURL:'https://fuss10.elemecdn.com',
      categorys:[]
    }
  },
  computed:{
    ...mapState(['category']),

    // 将轮播图数组分裂为两个数组
    getallCategory(){
      const allCategory=[]
      let minCategory=[]
      // const category=this.$store.state.category
      const category=this.category
      category.forEach(element => {
        minCategory.push(element)
        if(minCategory.length===8){
          allCategory.push(minCategory)
          minCategory=[]
        }
      });
      return allCategory
    },
  },
  watch:{
    // 监听计算属性变化，变化后创建轮播图实例
    getallCategory(value){
      this.$nextTick(()=>{
        new Swiper('.swiper-container',{
          autoplay:{
            delay:5000,
            disableOnInteraction:false,
            reverseDirection:true
          },
          loop:true,
          pagination:{
            el:'.swiper-pagination'
          }
        })
      })
    }
  },
  created () {
  },
  mounted (){}
}
</script>

<style src="./MSite.css"></style>
<style scoped>

</style>
