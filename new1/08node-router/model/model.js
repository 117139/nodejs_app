/* 
*@user: suxin
*@DATE: 2018/7/18
*@TIME: 15:57
*/
var ejs = require('ejs')
var fs = require('fs')
var app = {
  login: function(req, res) {
    // res.end('login')
    ejs.renderFile('views/form.ejs', {}, function(err, data) {
      // res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
      res.end(data)
    })
  },
  dologin: function(req, res) {
    var method = req.method.toLocaleLowerCase()
    if (method == 'get') {
      console.log(url.parse(req.url, true).query);
    }
    if (method == 'post') {
      var postStr = ''
      req.on('data', function(chunk) {
        postStr += chunk;

      })
      req.on('end', function(err, chunk) {
        console.log(postStr);
        fs.appendFile('login.txt', postStr + '\n', function(err1) {
          if (err1) {
            console.log(err1);
            return false
          }
          console.log('写入成功');
        })

        res.end("<script>alert('登录成功');history.back();</script>")
      })
    }
  },
  register: function(req, res) {
    res.end('register')
  },
  home: function(req, res) {
    res.end('home')
  }
}
// app.login(1,2)
// app['login'](1,2)
module.exports = app