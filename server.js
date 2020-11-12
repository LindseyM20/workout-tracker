const express = require("express");
const logger = require("morgan");
// bodyParser?
const db = require("./models");
const mongoose = require("mongoose");
// var path = require("path");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
// app.use(express.static(path.join(__dirname, 'public')));
app.use(require("./routes/api-routes"));
app.use(require("./routes/html-routes"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });


// app.get("/api/workouts", (req, res) => {
//   db.Workout.find({})
//     .then(dbWorkout => {
//       res.json(dbWorkout);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// app.put("/api/workouts/:id", ({body, params}, res) => {
//   db.Workout.findByIdAndUpdate(params.id,
//     {$push: {exercises: body}},
//     {new: true, runValidators: true})
//     .then(dbWorkout => {
//       res.json(dbWorkout);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// app.post("/api/workouts", ({ body }, res) => {
//   db.Workout.create(body)
//     .then(dbWorkout => {
//       console.log("dbWorkout", dbWorkout);
//       res.json(dbWorkout);
//     })
//     .catch(err => {
//       console.log("error", err);
//       res.json(err);
//     });
// });

// app.get("/api/workouts/range", (req, res) => {
//   db.Workout.find({})
//     .then(dbWorkout => {
//       res.json(dbWorkout);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
