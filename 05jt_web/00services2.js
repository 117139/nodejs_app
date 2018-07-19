//引入http模块
var http = require('http');

//fs模块

var fs = require('fs');
//path
var path = require('path') //nodejs自带模块

var mimeModel = require('./model/getmime.js')

http.createServer(function (req, res) {
  var pathname = req.url
  if (pathname == '/') {
    pathname = '/index.html'
  }
  //获取后缀名
  var extname =path.extname(pathname)
  if (pathname != '/favicon.ico') {
    fs.readFile('static/' + pathname, function (err, data) {
      if (err) {
        fs.readFile('static/404.html', function (error, data404) {
          if (error) {
            console.log(error)
          }
          res.writeHead(404, {"Content-Type": "text/html;charset=utf-8"})
          res.write(data404);
          res.end()
        })
        return;
      } else {
        var mime = mimeModel.getMime(extname)
        res.writeHead(200, {"Content-Type": ""+mime+";charset=utf-8"})
        res.write(data);
        res.end()
      }

    })
  }


}).listen(8001);
