var express = require('express')

var app = new express();
app.get('/',function(req,res){
  res.send('你好express')
})
app.get('/news',function(req,res){
  res.send('news')
})
app.get('/login',function(req,res){
  res.send('登录')
})
app.get('/register',function(req,res){
  res.send('注册')
})


// 动态路由
app.get('/newscontent/:aid',function(req,res){
  console.log(req.params);
  var aid=req.params.aid
  res.send('newscontent模块'+aid);
})


app.listen(3001,'127.0.0.1')