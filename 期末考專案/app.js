const serve = require('koa-static');
const Koa = require('koa');
const app = new Koa();

app.use(serve(__dirname + '/public'));

app.listen(3000);

console.log('listening on port 3000');

/*var Koa = require('Koa')
var app = new Koa()
var fs = require('fs')
const server = require('http').createServer(app.callback())
var io = require('socket.io')(server)
var port = process.env.PORT || 3000

app.use(async function(ctx, next){
  ctx.type = 'html'
  ctx.body = fs.createReadStream(__dirname + '/index.html')
})

io.on('connection', function(socket){
  socket.on('leave message', function(name){//事件導向，leave message的事件
    io.emit('leave message', name)//在發送一個訊息給所有其他人
  })
})

module.exports = server.listen(port, function(){
  console.log('listening on *:' + port)
})*/