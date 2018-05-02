var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

var friends = require("../data/friends.js");

module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    //var friends = {name: name, photo: photo}
    res.json(friends);
  });

  app.post("/api/friends", function (req, res) {

    var newfriend = req.body;
    var userAnswers = newfriend.scores;

    var matchName;
    var matchImage;
    var totalDifference = 10000;

    for (var i = 0; i < friends.length; i++) {
      var difference = 0;

      for (var j = 0; j < userAnswers.length; j++) {
        difference += Math.abs(friends[i].scores[j] - userAnswers[j]);
      }
    }

    if (difference < totalDifference) {

      totalDifference = difference;
      matchName = friends[i].name;
      matchImage = friends[i].photo;



      friends.push(newfriend);

     
      }

    }

  );

}