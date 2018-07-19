/*
1.安装ejs
2.配置express的模板引擎
app.set("view engine","ejs")
express 里面使用 ejs 安装以后就可以使用，不需要引入
3.在express中 ejs
1，渲染的模板引擎
2，数据




  res.render("new",{
    "news":["我是小新闻","我也是","哈哈哈哈"]
  })
*/
var express = require('express')

var app=express();
/*配置ejs模板引擎*/
app.set('view engine','ejs')
// views默认会在这个文件里面找模板
/*设置模板的位置*/
app.set('views',__dirname+'/views')
//中间件app.use
//express.static('public')给public目录下的文件提供静态服务
// app.use('/a',express.static('public')) //配置虚拟目录的静态目录
app.use(express.static('public'))
app.get('/',function (req,res) {
  // res.send('ejs的演示')
  res.render('index',{
    name:'张三'
  })
})

app.get('/news',function (req,res) {
  // res.send('ejs的演示')
  var arr=['111','222','333']
  res.render('news',{
    list:arr
  })
})
/*端口大于3000*/

app.listen('3001','127.0.0.1')
