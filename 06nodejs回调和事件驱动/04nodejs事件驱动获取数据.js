var fs=require('fs')
var events=require('events')
var EventEmitter=new events.EventEmitter()

function getMime(callback){
  fs.readFile('mime.json',function(err,data){
    // return data;
    EventEmitter.emit('data',data)
  })
}

getMime()/*执行方法*/

EventEmitter.on('data',function(mime){
  console.log(mime.toString())
})