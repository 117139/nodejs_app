var fs = require('fs')

// fs.stat('index.txt',function(err,stats){
//     if(err){
//         console.log(err)
//         return false
//     }
//
//     console.log('文件：'+stats.isFile())
//     console.log('目录：'+stats.isDirectory())
// })

// 2. fs.mkdir

// fs.mkdir('css',function(err){
//     if(err){
//         console.log(err)
//         return false
//     }
//     console.log('创建成功')
// })

// 3. fs.writeFile

// fs.writeFile('t.txt', '你好node', function (err) {
//     if (err) {
//         console.log(err)
//         return false
//     }
//     console.log('写入成功')
// })

// 4. fs.appendFile 追加

// fs.appendFile('t1.txt','这是写入的内容',function(err){
//     if(err){
//         console.log(err)
//         return false
//     }
//     console.log('写入成功')
// })

// 5. fs.readFile 读取文件

// fs.readFile('t.txt',function(err,data){
//     if(err){
//         console.log(err)
//         return false
//     }
//     console.log('读取成功 内容为：'+data)
//     console.log(data)
// })

// 6. fs.readdir 读取目录
// fs.readdir('html',function(err,data){
//     if(err){
//         console.log(err)
//         return false
//     }
//     console.log(data)
// })

// 7. fs.rename 重命名
//  fs.rename('html/index.html','html/news.html',function(err){
//      if(err){
//         console.log(err)
//         return false
//     }
//     console.log('重命名成功')
//  })

// fs.rename('html/style.css','html/css/basic.css',function(err){
//     if(err){
//         console.log(err)
//         return false
//     }
//     console.log('剪切成功')
// })

// 8. fs.rmdir
// fs.rmdir('html/re',function(err){
//     if(err){
//         console.log(err)
//         return false
//     }
//     console.log('del')
// })

// 9. fs.unlink

fs.unlink('index.txt',function(err){
    if(err){
        console.log(err)
        return false
    }
    console.log('deldir')
})
