var fs=require('fs')

// fs.readFile('./static/index_category.json','utf8',function(error,data){
//     if(error){
//         console.log(error)
//     }else{
//         console.log(data)
//     }
// })
const path1='./static/index_category.json'
function abc(path1){
    fs.readFile(path1,'utf8',function(error,data){
        if(error){
            console.log(error)
        }else{
            console.log(data)
        }
    })
}
abc()