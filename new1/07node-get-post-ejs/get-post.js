/* 
*@user: suxin
*@DATE: 2018/7/17
*@TIME: 17:17
*/

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

var fs = require('fs')

http.createServer(function(req, res) {
  res.writeHead(200, {"Content-Type": "text/html;charset=utf-8"})
  // router.statics(req,res,'static')
  var pathname = url.parse(req.url).pathname
  if (pathname != '/favicon.ico') {

    if (pathname == '/login') {
      ejs.renderFile('views/form.ejs', {}, function(err, data) {
        // console.log(1112);
        res.end(data)
      })
    } else if (pathname == '/dologin') {/*执行登录*/

      // ejs.renderFile('views/login.ejs', {}, function(err, data) {
        var method = req.method.toLocaleLowerCase()
        if (method == 'get') {
          console.log(url.parse(req.url, true).query);
        }
        if (method == 'post') {
          var postStr=''
          req.on('data', function(chunk) {
            postStr+=chunk;

          })
          req.on('end',function(err,chunk) {
            console.log(postStr);
            fs.appendFile('login.txt',postStr+'\n',function(err1) {
              if (err1){
                console.log(err1);
                return false
              }
              console.log('写入成功');
            })
             res.end("<script>alert('登录成功');history.back();</script>")
          })
        }
        // res.end(data)
      // })
    } else if (pathname == '/order') {
      res.end('order')
    } else {
      var data = '你好注册数据';
      var list = [
        '1',
        '2',
        '3',
        '4',
        '5'
      ];

      ejs.renderFile('views/index.ejs', {}, function(err, data) {
        console.log(1112);
        res.end(data)
      })
    }
  }
}).listen(8001)
