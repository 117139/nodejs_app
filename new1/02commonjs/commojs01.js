var http = require('http')
var config = require('./config.js')
var tools = require('./tools.js')
var foo = require('foo')
var bar = require('bar/bar')
var bar1 = require('bar')
var app = http.createServer(function (req, res) {
  if (req.url !== '/favicon.ico') {
    res.writeHead(200, {"Content-Type": "text/html;charset=utf-8"})
    res.write('你好 6666')
    console.log(config);
    console.log(tools.add(1,3));
    console.log(foo);
     console.log(bar);
    console.log(bar1);
    res.end()
  }
})

app.listen(8002, '127.0.0.1')