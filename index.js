'use strict';

const http = require('http');

const port = process.env.PORT || 3030;

const server = http.createServer(function (req, res) {
  console.log('%s: %s', req.method, req.url);
  res.statusCode = 204;
  res.end();
});

server.listen(port, function (err) {
  if (err) throw err;

  console.log('Pixel logger listening on port %s', port);
})
