/* 
*@user: suxin
*@DATE: 2018/7/16
*@TIME: 9:33
*/
var 03 = require('new1/06node-io/03events')

var Eemitter=new 03.EventEmitter()

//广播和接收广播
Eemitter.on('to_parent',function(data) {
  console.log('接收成功'+data);
})

setTimeout(function() {
  Eemitter.emit('to_parent','发送数据')
},2000)