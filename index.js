var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var currentDate = new Date();
  var formattedDate = currentDate.toDateString();
  res.end('Guilherme Santiago de Brito Data atual: ' + formattedDate);
}).listen(8017);