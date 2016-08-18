var express = require('express');
var router = express.Router();
var socket_io = require('socket.io');

router.get('/', function(req, res, next) {
  res.send('response');
});

router.prepareSocketIO = function (server) {
  var io = socket_io.listen(server);
  io.sockets.on('connection',function (socket) {
    socket.on('join',function (user) {
      socket.user = user;
      socket.emit('state','server',true);
      socket.broadcast.emit('state','server',user+"online");
    });

    socket.on('sendMsg',function (msg) {
      socket.emit('chat',socket.user,msg);
      socket.broadcast.emit('chat',socket.user,msg);
    });
  });
}

module.exports = router;
