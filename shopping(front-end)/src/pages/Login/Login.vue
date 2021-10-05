// 登陆模块代码
<template>
  <div class="loginBox">
      <div class="blackButton">
          <img src="../../../static/img/shop/back.png" v-on:click="$router.back()" >
        </div>
      <div class="loginTitle">饱了么外卖</div>
      <div class="loginType">

          <!-- 短信登陆标题 -->
          <div class="leftLogin" 
          :style="loginType[0].isAction? 'border-bottom:solid':''" 
          v-on:click="changetype('phoneType')"
          >
              短信登陆
            </div>

            <!-- 密码登录标题 -->
          <div class="rightLogin" v-bind:style="loginType[1].isAction? 'border-bottom:solid':''" v-on:click="changetype('passwordType')">
              密码登录
            </div>
      </div>

      <!-- 短信登陆 -->
      <div class="loginContent" v-if="loginType[0].isAction" >

            <!-- 手机号输入框 -->
            <div class="loginNumber">
                <input name="phoneNumber" type="text" 
                placeholder="手机号"
                v-model="phoneNumber"
                >
                <button type="button" :class="testPhone&&startTime===0 ? 'blockfont':''" 
                v-on:click="getCode" >
                {{startTime===0 ?'获取验证码':`已发送(${startTime})s`}}
                </button>
            </div>

            <!-- 验证码输入框 -->
            <div class="loginPassword"  >
                <input name="code" type="text" 
                placeholder="验证码"
                v-model="code">
            </div>

            <!-- 用户协议提示 -->
            <div class="loginAgree">
                温馨提示：未注册饱了么账号的手机号，登陆时将自动注册，且代表已同意
                <span>《用户服务协议》</span>
            </div>
            <button class="loginButton" @click="phoneLogin">登陆</button>
          <div class="about">关于我们</div>
      </div>

      <!-- 密码登陆 -->
      <div class="loginContent" v-if="loginType[1].isAction" >

            <!-- 手机号/用户名输入框 -->
            <div class="loginNumber1">
                <input type="text" 
                placeholder="手机号/用户名" 
                v-model="loginName"
                >
            </div>

            <!-- 密码输入框 -->
            <div class="loginNumber2">
                <input :type="showPassword ?'text':'password'" 
                placeholder="密码"
                v-model="loginPassword"
                >
                <div>
                    <img v-on:click="changeimg" :src="showPassword ? '../../../static/img/buttonLater.png':'../../../static/img/buttonFront.png'">
                </div>
            </div>

            <!-- 验证码输入框 -->
            <div class="loginNumber3">
                <input type="text" 
                placeholder="验证码"
                v-model="imgCode"
                >
                <div @click="getimgCode"><img :src="$store.state.imgCode
                ?'$store.state.imgCode[0].imgUrl':'http://localhost:3000/1.svg'"></div>
            </div>

            <!-- 登陆按钮 -->
            <button class="loginButton" @click="passwordLogin">登陆</button>
          <div class="about">关于我们</div>
      </div>

      <AlertTip :alertTitle="$store.state.tipCode" v-show="showTip" @closeTip="closeTip" ></AlertTip>

      <!-- 警告窗口组件 -->
      <AlertTip :alertTitle="alertText" v-show="showAlert" @closeTip="closeTip" ></AlertTip>
  </div>
</template>

<script>
import AlertTip from '../../components/AlertTip/AlertTip.vue'
import {getJson} from '../../api/axiosApi'

