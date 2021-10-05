// 发送异步请求模块
import axios from 'axios'

// 获取json文件的axios实例
export function getJson(url,success){
    const instance1=axios.create({
        baseURL:'/api',
        // baseURL:'http://10.100.64.178:3000',
        timeout:3000
    })
    instance1(url)
    .then(res=>{
        success(res)
    })
    .catch(res=>{
        success(null,res)
    })
}

// 获取图片文件的axios实例
export function getData(url,success){
    const instance1=axios.create({
        baseURL:'https://fuss10.elemecdn.com',
        timeout:3000
    })
    instance1(url)
    .then(res=>{
        success(res)
    })
    .catch(res=>{
        success(null,res)
    })
}

// export function sendphoneLogin(url,success){
//     const instance1=axios.create({
//         baseURL:'http://localhost:3000',
//         timeout:3000
//     })
//     instance1(url)
//     .then(res=>{
//         success(res)
//     })
//     .catch(res=>{
//         success(null,res)
//     })
// }