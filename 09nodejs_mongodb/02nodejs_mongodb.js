/*
1. npm install mongodb --save-dev

2.var MongoClient = require('mongodb').MongoClient
var url='mongodb://loaclhost:27017/test';    两节数据库的地址

3.连接数据库
MongoClient.connect(url,function(err,db){

})

4.实现修改删除
MongoClient.connect(url,function(err,db){
  db.collections('user').insertOne({"name":'zhangsan'},function(error,data){
  })
})
*/

var http = require('http')

var ejs = require('ejs')

var app= require('./model/express_route.js')

var MongoClient = require('mongodb').MongoClient
var DBurl='mongodb://localhost:27017/itying';


http.createServer(app).listen(3000)

app.get('/',function(req,res){
  MongoClient.connect(DBurl,function(err,db){
    if(err){
      console.log('连接失败');
      return;
    }
    var list = [];
    var result = db.collection('user').find({})
    result.each(function(error,doc){
      if(error){
        console.log(error);
      }else{
        if(doc!=null){
          list.push(doc);
        }else{
          console.log(list);
        }
      }
    })
    // console.log(result);
  })
  // var msg="数据"
  //
  // ejs.renderFile('views/index.ejs',{msg:msg},function(err,data){
  //   res.send(data)
  // })
})
app.get('/add',function(req,res){
  MongoClient.connect(DBurl,function(err,db){
    if(err){
      console.log('连接数据库失败');
      return;
    }
    db.collection('user').insertOne({"name":"lisi","age":40},function(error,data){
      if(error){
        "增加失败"
        return;
      }
      res.send("增加成功")
      db.close(); /*关闭*/
    })
  })
})