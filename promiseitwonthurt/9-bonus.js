/*
 * Promise It Won't Hurt - Exercise #9-bonus (multiple_promises)
 * By: Marielby Soares
 */
var q = require('q');

var firstDefer = q.defer();
var secondDefer = q.defer();

q.all([firstDefer.promise, secondDefer.promise])
.then(console.log)
.done();

setTimeout(function () {
  firstDefer.resolve("PROMISES");
  secondDefer.resolve("FTW");
}, 200);