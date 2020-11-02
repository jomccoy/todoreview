

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://jomccoymongo:awvd6R0HnD2P4lpYXbG2e4t8A3zEQ741y20YmThvjeYhEZneM0bTk3Xs2wLbcLiJZL3oaYvPO9nqseBRr4YTGg%3D%3D@jomccoymongo.mongo.cosmos.azure.com:10255/?ssl=true&appName=@jomccoymongo@";

var express = require('express');
var app = express();

var str = "";

app.route('/name').get(function(req, res) {
  var dbo = db.db("Restaurants");
   MongoClient.connect(url, function(err, db) {
       var collection = db.collection('docs');
       var cursor = collection.find({});
       str = "";
       cursor.forEach(function(item) {
           if (item != null) {
                   str = str + "    Employee id  " + item.Employeeid + "</br>";
           }
       }, function(err) {
           res.send(err);
           db.close();
          }
       );
   });
});
var server = app.listen(8080, function() {});