/*
 * ExpressWorks - Exercise #2 (STATIC)
 * By: Marielby Soares
 */
var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));
app.listen(process.argv[2]);

