/*
*@user: suxin
*@DATE: 2018/7/16
*@TIME: 13:52
*/

var fs = require('fs')
var events = require('events')
var Eemitter =new events.EventEmitter()

function getMime(callback) {
  fs.readFile('./mime.json',function(err,data){
    if (err){
      console.log('该文件不存在');
      return false;
    }
    //callback(data)
      Eemitter.emit('data',data)
  })

}
getMime()
/**
 * 监听广播数据
 */
Eemitter.on('data',function(mime){
  console.log(mime.toString());
})