var http = require('http')

http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
    res.write('你好 nodejs\r\n')
    res.write('你好 Shivers')
    res.end()
}).listen(8081);

console.log('server running at http://192.168.2.18:8081')