
var mysql= require('mysql');
var iofile=require('./iofile')


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'qazxcv123',
  database : 'blm_user'
});

// 将短信登陆用户数据保存到数据库
iofile.getjsondata('./static/passwordLogin.json',function (error,data){
    var passwordData=JSON.parse(data)
    console.log(JSON.parse(data))
    connection.connect();
    connection.query('DELETE FROM passwordLogin', function (error, results, fields) {
        if (error) throw error;
    });
    passwordData.forEach(element => {
        var user=element.user
        var loginPassword=element.loginPassword
        var imgCode=element.imgCode
        var loginTime=element.loginTime
        connection.query('INSERT INTO passwordLogin VALUE(?,?,?,?)',[user,loginPassword,imgCode,loginTime], function (error, results, fields) {
        if (error) throw error;
        });
        });
        // connection.end();
});

// 将密码登陆用户数据保存到数据库
iofile.getjsondata('./static/phoneLogin.json',function (error,data){
    var passwordData=JSON.parse(data)
    console.log(JSON.parse(data))
    // connection.connect();
    connection.query('DELETE FROM phoneLogin', function (error, results, fields) {
        if (error) throw error;
    });
    passwordData.forEach(element => {
        var user=element.user
        var code=element.code
        var loginTime=element.loginTime
        connection.query('INSERT INTO phoneLogin VALUE(?,?,?)',[user,code,loginTime], function (error, results, fields) {
        if (error) throw error;
        });
        });
        connection.end();
})