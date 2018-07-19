/* 
*@user: suxin
*@DATE: 2018/7/13
*@TIME: 17:28
*/
/**
 * 引入http模块
 * @type {module:http}
 */
var http = require('http')
/**
 * 引入fs模块
 * @type {module:fs}
 */
var fs = require('fs')

http.createServer(function(req,res) {
  res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})

var pathname = req.url
  if(pathname=='/'){
    pathname='index.html'
  }
  if(pathname!='/favicon.ico'){/*过滤favicon.ico*/
  fs.readFile('static/'+pathname,function(err,result){
    if(err){//没有这个文件
      console.log('404');
    }else{//返回这个文件
      res.write(result)
      res.end()/*结束响应*/
    }
  })
  }
  // res.write('hi')

}).listen(8001)



