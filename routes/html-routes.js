// html-routes.js - this file offers a set of routes for sending users to the various html pages

// Dependencies
var path = require("path");

// Routes
module.exports = function(app) {

  // route to /index
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

 // route to /stats
  app.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });

  // route to /exercise
  app.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

};
