// Dependencies
var path = require("path");
const router = require("express").Router();

// Routes
// module.exports = function(app) {

  // route to /index
  router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

 // route to /stats
  router.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });

  // route to /exercise
  router.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

// };

module.exports = router;
