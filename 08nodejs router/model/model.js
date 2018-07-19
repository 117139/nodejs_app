var fs= require('fs')
var ejs = require('ejs')
var app = {
  login: function (req, res) {
    // console.log('login')
    // res.end('login')
    ejs.renderFile('views/form.ejs',{},function(err,data){
      res.end(data)
    })
  },
  dologin: function (req, res) {
    var postStr='';
    req.on('data',function(chunk){
      postStr+=chunk;
    })
    req.on('end',function(err,chunk){
      console.log(postStr)
      fs.appendFile('login.txt',postStr+'\n',function(err){
        if(err){
          console.log(err)
          return;
        }
        console.log('写入数据成功');
      })
      res.end("<script>alert('登陆成功');history.back();</script>")
    })
  },
  register: function (req, res) {
    console.log('register')
    res.end('register')
  },
  home: function (req, res) {
    console.log('home')
    res.end('home')
  }
}
// app.login(req,res)
//
// app['login'](req,res)

module.exports=app;