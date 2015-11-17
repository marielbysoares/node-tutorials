/*
 * Promise It Won't Hurt - Exercise #5 (values_and_promises)
 * By: Marielby Soares
 */
var q = require('q');

//Create a promise
var defer = q.defer();

function attachTitle(name) {
  return "DR. " + name;
}

// Build a promise chain
defer.promise
.then(attachTitle)
.then(console.log);

// Resolve the promise
defer.resolve("MANHATTAN");