//引入http模块
var http = require('http');

var url = require('url');
//路由指的就是针对不同请求的URL，处理不同的业务逻辑
http.createServer(function (req, res) {
  //login 登录 register 注册
  var pathname = url.parse(req.url).pathname;
  if(pathname=='/login'){
    res.end('login')
  }else if(pathname=='/register'){
    res.end('register')
  }else if(pathname=='/order'){
    res.end('order')
  }else{
    res.end('index')
  }
  //router.statics(req,res,'static')

}).listen(8001);
