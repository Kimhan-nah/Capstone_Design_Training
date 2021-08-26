var http = require('http');

var handleRequest = function(request, response) {
  console.log('Received request for URL: ' + request.url);
  response.writeHead(200);
  response.end('Chan and Ju, Go to School! v1.0');
};
var www = http.createServer(handleRequest);
www.listen(8082);
