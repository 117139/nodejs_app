/* 
*@user: suxin
*@DATE: 2018/7/16
*@TIME: 9:30
*/
var fs = require('fs')
function getMime(callback) {
  fs.readFile('./mime.json',function(err,data) {
    console.log(2);
    callback( data)
  })
}

getMime(function(result){
  console.log(result.toString());
})