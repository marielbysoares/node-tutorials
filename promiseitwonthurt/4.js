/*
 * Promise It Won't Hurt - Exercise #4 (always_async)
 * By: Marielby Soares
 */
var q = require('q');

//Create a promise
var defer = q.defer();
defer.promise.then(console.log);

// Resolve the promise
defer.resolve("SECOND");
// Print "FIRST" to the console
console.log("FIRST")