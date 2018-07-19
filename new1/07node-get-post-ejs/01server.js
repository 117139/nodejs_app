/* 
*@user: suxin
*@DATE: 2018/7/16
*@TIME: 17:44
*/

/**
 * 引入http模块
 * @type {module:http}
 */
var http = require('http')

var router = require('./model/router.js')
http.createServer(function(req, res) {
  router.statics(req,res,'static')

}).listen(8002)
