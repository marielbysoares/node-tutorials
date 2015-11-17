/*
 * Learnyounode - Exercise #12 (HTTP UPPERCASERER)
 * By: Marielby Soares
 */
var fs   = require('fs');
var map  = require('through2-map');
var http = require('http');

http.createServer(function (request, response) {
	if (request.method != 'POST') return response.end('It has to be POST request');

    request.pipe(map(function (chunk) {
      return chunk.toString().toUpperCase();
    })).pipe(response);
}).listen(process.argv[2])