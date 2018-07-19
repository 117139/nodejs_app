var http = require('http')
var str =require('./config.js')
var app = http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
    res.write('你好')
    console.log(str)
    res.end()
})
app.listen(8001,'127.0.0.1')