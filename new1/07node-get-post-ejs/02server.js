/* 
*@user: suxin
*@DATE: 2018/7/16
*@TIME: 17:44
*/

/**
 * 引入 http 模块
 * @type {module:http}
 */
var http = require('http')
/**
 * 引入 url 模块
 * @type {module:url}
 */
var url = require('url')
/**
 * 引入path模块
 * @type {module:path}
 */
var path = require('path')
var router = require('./model/router.js')
http.createServer(function(req, res) {
  // router.statics(req,res,'static')
  if (pathname != '/favicon.ico') {
    var pathname = url.parse(req.url).pathname
    var extname = path.extname(pathname)
    console.log(pathname);
    console.log(extname);
    if(pathname=='/login'){
      res.end('login')
    }else if(pathname=='/register'){
      res.end('register')
    }else if(pathname=='/order'){
      res.end('order')
    }else{
      res.end('index')
    }
  }
}).listen(8002)
