/* 
*@user: suxin
*@DATE: 2018/7/16
*@TIME: 17:30
*/

/**
 *
 * @param fs
 * @param extname
 * @param callback
 */
exports.getMime = function(fs, Emitter, extname) {
  fs.readFile('./mime.json', function(err, data) {
    if (err) {
      console.log('该文件不存在');
      return false;
    }
    var Mimes = JSON.parse(data.toString())
    var result = Mimes[extname] || 'text/html';
    Emitter.emit('to_mime',result)
  })

}