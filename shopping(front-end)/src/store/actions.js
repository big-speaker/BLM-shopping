import { getJson } from "../api/axiosApi"
import {
    CHANGE_CATEGORY,
    CHANGE_SHOPS,
    CHANGE_DETAILSHOP,
    GET_LOGINCODE,
    GET_TIPIMGCODE,
    GET_USERINFO,
    GET_SHOPDATA
} from './mutationsType.js'


export default{
    getCategory(store){
        getJson({url:'/index_category.json'},function(data){
            store.commit(CHANGE_CATEGORY,data.data)
        })
    },
    getShops(store){
        getJson({url:'/shops.json'},function(data){
            store.commit(CHANGE_SHOPS,data.data)
        })
    },
    getdetailShop(store){
        getJson({url:'/data.json'},function(data){
            store.commit(CHANGE_DETAILSHOP,data.data)
        })
    },
    getloginCode(store){
        getJson({url:'/code.json'},function(data){
            store.commit(GET_LOGINCODE,data.data)
        })
    },
    gettipimgCode(store){
        getJson({url:'/imgCode.json'},function(data){
            store.commit(GET_TIPIMGCODE,data.data)
        })
    },
    // 可删除
    getuserInfo(store){
        getJson({url:'/phoneLogin.json'},function(data){
            store.commit(GET_TIPIMGCODE,data.data)
        })
    },
    getSession(store){
        getJson({url:'/getsession'},function(data){
            store.commit(GET_USERINFO,data.data)
        })
    },
    quitLogin(store){
        getJson({url:'/quitlogin'},function(data){
            store.commit(GET_USERINFO,'')
        })
    },
    getshopData(store,callBack){
        getJson({url:'/data.json'},function(data){
            store.commit(GET_SHOPDATA,data.data)
            callBack && callBack()
        })
    }
}