/*
 * Learnyounode - Exercise #6 (MAKE IT MODULAR)
 * By: Marielby Soares
 */
var mymodule = require('./6-module.js');

var callback = function(err, data) {
	if (err) {
		console.log("Error filtering directory by the extension of the files", err);
		return;
	}
	for (var i = 0; i < data.length; i++) 
		console.log(data[i]);
};

mymodule(process.argv[2], process.argv[3], callback);