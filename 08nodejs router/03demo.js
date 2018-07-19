//index.js
var route = require('./mldel/http-route.js')
var app = route();
var http = reqiure('http');
var server = http.creatServer(app);

app.get('/', function (req, res) {
  res.send('index')
})
app.get('/login', function (req, res) {
  res.send('login')
})
app.get('/register', function (req, res) {
  res.send('register')
})
app.post('/test', function (req, res) {
  console.log('POST', req.query);
  res.send(req.query)
})
server.listen(8080, function (req, res) {
  console.log('listen' + server.address().port);
})
