/*
 * Learnyounode - Exercise #4 (MY FIRST ASYNC I/O!)
 * By: Marielby Soares
 */
var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function (err, data) {
  if (err) throw err;
  console.log(data.split("\n").length - 1);
});