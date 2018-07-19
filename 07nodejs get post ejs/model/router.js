//fs模块
var fs = require('fs');
//path
var path = require('path') //nodejs自带模块
//url
var url = require('url')
//获取文件类型的方法 私有
function getMime(extname,callback) {
  fs.readFile('./mime.json', function (err, data) {
    if (err) {
      console.log('json 不存在')
      return false
    }
    var Mimes = JSON.parse(data.toString())

    var result = Mimes[extname] || 'text/html';
    callback(result);
  })
}

exports.statics = function (req,res,staticpath) {


  var pathname = url.parse(req.url).pathname;/*获取url的值*/

  if (pathname == '/') {
    pathname = '/index.html' /*默认加载首页*/
  }
  //获取后缀名
  var extname = path.extname(pathname)

  if (pathname != '/favicon.ico') {/*过滤请求favivon.ico*/
    fs.readFile(staticpath+'/'+pathname, function (err, data) {
      if (err) {
        fs.readFile(staticpath+'/404.html', function (error, data404) {
          if (error) {
            console.log(error)
          }
          res.writeHead(404, {"Content-Type": "text/html;charset=utf-8"})
          res.write(data404);
          res.end()/*结束响应*/
        })
      } else { /*返回这个文件*/
        getMime(extname, function (mime) {
          res.writeHead(200, {"Content-Type": "" + mime + ";charset=utf-8"})
          res.write(data);
          res.end();/*结束响应*/
        })

      }

    })
  }

}