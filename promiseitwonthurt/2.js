/*
 * Promise It Won't Hurt - Exercise #2 (reject_a_promise)
 * By: Marielby Soares
 */
var q = require('q');

//Create a promise
var defer = q.defer();
defer.promise.then(null, function (error) {
  console.log(error.message)
});

// Manually reject the promise
setTimeout(defer.reject, 300, new Error("REJECTED!"));