export default {
  name: '',
  data () {
    return {
        loginType:[         //用于选择登陆方式的数组
            {
                name:'phoneType',
                isAction:true
            },
            {
                name:'passwordType',
                isAction:false
            }
        ],  

        phoneNumber:'',   //短信登陆手机号
        code:'',           //用户输入的短信登陆验证码
        showTip:false,      //是否显示验证码提示框
        startTime:0,      //发送短信验证计时

        loginName:'',   //登陆的用户名
        loginPassword:'',   //登陆密码
        showPassword:false, //是否显示密码的布尔值
        imgCode:'',     //图片验证码

        alertText:'xxxx',  //警告提示内容
        showAlert:false,    //是否显示警告窗口
    }
  },
  components:{
      AlertTip,
  },
  created () {},
  computed: {
    //   验证输入的手机号是否正确
      testPhone(){
          let phoneNumber=this.phoneNumber
          let regular = /^1\d{10}$/ 
          if(regular.test(phoneNumber)){
              return true
          }else{
              return false
          }
      },
  },
  watch: {},
  methods: {
    //   点击切换登陆方式
      changetype(name){
          const loginType=this.loginType
          loginType.forEach(element=>{element.isAction=false})
          const index=loginType.findIndex(element=>{return element.name===name})
          loginType[index].isAction=true
          this.loginType=loginType
      },
    //   点击切换密码显示方式
      changeimg(){
          const showPassword=this.showPassword
          this.showPassword=!showPassword
      },
    //   点击获取验证码
      getCode(){
          if(this.startTime===0){
              this.$store.dispatch('getloginCode')
              this.startTime=60
              this.opentipCode()
              const changeTimes=setInterval(()=>{
                  this.startTime--
                  if(this.startTime===0){
                  clearInterval(changeTimes)
                }
            },1000)
            // 发生axios请求获取验证码
          }
      },
    //   设置打开警告提示框
      openTip(alertText){
          this.alertText=alertText
          this.showAlert=true
      },
      opentipCode(){
          this.showTip=true
      },
    //   关闭警告提示框
      closeTip(){
          this.showAlert=false,
          this.alertText='',
          this.showTip=false
      },
      check(yn){
          return false
      },
    //   验证短信登陆时的手机号和验证码是否正确
    phoneLogin(){
        if(!/^1\d{10}$/.test(this.phoneNumber)){        // 如果手机号错误，提示手机号错误
            this.openTip('请输入正确的手机号')
        }else if(!/^[a-zA-Z0-9]{6}$/.test(this.code)){       // 如果验证码错误，提示验证码错误
            this.openTip('请输入正确的验证码')
        }else if(this.code!==this.$store.state.tipCode){
            this.openTip('验证码错误')
        }else{
            let myDate = new Date();
            let loginTime=myDate.getFullYear()+'年'+myDate.getMonth()+'月'+myDate.getDate()+'日'+myDate.getHours()+'时'+myDate.getMinutes()+'分'+myDate.getMinutes()+'秒'
            let params={
                user:this.phoneNumber,
                code:this.code,
                loginTime:loginTime
            }
            getJson({url:'/phoneLogin',params},function(data,error){
                if(error){
                    console.log(error)
                }
            })
            this.$store.commit('get_userinfo',params)
            this.$router.push('/profile')
        }
    },
    getimgCode(){
        this.$store.dispatch('gettipimgCode')
    },

    // 验证密码登陆时用户名、密码、验证码是否正确
    passwordLogin(){
        if(this.loginName===''){        //如果用户名为空，提示请输入手机号/用户名
            this.openTip('请输入手机号/用户名')    
        }else if(this.loginPassword===''){      //如果密码为空,提示请输入密码
            this.openTip('请输入密码')
        }else if(this.imgCode===''){        //如果验证码为空，提示请输入验证码
            this.openTip('请输入验证码')
        }else if(this.imgCode!==this.$store.state.tipimgCode[0].imgUrl){
            this.openTip('验证码错误')      //如果验证码错误，提示验证码错误
        }else{
            let myDate = new Date();
            let loginTime=myDate.getFullYear()+'年'+myDate.getMonth()+'月'+myDate.getDate()+'日'+myDate.getHours()+'时'+myDate.getMinutes()+'分'+myDate.getMinutes()+'秒'
            let params2={
                user:this.loginName,
                loginPassword:this.loginPassword,
                imgCode:this.imgCode,
                loginTime:loginTime
            }
            getJson({url:'/passwordLogin',params:params2},function(data,error){
                if(error){
                    console.log(error)
                }
            })
            this.$store.commit('get_userinfo',params2)
            this.$router.push('/profile')
        }
    }
  }
}
</script>

<style src="./Login.css"></style>
<style lang="" scoped>

</style>
