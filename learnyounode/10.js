/*
 * Learnyounode - Exercise #10 (TIME SERVER)
 * By: Marielby Soares
 */
var net = require('net');
var strftime = require('strftime');

net.createServer(function (socket) {
	socket.end(strftime('%F %H:%M', new Date()) + "\n");
}).listen(process.argv[2]);