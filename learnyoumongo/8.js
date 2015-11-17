/*
 * Learnyoumongo - Exercise #8 (COUNT)
 * By: Marielby Soares
 */
var mongo = require('mongodb').MongoClient;

mongo.connect("mongodb://localhost:27017/learnyoumongo", function(err, db) {
  if (err) throw err;

  // Get age from the first argument passed to your script
  var ageArg = parseInt(process.argv[2]);
  if (!isNaN(ageArg)) {
    // Count documents where age is greater than argArg
    db.collection('parrots').count({
      age: {
        $gt: ageArg
      }
    }, function(err, count) {
      if (err) throw err;
      console.log(count);
      db.close();
    })
  }
});