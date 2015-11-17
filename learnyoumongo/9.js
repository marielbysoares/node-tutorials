/*
 * Learnyoumongo - Exercise #9 (AGGREGATE)
 * By: Marielby Soares
 */
var mongo = require('mongodb').MongoClient

var url = 'mongodb://localhost:27017/learnyoumongo'

mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
  if (err) throw err;

  var size = process.argv[2]
  db.collection('prices').aggregate([
    { 
      $match: {
        size: size
      }
    }, { 
      $group: {
        _id: 'total',
        total: {
          $avg: '$price'
        }
      }
    }
  ]).toArray(function(err, docs) {
    if (err) throw err;
    // Print the average price
    console.log(Number(docs[0].total).toFixed(2));
    // Close database connection
    db.close();
  })
})