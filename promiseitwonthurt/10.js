/*
 * Promise It Won't Hurt - Exercise #10 (fetch_json)
 * By: Marielby Soares
 */
var qiohttp = require('q-io/http');

qiohttp.read("http://localhost:1337")
.then(function (json) {
  console.log(JSON.parse(json));
})
.then(null, console.error)
.done()