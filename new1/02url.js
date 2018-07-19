var http = require('http')
var url = require('url')

http.createServer(function(req,res){
  if(req.url!== '/favicon.ico') {
    console.log(req.url);
    var result= url.parse(req.url,true)
    console.log(result.query.id);
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
    res.write('solo1')
    res.write(req.url)
  }
  res.end()
}).listen(8002)