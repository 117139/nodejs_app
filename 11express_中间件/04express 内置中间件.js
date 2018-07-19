/*

 */
var express = require('express')
var app = new express()

//内置中间件 托管静态页面
app.use(express.static('public'))


app.use('/static',express.static('public'))


app.get('/', function (req, res) {
  res.send('你好      express')
})

app.listen(3001, '127.0.0.1')