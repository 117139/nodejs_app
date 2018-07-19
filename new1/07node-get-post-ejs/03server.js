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
 * 引入 ejs 模块
 * @type {module:ejs}
 */
var ejs = require('ejs')


http.createServer(function(req, res) {
  res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
  // router.statics(req,res,'static')
  var pathname = url.parse(req.url).pathname
  if (pathname != '/favicon.ico') {

    if (pathname == '/login') {
      var data='你好数据';
      var list=['1','2','3','4','5'];

      ejs.renderFile('views/login.ejs',{
        msg:data,
        list:list
      },function(err,data) {
        console.log(1112);
        res.end(data)
      })
      //res.end('login')
    } else if (pathname == '/register') {
      var data='你好注册数据';
      var list=['1','2','3','4','5'];

      ejs.renderFile('views/login.ejs',{
        msg:data,
        list:list
      },function(err,data) {
        console.log(1112);
        res.end(data)
      })
    } else if (pathname == '/order') {
      res.end('order')
    } else {
      res.end('index')
    }
  }
}).listen(8001)
