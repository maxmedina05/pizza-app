var net = require('net');

var server = net.createServer(function(socket) {
  socket.on('data', function(data) {
    console.log(data.toString());
  });

  // socket.write('HTTP/1.1 200 OK\n\n');
  socket.write('HTTP/1.1 200 OK\n\nFUNCOOOOO!');
  // socket.pipe(socket);
  socket.end();
});

server.listen(8080, function() {
  console.log("listening port 8080!");
});
