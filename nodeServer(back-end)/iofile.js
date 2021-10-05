var fs=require('fs')

exports.getjsondata=function(url,redata){
    fs.readFile(url,'utf8',function(error,data){
        if(error){
            console.log('读取文件失败')
            redata(error)
        }else{
            redata(null,data)
            console.log('读取文件成功')
        }
    })
}


exports.savejsondata=function(url,data){
    fs.writeFile(url,data,function(error){
        if(error){
            console.log('写入文件失败')
        }else{
            console.log('写入文件成功')
        }
    })
}