var express=require('express')
var router=require('./router')
var bodyParser=require('body-parser')
var session=require('express-session')

// 创建服务器
var server=express()

// 配置参数提取模块body-parser
server.use(bodyParser.urlencoded({extended:false}))
server.use(bodyParser.json())

server.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000*60*60 }
  }))
// 挂载路由
server.use(router)

// 开放静态文件访问权限
server.use('/static/',express.static('./static'))


// 设置服务器端口号
server.listen(3000,function(){
    console.log('服务器启动成功，请访问: http://localhost:3000')
})