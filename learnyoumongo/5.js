/*
 * Learnyoumongo - Exercise #5 (INSERT)
 * By: Marielby Soares
 */
var mongo = require('mongodb').MongoClient;

mongo.connect("mongodb://localhost:27017/learnyoumongo", function(err, db) {
  if (err) throw err;

  var firstName = process.argv[2];
  var lastName = process.argv[3];
  var doc = {
    firstName: firstName,
    lastName: lastName
  }

  // Insert doc into docs collection
  db.collection('docs').insert(doc, function(err, data) {
    if (err) throw err;
    console.log(JSON.stringify(doc));
    db.close();
  });
});