/*
*@user: suxin
*@DATE: 2018/7/14
*@TIME: 9:43
*/
// var fs = require('fs')

exports.getMime = function(fs, extname) {
  // fs.readFile('./mime.json', function(err, data) {
  //   if (err) {
  //     console.log('文件不存在');
  //     return false
  //   }
  //   console.log(data);
  //   var Mime = JSON.parse(data.toString())
  //   return Mime[extname]
  // })
//读取数据改为同步
  var data = fs.readFileSync('mime.json')
  var Mimes=JSON.parse(data.toString())
  return Mimes[extname] || 'text/html'
}