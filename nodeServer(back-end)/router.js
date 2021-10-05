// 路由器返回的数据/写入文件必须时json数据，可以用JSON.stringify()进行转换成json格式；
//读取的json文件必须转换为字符串形式才可以进行赋值,可以用JSON.parse()将json格式转换为字符串


var fs=require('fs')
var express=require('express')
var iofile=require('./iofile')
const { response } = require('express')


var router=express.Router()

router.get('/',function(req,res){
    console.log('服务器收到客户端请求')
    // 通过配置了body-Parser模块，可以通过req.body获取请求数据
    res.end()
})
router.get('/index_category.json',function(req,res){
    res.setHeader('Access-Control-Allow-Origin', '*')
    iofile.getjsondata('./static/index_category.json',function (error,data){
        res.end(data)
    })
})
router.get('/shops.json',function(req,res){
    res.setHeader('Access-Control-Allow-Origin', '*')
    iofile.getjsondata('./static/shops.json',function (error,data){
        res.end(data)
    })
})
router.get('/data.json',function(req,res){
    res.setHeader('Access-Control-Allow-Origin', '*')
    iofile.getjsondata('./static/data.json',function (error,data){
        res.end(data)
    })
})

// 获取验证码图片
router.get('/1.svg',function(req,res){
    res.writeHead(200,  {'Content-Type':'image/svg+xml'});
    iofile.getjsondata('./static/img/1.svg',function (error,data){
        res.end(data)
    })
})
router.get('/2.jpeg',function(req,res){
    res.writeHead(200,  {'Content-Type':'image/jpeg'});
    iofile.getjsondata('./static/img/2.jpeg',function (error,data){
        res.end(data)
    })
})
router.get('/3.jpg',function(req,res){
    res.writeHead(200,  {'Content-Type':'image/jpeg'});
    iofile.getjsondata('./static/img/3.jpg',function (error,data){
        res.end(data)
    })
})

// 获取短信验证码
router.get('/code.json',function(req,res){
    res.setHeader('Access-Control-Allow-Origin', '*')
    iofile.getjsondata('./static/code.json',function (error,data){
        let index=parseInt(16*Math.random())
        res.end(JSON.parse(data)[index].code)
    })
})

// 提交短信登陆数据
router.get('/phoneLogin',function(req,res){
    res.setHeader('Access-Control-Allow-Origin', '*')
        req.session.user=req.query.user
        res.end()
        iofile.getjsondata('./static/phoneLogin.json',function (error,data){
            let response=JSON.parse(data)
            let findindex=response.findIndex(element=>{return element.user===req.query.user})
            if(findindex===-1){
                response.push(req.query)
                iofile.savejsondata('./static/phoneLogin.json',JSON.stringify(response,"","\t"))
            }
        })
    
})


router.get('/imgcode.json',function(req,res){
    res.setHeader('Access-Control-Allow-Origin', '*')
    iofile.getjsondata('./static/imgcode.json',function (error,data){
        res.end(data)
    })
})

// 提交密码登录数据
router.get('/passwordLogin',function(req,res){
    res.setHeader('Access-Control-Allow-Origin', '*')
    req.session.user=req.query.user
    res.end()
    iofile.getjsondata('./static/passwordLogin.json',function (error,data){
        let response=JSON.parse(data)
        let findindex=response.findIndex(element=>{return element.user===req.query.user})
        if(findindex===-1){
            response.push(req.query)
            iofile.savejsondata('./static/passwordLogin.json',JSON.stringify(response,"","\t"))
        }
    })
})

// 自动登录
router.get('/getsession',function(req,res){
    res.setHeader('Access-Control-Allow-Origin', '*')
    if(req.session.user){
        iofile.getjsondata('./static/phoneLogin.json',function (error,data){
            let response=JSON.parse(data)
            let findindex=response.findIndex(element=>{return element.user===req.session.user})
            if(findindex!==-1){
                res.end(JSON.stringify(response[findindex]))
            }else{
                iofile.getjsondata('./static/passwordLogin.json',function (error,data){
                    let response2=JSON.parse(data)
                    let findindex2=response.findIndex(element=>{return element.user===req.session.user})
                    if(findindex2!==-1){
                        res.end(JSON.stringify(response2[findindex2]))
                    }else{
                        res.end()
                    }
                })
            }
        })
    }else{
        res.end()
    }
})

// 退出登录
router.get('/quitlogin',function(req,res){
    res.setHeader('Access-Control-Allow-Origin', '*')
    req.session.user=null
    console.log('已清除session数据')
    console.log(res.session)
})


// 获取店铺信息

module.exports=router