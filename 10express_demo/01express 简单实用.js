var express = require('express')

var app = new express();
app.get('/',function(req,res){
  res.send('你好express')
})
app.get('/news',function(req,res){
  res.send('news')
})
app.listen(3000,'127.0.0.1')