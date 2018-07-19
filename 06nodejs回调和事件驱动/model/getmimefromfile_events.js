exports.getMime = function (fs,EventEmitter, extname) {
  fs.readFile('./mime.json', function (err, data) {
    if (err) {
      console.log('json 不存在')
      return false
    }
    //console.log(data.toString())
    var Mimes =JSON.parse(data.toString())
    console.log(Mimes[extname])
    var result = Mimes[extname] || 'text/html';
    EventEmitter.emit('to_mime',result)
  })
}