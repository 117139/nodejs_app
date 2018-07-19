/* 
*@user: suxin
*@DATE: 2018/7/16
*@TIME: 17:58
*/

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

function getMime(extname,callback) {
  fs.readFile('./mime.json', function(err, data) {
    if (err) {
      console.log('该文件不存在');
      return false;
    }
    var Mimes = JSON.parse(data.toString())
    var result = Mimes[extname] || 'text/html';
    callback(result)
  })

}

exports.statics = function(req,res,staticpath) {

  var pathname = url.parse(req.url).pathname
  if (pathname == '/') {
    pathname = 'index.html'/*默认首页*/
  }

  //获取后缀名
  var extname = path.extname(pathname)


  // var mimeM = require('./model/getmime-event.js')
  // mime.getMime('.css')
  if (pathname != '/favicon.ico') {/*过滤favicon.ico*/
    fs.readFile(staticpath+'/' + pathname, function(err, data) {
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

        getMime(extname,function(mime) {
          res.writeHead(200, {"Content-Type": "" + mime + ";charset=utf-8"})
          // res.write(result)
          res.end(data)
        })
        // mimeM.getMime(fs, Eemitter, extname)
        // Eemitter.on('to_mime', function(mime) {
        //   res.writeHead(200, {"Content-Type": "" + mime + ";charset=utf-8"})
        //   // res.write(result)
        //   res.end(data)
        // })
      }
    })
  }

}