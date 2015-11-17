/*
 * Learnyounode - Exercise #13 (HTTP JSON API SERVER)
 * By: Marielby Soares
 */
var fs   = require('fs');
var url  = require('url');
var http = require('http');

http.createServer(function (request, response) {
	var parsedUrl = url.parse(request.url, true);
	var time = new Date(parsedUrl.query.iso);
	var result;

	if (parsedUrl.pathname == '/api/parsetime') {
		result = {
	    hour: time.getHours(),
	    minute: time.getMinutes(),
	    second: time.getSeconds()
	  }
	} else if (parsedUrl.pathname == '/api/unixtime') {
		result = { 
			unixtime : time.getTime() 
		}
	} else {
		// Invalid url
		response.writeHead(404);
		response.end();
	}
	
	response.writeHead(200, { 'Content-Type': 'application/json' });
	response.end(JSON.stringify(result));

}).listen(process.argv[2])