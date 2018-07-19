var http = require("http"); // http 模块  
     
http.createServer(function(req, res) {  
  res.writeHead( 200 , {"Content-Type":"text/html"});  
  res.write("<h1>Hello World</h1>");
  res.write("<p>Hello World</p>");  
  res.end("<a href='http://beyondweb.cn'>beyondweb.cn</a>");
}).listen(3000); // 监听端口3000  
  
console.log("HTTP server is list-ening at port 3000."); //在CMD中打印日志