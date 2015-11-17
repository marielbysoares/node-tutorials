/*
 * ExpressWorks - Exercise #1 (GOOD OLD FORM)
 * By: Marielby Soares
 */
var express = require('express');
var app = express();
var bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended: false}));

app.post('/form', function(req, res) {
  res.send(req.body.str.split('').reverse().join(''));
});
app.listen(process.argv[2]);