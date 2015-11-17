/*
 * Promise It Won't Hurt - Exercise #9 (multiple_promises)
 * By: Marielby Soares
 */
var q = require('q');

var firstDefer = q.defer();
var secondDefer = q.defer();

function all(firstPromise, secondPromise) {
  //Create a promise
  var defer = q.defer();
  var counter = 0, firstRes, sencondRes; 

  firstPromise
  .then(function (res) {
    firstRes = res;
    counter++;
    if (counter == 2) defer.resolve([firstRes, sencondRes]);
  })
  .then(null, defer.reject)
  .done();

  secondPromise
  .then(function (res) {
    sencondRes = res;
    counter++;
    if (counter == 2) defer.resolve([firstRes, sencondRes]);
  })
  .then(null, defer.reject)
  .done();

  return defer.promise;
}

all(firstDefer.promise, secondDefer.promise)
.then(console.log)
.done();

setTimeout(function () {
  firstDefer.resolve("PROMISES");
  secondDefer.resolve("FTW");
}, 200);