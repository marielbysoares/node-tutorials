/*
 * Promise It Won't Hurt - Exercise #11 (do_some_work)
 * By: Marielby Soares
 */
var qiohttp = require('q-io/http');

qiohttp.read("http://localhost:7000/")
.then(function (id) {
  var url = "http://localhost:7001/" + id;
  return qiohttp.read(url);
})
.then(function (user) {
  console.log(JSON.parse(user));
})
.then(null, console.error)
.done()