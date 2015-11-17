/*
 * Promise It Won't Hurt - Exercise #1 (fulfill_a_promise)
 * By: Marielby Soares
 */
var q = require('q');

//Create a promise
var defer = q.defer();
defer.promise.then(console.log);

// Manually resolve the promise
setTimeout(defer.resolve, 300, "RESOLVED!");