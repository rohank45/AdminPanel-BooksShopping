var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;

var db;
var error;
var waiting = [];

MongoClient.connect(
  "mongodb+srv://rohan:540640740@cluster0.ci0dp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  function (err, database) {
    error = err;
    db = database;

    waiting.forEach(function (callback) {
      callback(err, database);
    });
  }
);

module.exports = function (callback) {
  if (db || error) {
    callback(error, db);
  } else {
    waiting.push(callback);
  }
};
