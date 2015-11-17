/*
 * Promise It Won't Hurt - Exercise #3 (to_reject_or_not_to_reject)
 * By: Marielby Soares
 */
var q = require('q');

//Create a promise
var defer = q.defer();
defer.promise.then(console.log, console.log);

// Resolve the promise
defer.resolve("I FIRED");
// Reject the promise
defer.reject("I DID NOT FIRE");