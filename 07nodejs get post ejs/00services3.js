//引入http模块
var http = require('http');

var url = require('url');
var ejs = require('ejs');
//路由指的就是针对不同请求的URL，处理不同的业务逻辑
http.createServer(function (req, res) {
  res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
  //login 登录 register 注册
  var pathname = url.parse(req.url).pathname;
  if(pathname=='/login'){
    var data='你好数据'
    var list=[
      '111',
      '222',
      '333'
    ]
    //把数据库的数据渲染到模板上面
    ejs.renderFile('views/login.ejs',{
      msg:data,
      list:list
    },function(err,data){
      res.end(data)
    })
  }else if(pathname=='/register'){
    var msg='注册'
    var h='<h2>好</h2>'
    ejs.renderFile('views/register.ejs',{
      msg:msg,
      h:h
    },function(err,data){
      res.end(data)
    })
  }else if(pathname=='/order'){
    res.end('order')
  }else{
    res.end('index')
  }

}).listen(8001);
