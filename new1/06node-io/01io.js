/*
*@user: suxin
*@DATE: 2018/7/16
*@TIME: 9:25
*/
var fs = require('fs')

// 非阻塞io
// fs.readFile('./mime.json',function(err,data) {
//   console.log(2);
// })


function getMime() {
  fs.readFile('./mime.json',function(err,data) {
    console.log(2);
    return data
  })
}