// 商家评论模块
<template>
  <div class="ratingsBox" v-if="$store.state.shopData.info">
    <div>
      <div class="coreBox">
        <div class="leftCore">
          <div class="sumCore">{{$store.state.shopData.info.score}}</div>
          <div class="suncoreLabel">综合评分</div>
          <div class="nearbyshopCore">高于周边商家99%</div>
        </div>
        <div class="rightCore">
          <div class="attitudecoreBox">
            <div class="starBox">
              <Star :rating="$store.state.shopData.info.serviceScore"></Star>
            </div>
            <div class="attitudeCore">服务态度<span>{{$store.state.shopData.info.serviceScore}}</span></div>
          </div>
          <div class="goodcoreBox">
            <div class="starBox">
              <Star :rating="$store.state.shopData.info.foodScore"></Star>
            </div>
            <div class="goodCore">商品评分<span>{{$store.state.shopData.info.foodScore}}</span></div>
          </div>
          <div class="sendtimeBox">
            <div class="sendtimeLabel">送达时间</div>
            <div class="sendTime">30分钟</div>
          </div>
        </div>
      </div>
      <div class="ratingcontentBox">
        <!-- 筛选评论 -->
        <div class="ratingNav">
          <button :class="isActive2[0].active?'tochangeRating':''"  @click="changeRatings(0)">
          全部<span>{{settleRating[0].length}}</span></button>
          <button :class="isActive2[1].active?'tochangeRating':''" @click="changeRatings(1)">
            满意<span>{{settleRating[1].length}}</span></button>
          <button :class="isActive2[2].active?'tochangeRating':''" @click="changeRatings(2)">
            不满意<span>{{settleRating[2].length}}</span></button>
        </div>
        <div class="raitnglabelBox">
          <div class="labelImg">
            <img src="../../../../static/img/sttle.png">
          </div>
          <div class="ratingLabel">只看有内容的评价</div>
        </div>
        <div class="ratingsList">
          <div class="ratingsItem" v-for="(item,index) in settleRating[active]" :key="index" >
            <div class="ratingstopBox">
              <div class="userImg">
                <img :src="item.avatar">
              </div>
              <div class="userData">
                <div class="userName">{{item.username}}</div>
                <div class="userCore">ds</div>
              </div>
              <div class="userTime">{{item.rateTime | date-format}}</div>
            </div>
            <div class="ratingsbottomBox">
              <div class="ratingsContent">
                {{item.text}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Star from '../../../components/Star/Star.vue'

export default {
  name: '',
  data () {
    return {
      isActive2:[
        {
          active:true,
        },
        {
          active:false,
        },
        {
          active:false
        }
      ],
      active:0
    }
  },
  components:{
    // 评分组件
    Star
  },
  created () {},
  computed: {
    // 返回赛选过后的所有评论
    settleRating(){
      let sumRatings=[]
      let like=[]
      let dontLike=[]
      sumRatings.push(this.$store.state.shopData.ratings)
      for(let element of this.$store.state.shopData.ratings){
        if(element.score>=3){
          like.push(element)
        }else{
          dontLike.push(element)
        }
      }
      sumRatings.push(like)
      sumRatings.push(dontLike)
      return sumRatings
    }
  },
  watch: {},
  methods: {
    // 点击切换筛选评论
    changeRatings(index){
      const isActive2=this.isActive2
      isActive2.forEach(element=>{
        element.active=false
      })
      isActive2[index].active=true
      this.isActive2=isActive2
      this.active=index
    }
  }
}
</script>

<style src="./Shopratings.css"></style>
<style lang="" scoped>
.tochangeRating{
  color:white;
  background-color: #1296db;
}
</style>
