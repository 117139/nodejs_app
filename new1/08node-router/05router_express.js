var G={}
/**
 *
 * @param req
 * @param res
 */
var app = function (req, res) {
  console.log('app'+req);
  if(G['login']){
    G['login'](req,res)/*执行注册方法*/
  }
}
/**
 *注册方法
 * @param string 注册的方法名
 * @param callback 注册的方法
 */
app.get = function (string,callback) {
  G[string]=callback;
  //注册方法
  //G['login']=function(req,res){}
}

//执行get方法
app.get('login',function(req,res){
  console.log('login');
})
setTimeout(function(){
  app('req','res')
},1000)