/*
 * Promise It Won't Hurt - Exercise #6 (throw_an_error)
 * By: Marielby Soares
 */
var q = require('q');

function parsePromised (json) {
  //Create a promise
  var defer = q.defer();
  var response; 

  try {
    response = JSON.parse(json);
  } catch (e) {
    // Reject the promise
    defer.reject(e);
  }

  // Resolve the promise
  defer.resolve(response);
  return defer.promise;
};

parsePromised(process.argv[2])
.then(null, console.log);

