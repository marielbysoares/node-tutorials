/*
 * Learnyoumongo - Exercise #6 (UPDATE)
 * By: Marielby Soares
 */
var mongo = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/" + process.argv[2];
mongo.connect(url, function(err, db) {
  if (err) throw err;

  // Updating Tina's age from 30 to 40
  db.collection('users').update({
    username: "tinatime"
  }, {
    $set: {
      age: 40
    }
  },function(err, data) {
    if (err) throw err;
    db.close();
  });
});