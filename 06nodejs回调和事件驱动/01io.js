var fs=require('fs')


//非阻塞式io
// console.log('1');
// fs.readFile('mime.json',function(err,data){
//   console.log('2')
//
// })
// console.log('3')

function getMime(){
  fs.readFile('mime.json',function(err,data){
    return data;
  })
}

console.log(getMime());/*有问题*/