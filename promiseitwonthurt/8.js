/*
 * Promise It Won't Hurt - Exercise #8 (an_important_rule)
 * By: Marielby Soares
 */
var q = require('q');

function throwMyGod () {
  throw new Error("OH NOES");
};

function iterate (num) {
  console.log(num);
  return num + 1;
};

q.fcall(iterate, 1)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(throwMyGod)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(null, console.log);