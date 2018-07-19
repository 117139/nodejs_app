var sd = require('silly-datetime')
var http = require('http')

var app = http.createServer(function(req, res) {
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    var st = sd.format(new Date(), 'YYYY-MM-DD HH:mm');
    res.write('你好1' + st);
    res.end();
})
app.listen(8002, '127.0.0.1');