/*
*@fileName: fs01.js
*@autor: suxin
*@date: 2018/7/10
*@time: 10:07
*
*/
/*
1. fs.stat 检测是文件还是目录
2. fs.mkdir 创建目录
3. fs.writeFile 创建写入文件
4. fs.appendFile 追加文件
5.fs.readFile 读取文件
6.fs.readdir 读取目录
7.fs.rename 重命名
8. fs.rmdir 删除目录
9. fs.unlink 删除文件
10. fs.createReadStream 从文件流中读取数据
11. fs.createWriteStream 写入文件
12. 管道流
*/
var fs = require('fs')

//1.fs.stat 检测是文件还是目录
/***
 *fs.stat 检测是文件还是目录
 * @param html
 */
function fss(html) {
  fs.stat(html, function (err, stats) {
      if (err) {
        console.log(err);
        return false;
      }
      console.log('文件：' + stats.isFile());
      console.log('目录：' + stats.isDirectory());
    }
  )
}

// fss('index.txt')


//2.fs.mkdir 创建目录
//path               将创建的目录路径
//mode               目录权限(读写权限)，默认0777
//callback           回调，传递异常参数err
/**
 *
 * @param obj
 */
function mkdir(obj) {
  fs.mkdir(obj, function (err) {
    if (err) {
      console.log(err);
      return false;
    }
    console.log('创建目录成功');

  })
}
// mkdir('css')


//3.fs.writeFile 创建

//filename    (String)          文件名称
//data        (String|Buffer)   将要写入的内容，可以使字符串 或 buffer数据
//options     (Object)          option数组对象，包含：
//· encoding  (string)          可选值，默认‘utf-8' 当data使buffer时，该值应该为ignored
//· mode      (Number)          文件读写权限，默认值438
//· flag      (String)          默认值’w‘
//callback    {function}        回调，传递异常参数err
/**
 *
 * @param file 文件名称
 * @param obj 将要写入的内容，可以使字符串 或 buffer数据
 */
function writeFile(file,obj){
  fs.writeFile(file,obj,function(err){
    if(err){
      console.log(err);
      return false;
    }
    console.log('写入成功');
  })
}
//writeFile('t.txt','aaaaaaaaaaaaaa')

//4. fs.appendFile 追加文件
/**
 *
 * @param obj
 * @param inr
 */
  function appendfile(obj,inr){
    fs.appendFile(obj,inr,function(err){
      if(err){
        console.log(err);
        return false;
      }
      console.log('写入成功');
    })
  }
// appendfile('t1.txt','地下层\n')

// 5.fs.readFile 读取文件

/**
 *fs.readFile 读取文件
 * @param obj 111
 * @constructor
 */
  function readFile(obj){
    fs.readFile(obj,function(err,stats){
      if(err){
        console.log(err);
        return false;
      }
      console.log('inr:'+stats);
    })
  }
  // readFile('t1.txt')

// 6.fs.readdir 读取目录  把目录下的文件和文件夹都获取到。
/**
 *
 * @param obj
 */
function readdir(obj){
  fs.readdir(obj,function(err,stats){
    if(err){
      console.log(err);
      return false;
    }
    console.log('inr:'+stats);
  })
}
 // readdir('html')

//7.fs.rename 重命名

function rename(obj,newname){
  fs.rename(obj,newname,function(err){
    if(err){
      console.log(err);
      return false;
    }
    console.log('ok');
  })
}
// rename('t2txt','t2.txt') //改名
//rename('html/js/t1.css','html/css/t2.css') //剪切


//8. fs.rmdir    *删除目录*
 function rmdir(obj){
   fs.rmdir(obj,function(err){
     if(err){
       console.log(err);
       return false;
     }
     console.log('ok');
   })
 }
// rmdir('html/js')



// 9. fs.unlink               *删除文件*
function unlink(obj){
  fs.unlink(obj,function(err){
    if(err){
      console.log(err);
      return false;
    }
    console.log('ok');
  })
}
// unlink('t2.txt')

//10. fs.createReadStream 从文件流中读取数据
/**
 *10. fs.createReadStream 从文件流中读取数据
 * @param {String} obj
 */
function crread(obj){
  var readStream = fs.createReadStream(obj)
  var str=''
  var count = 0
  readStream.on('data',function(chunk){
    str+=chunk;
    count++;
  })
  readStream.on('end',function(chunk){
    console.log(str);
    console.log(count);
  })
  readStream.on('error',function(err){
    console.log(err);
  })
}
// crread('t1.txt')
//11. fs.createWriteStream 写入文件
var data1='我是数据，保存起来\n'

/**
 *
 * @param obj 将要写入的文件名
 */
function crwrite(obj){
  var writerStream = fs.createWriteStream(obj)
  writerStream.write(data1,'utf8')
  //标记写入完成
  writerStream.end()
  writerStream.on('finish',function(){
    console.log('写入完成');
  })
  //标记写入失败
  writerStream.on('error',function(){
    console.log('写入失败');
  })
}
//crwrite('t1.txt')

//12. 管道流
var readStream = fs.createReadStream('t.txt')
var writerStream = fs.createWriteStream('t1.txt')
readStream.pipe(writerStream)
console.log('程序执行完毕');