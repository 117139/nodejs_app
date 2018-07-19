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
/**
 * 引入path模块
 * @type {module:path}
 */
var path = require('path')
/**
 * 引入url模块
 * @type {module:url}
 */
var url = require('url')

http.createServer(function(req, res) {
  // res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})

  var pathname = url.parse(req.url).pathname
  if (pathname == '/') {
    pathname = 'index.html'
  }

  //获取后缀名
  var extname = path.extname(pathname)


  var mimeM = require('./model/getmime.js')
  // mime.getMime('.css')
  if (pathname != '/favicon.ico') {/*过滤favicon.ico*/
    fs.readFile('static/' + pathname, function(err, result) {
      if (err) {//没有这个文件
        console.log('404');
        fs.readFile('static/404.html', function(err, da404) {
          res.writeHead(200, {"Content-Type": "text/html;charset=utf-8"})
          res.write(da404)
          res.end()
          /*结束响应*/
        })
      } else {//
        if (extname == '') {
          extname = '.html'
        }
        // var mime= mimeM.getMime(fs,extname)//获取文件类型
        // res.writeHead(200,{"Content-Type":""+mime+";charset=utf-8"})
        // res.write(result)
        // res.end()/*结束响应*/
        var mime = mimeM.getMime(fs, extname, function(mime) {
          res.writeHead(200, {"Content-Type": "" + mime + ";charset=utf-8"})
          res.write(result)
          res.end()
          /*结束响应*/
        })
      }
    })
  }

  // res.write('hi')

}).listen(8002)



