var express = require('express')

var app = new express();
app.get('/',function(req,res){
  res.send('你好express')
})


// 动态路由 http://localhost:3000/newscontent/213
app.get('/newscontent/:aid',function(req,res){
  console.log(req.params);
  var aid=req.params.aid
  res.send('newscontent模块'+aid);
})

//获取get传值 http://localhost:3000/product?aid=123
app.get('/product',function(req,res){
  //req.query 获取get传值
  console.log(req.query);
  res.send('product'+req.query.aid+'----'+req.query.cid)
})

app.listen(3001,'127.0.0.1')