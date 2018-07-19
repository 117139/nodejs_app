var fs = require('fs')
var data = '我是从数据库里获取的数据，我要保存起来\n'

var writeStream = fs.createWriteStream('output.txt')
for(var i=0;i<100;i++){
    writeStream.write(data,'utf8')
}

writeStream.end()

writeStream.on('finish',function(){
    console.log('ok')
})
writeStream.on('error',function(){
    console.log('err')
})