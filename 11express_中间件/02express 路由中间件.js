/*
 中间件就是匹配路由之前和之后做的一系列操作

权限判断 ：没有登录跳转到登录页面，登录以后就显示登录以后的页面
 */
var express = require('express')
var app = new express()
/*
中间件 表示匹配任何路由

应用级中间件

next() 路由继续向下匹配
*/

app.get('/', function (req, res) {
  res.send('你好      express')
})
app.get('/news', function (req, res, next) {
  console.log('你好      express')
  next()
})
app.get('/news', function (req, res) {
  console.log('你好      express1')
})

app.listen(3001, '127.0.0.1')