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
var http= require('http')

var ejs = require('ejs')

var MongoClient = require('mongodb').MongoClient;  /*引入数据库 MongoClient*/
var DBurl='mongodb://localhost:27017/itying'; //连接数据库的地址    数据库的名称
var url= require('url')
var app = require('./model/express_route.js')

http.createServer(app).listen(3000);

app.get('/',function(req,res){
  var msg='这是数据库的数据'
  ejs.renderFile('views/index.ejs',{msg:msg},function(err,data){
    res.send(data);
  })
})
app.get('/add',function(req,res){
  MongoClient.connect(DBurl,function(err,db){
    if(err){
      console.log(err);
      console.log('数据库连接失败');
      return;
    }
    //增加数据
    db.collection('user').insertOne({
      "name":"大地",
      "age":10
    },function(error,result){
      if(error){
        console.log('增加数据失败');
        return;
      }
      res.send('增加数据成功');
      db.close();/*关闭数据库*/
    })
  })
})

app.get('/edit',function(req,res){
  MongoClient.connect(DBurl,function(err,db){
    if(err){
      console.log(err);
      console.log('数据库连接失败');
      return;
    }
    //增加数据
    db.collection('user').updateOne({"name":"大地"},{$set:{
      "age":40
    }},function(error,data){
      if(error){
        console.log('修改数据失败');
        return;
      }
      console.log(data);
      res.send('修改数据成功');
      db.close();/*关闭数据库*/
    })
  })
})
app.get('/delete',function(req,res){
  var query= url.parse(req.url,true).query
  var name=query.name
  MongoClient.connect(DBurl,function(err,db){
    if(err){
      console.log(err);
      console.log('数据库连接失败');
      return;
    }
    //增加数据
    db.collection('user').deleteOne({
      "name":name
    },function(error,result){
      if(error){
        console.log('删除数据失败');
        return;
      }
      res.send('删除数据成功');
      db.close();/*关闭数据库*/
    })
  })
})