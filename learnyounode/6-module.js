/*
 * Learnyounode - Exercise #6 - Module (MAKE IT MODULAR)
 * By: Marielby Soares
 */
var fs 	 = require('fs');
var path = require('path');

module.exports = function (directory, extension, callback) {
	fs.readdir(directory, function read(err, data) {
		if (err) return callback(err);
    var list = [];
    for (var i = 0; i < data.length; i++) 
			if (path.extname(data[i]).substring(1) == extension) 
				list.push(data[i]);
		callback(null, list);
	});
}