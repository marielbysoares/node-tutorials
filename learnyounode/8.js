/*
 * Learnyounode - Exercise #8 (HTTP COLLECT)
 * By: Marielby Soares
 */
var http = require('http');
var bl   = require('bl');

http.get(process.argv[2], function (response) {
  response.pipe(bl(function (err, data) { 
    if (err) return console.log(err);
    console.log(data.length);
    console.log(data.toString()); 
  }));
});