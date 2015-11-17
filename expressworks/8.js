/*
 * ExpressWorks - Exercise #8 (JSON ME)
 * By: Marielby Soares
 */
var express = require('express');
var app = express();
var fs = require('fs');

app.get('/books', function(req, res) {
  fs.readFile(process.argv[3], function (err, result) {
    if (err) 
      res.status(500).send({ error: 'Error reading file' });
    try {
      res.send(JSON.parse(result));
    } catch (ex) {
      res.status(500).send({ error: 'Error parsing json' });
    }
  });
}); 
app.listen(process.argv[2]);