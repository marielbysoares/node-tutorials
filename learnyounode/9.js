/*
 * Learnyounode - Exercise #9 (JUGGLING ASYNC)
 * By: Marielby Soares
 */
var http = require('http');
var bl   = require('bl');

var array = [];
var size = 0;

var print = function () {
	for (var i = 0; i < array.length; i++) 
		console.log(array[i]);
}

var getResponse = function (i) {
	http.get(process.argv[2 + i], function (response) {
		response.pipe(bl(function (err, data) { 
			if (err) return console.log(err);
			array[i] = data.toString();
			size++;
			if (size ==3) print();
		}));
	});
}

for (var i = 0; i < 3; i++) 
	getResponse(i);
