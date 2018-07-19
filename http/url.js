var http = require('http')
var url = require('url')

http.createServer(function(req,res){



    // var query = url.parse(req.url, true);
    //
    // console.log(query);
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
    if(req.url!="/favicon.ico"){
        console.log(req.url);
        var result = url.parse(req.url, true);

        console.log(result.query.aid);
        console.log(result.query.c);
    }
    res.write('你好1 nodejs\r\n')
    res.write('你好 Shivers');
    res.end()
}).listen(8081);

console.log('server running at http://192.168.2.18:8081')