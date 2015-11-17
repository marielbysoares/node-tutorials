/*
 * Promise It Won't Hurt - Exercise #12(more_functional)
 * By: Marielby Soares
 */
var qiohttp = require('q-io/http');
var _ = require('lodash');

qiohttp.read("http://localhost:7000/")
.then(function (id) {
  var bound = _.bind(String.prototype.concat, "http://localhost:7001/");
  return qiohttp.read(bound(id));
})
.then(_.flowRight(console.log, JSON.parse))
.then(null, console.error)
.done();