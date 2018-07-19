// npm install md5-node

//注意： 以后安装模块时要把模块写入到package.json文件

//npm install md5-node --save 写入package.json 的dependencies
//npm install md5-node --save-dev 写入package.json 的devDependencies
var md5 = require('md5-node')
console.log(md5('123456'))

var sd = require('silly-datetime')
var d = sd.format(new Date(), 'YYYY-MM-DD')
console.log(d)