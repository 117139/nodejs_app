//引入http模块
var http = require('http');

var url = require('url');
var model = require('./model/model.js')
//model['register']('111', '222')
//路由指的就是针对不同请求的URL，处理不同的业务逻辑
http.createServer(function (req, res) {
  res.writeHead(200, {"Content-Type": "text/html;charset=utf-8"})
  var pathname = url.parse(req.url).pathname.replace('/', '');
  if (pathname != 'favicon.ico') {
    try {
      model[pathname](req, res)
    } catch (err) {
      model['home'](req, res)
    }

  }
  // console.log(pathname)
}).listen(8001);






