var sd = require('silly-datetime')

var http =require('http')
var md5 = require('md5-node')

var app =http.createServer(function(req,res){
  res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
  var d = sd.format(new Date(),'YYYY-MM-DD HH:mm')
  res.write('你好 node'+d)
  res.write(md5('你好你好'))
  res.end()
})
app.listen(8008,'127.0.0.1')