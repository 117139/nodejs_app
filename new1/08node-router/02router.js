/* 
*@user: suxin
*@DATE: 2018/7/18
*@TIME: 16:02
*/
var http = require('http')

var url = require('url')

var model = require('./model/model.js')

http.createServer(function(req,res) {
  res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})

  // res.end()/*结束响应*/


  var pathname = url.parse(req.url).pathname.replace('/','')
  if(pathname!='favicon.ico'){
    try {
      model[pathname](req,res)
    }catch (e) {
      model['home'](req,res)
    }
    console.log(pathname);
  }

}).listen(8001)
