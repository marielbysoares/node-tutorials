/*
 * Learnyoumongo - Exercise #3 (FIND)
 * By: Marielby Soares
 */
var mongo = require('mongodb').MongoClient;

mongo.connect("mongodb://localhost:27017/learnyoumongo", function(err, db) {
  if (err) throw err;

  // Get age from the first argument passed to your script
  var ageArg = parseInt(process.argv[2]);
  if (!isNaN(ageArg)) {
    // Find all documents where age is greater than argArg
    db.collection('parrots').find({
      age: {
        $gt: ageArg
      }
    }).toArray(function(err, docs) {
      if (err) throw err;
      // Print the documents
      console.log(docs);
      // Close database connection
      db.close();
    })
  }
});