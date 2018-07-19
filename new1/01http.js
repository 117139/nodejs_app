// http模块
  var http = require('http')
// 创建
  http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
    res.write('你好 node')
    res.end()
  }).listen(8001)

http.createServer().lis