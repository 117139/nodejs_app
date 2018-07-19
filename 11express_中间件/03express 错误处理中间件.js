/*

 */
var express = require('express')
var app = new express()


app.get('/', function (req, res) {
  res.send('你好      express')
})
app.get('/news', function (req, res, next) {
  // console.log('你好  nnn    express')
  // next()
  res.send('66666')
})
//匹配所有路由
app.use(function (req,res) {
  res.status(404).send('这是404，表示路由没有匹配到')

})

app.listen(3001, '127.0.0.1')