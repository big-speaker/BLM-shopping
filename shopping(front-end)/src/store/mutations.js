import state from "./state"
import Vue from 'vue'
import {
    CHANGE_CATEGORY,
    CHANGE_SHOPS,
    CHANGE_DETAILSHOP,
    GET_LOGINCODE,
    GET_TIPIMGCODE,
    GET_USERINFO,
    GET_SHOPDATA,
    CHANGE_COUNT
} from './mutationsType.js'

export default {
    // 异步获取信息
    [CHANGE_CATEGORY](state,category){
        state.category=category
    },
    [CHANGE_SHOPS](state,shops){
        state.shops=shops
    },
    [CHANGE_DETAILSHOP](state,detailshop){
        state.detailshop=detailshop
    },
    [GET_LOGINCODE](state,tipCode){
        state.tipCode=tipCode
    },
    [GET_TIPIMGCODE](state,tipimgCode){
        state.tipimgCode=tipimgCode
    },
    // 同步获取信息
    [GET_USERINFO](state,userInfo){
        state.userInfo=userInfo
    },
    [GET_SHOPDATA](state,shopdata){
        state.shopData=shopdata
    },
    // 修改数量
    [CHANGE_COUNT](state,{change,index1,index2}){
        if(change&& !state.shopData.goods[index1].foods[index2].count){
            Vue.set(state.shopData.goods[index1].foods[index2],'count',1)
        }else if(change&& state.shopData.goods[index1].foods[index2].count){
            state.shopData.goods[index1].foods[index2].count++
        }else if(!change){
            if(state.shopData.goods[index1].foods[index2].count){
                state.shopData.goods[index1].foods[index2].count--
            }
        }
    }
}