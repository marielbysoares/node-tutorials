/*
 * Promise It Won't Hurt - Exercise #9-superbonus (multiple_promises)
 * By: Marielby Soares
 */
var q = require('q');

var firstDefer = q.defer();
var secondDefer = q.defer();

q.all([firstDefer.promise, secondDefer.promise])
.spread(function (firstRes, secondRes) {
  console.log([firstRes, secondRes]);
});

setTimeout(function () {
  firstDefer.resolve("PROMISES");
  secondDefer.resolve("FTW");
}, 200);