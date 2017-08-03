var http = require('http');

http.createServer(function (request, response) {

	// ?? HTTP ?? 
	// HTTP ???: 200 : OK
	// ????: text/plain
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.write("<h style='color: red;'>Hello World\n</h>"); 
	// ?????? "Hello World"
	response.end();

		
}).listen(8888);

// ????????
console.log('Server running at http://127.0.0.1:8888/');