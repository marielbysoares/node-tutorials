/*
 * Learnyounode - Exercise #3 (MY FIRST I/O!)
 * By: Marielby Soares
 */
var fs = require('fs');

var buff = fs.readFileSync(process.argv[2]);
console.log(buff.toString().split("\n").length - 1);