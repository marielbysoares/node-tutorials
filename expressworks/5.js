/*
 * ExpressWorks - Exercise #5 (STYLISH CSS)
 * By: Marielby Soares
 */
var express = require('express');
var app = express();
var stylus = require('stylus');

app.use(stylus.middleware(process.argv[3]));
app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));
app.listen(process.argv[2]);

