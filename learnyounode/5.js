/*
 * Learnyounode - Exercise #5 (FILTERED LS)
 * By: Marielby Soares
 */
var fs   = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function read(err, data) {
  if (err) throw err;
  for (var i = 0; i < data.length; i++) 
    if (path.extname(data[i]).substring(1) == process.argv[3]) 
      console.log(data[i]);
});
    