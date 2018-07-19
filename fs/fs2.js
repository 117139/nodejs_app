var fs = require('fs')
// 1. 判断服务器上面没有upload目录，有不创建 没有创建这个目录
fs.stat('upload', function (err, stats) {
    if (err) {
        fs.mkdir('upload', function (error) {
            if (error) {
                console.log(error)
                return false
            }
            console.log('创建成功')
        })
    } else {
        console.log('目录存在')
        console.log(stats.isDirectory())
    }
})


// 2. 找出html目录下的所有目录，然后打印出来
var arrfile=[]
fs.readdir('html', function (err, data) {
    if (err) {
        console.log(err)
    }else{
        // console.log(data);
        (function getFile(i){
            if(i==data.length){
                console.log(arrfile)
                return false
            }
            fs.stat('html/'+data[i],function(err,stats){
                // console.log(data[i])
                if(stats.isDirectory()){
                    arrfile.push(data[i]);
                }
                getFile(i+1)
            })
        })(0)
    }
})