var fs=require('fs')
var http=require('http')
var url=require('url')



var server=http.createServer()
server.on('request',function(request,response){
    pathname=url.parse(request.url)
    console.log('收到客户端请求,请求路径为:'+request.url)
    var resdata='成功访问服务器'
    response.setHeader('Content-Type','text/plain;charset=utf-8')
    response.write(JSON.stringify(resdata))
    response.end()
})

server.listen(3000,function(){
    console.log('服务器启动成功，可以通过 http://localhost:3000')
})