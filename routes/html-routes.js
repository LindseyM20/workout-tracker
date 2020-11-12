// Dependencies
var path = require("path");
const router = require("express").Router();

// route to /stats
router.get("/stats", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

// route to /exercise
router.get("/exercise", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

module.exports = router;
