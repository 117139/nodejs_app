//引入http模块
var http = require('http');

//fs模块

var fs = require('fs');

http.createServer(function (req, res) {
  res.writeHead(200, {"Content-Type": "text/html;charset=utf-8"})
  var pathname = req.url
  if (pathname == '/') {
    pathname = 'index.html'
  }
  if (pathname != '/favicon.ico') {
    fs.readFile('static/' + pathname, function (err, data) {
      if (err) {
        console.log('404')
        return;
      } else {
        res.write(data);
        res.end()
      }

    })
  }


}).listen(8001);
