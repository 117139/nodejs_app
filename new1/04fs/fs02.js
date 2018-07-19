/*
*@fileName: fs02.js
*@autor: suxin
*@date: 2018/7/13
*@time: 15:20
*
*/
var fs = require('fs')

/**
 * 1.判断服务器上面有没有upload目录，没有就创建这个目录 (图片上传)
 * @param upload 目录名
 */
function stat(upload) {
  fs.stat(upload,function(err,stats){
    if(err){/*没有这个目录*/
      mkdir(upload)
    }else{
      console.log('目录已存在');
      console.log(stats.isDirectory());
    }
  })
}

/**
 *创建目录
 * @param {String} upload 要创建的目录
 */
function mkdir(upload){
  fs.mkdir(upload,function(error){
    if(error){
      console.log(error);
      return false
    }
    console.log('创建成功');
  })
}
// stat('upload')



/**
 * 2.找出html目录虾米那的所有的目录，然后打印出来
 * @param obj
 */
function readdir(obj){
  fs.readdir(obj,function(err,files){
    if(err){
      console.log(err);
    }else{/*判断是否是目录*/
       console.log(files);
       var ml=[];

      (function getFile(i){
        if(i==files.length){
          console.log(ml);
          return false
        }
        //注意：目录
        fs.stat('html/'+files[i],function(error,stats){
          if(stats.isDirectory()){
            console.log(files[i]);
            ml.push(files[i])
          }
            getFile(i+1)
        })
      })(0)
    }
  })
}
readdir('html')