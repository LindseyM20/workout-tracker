const router = require("express").Router();
const db = require("../models");

// const express = require("express");
// const app = express();

// CRUD: post, get, put, delete

router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.put("/api/workouts/:id", ({body, params}, res) => {
  db.Workout.findByIdAndUpdate(params.id,
    {$push: {exercises: body}},
    {new: true, runValidators: true})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.post("/api/workouts", ({ body }, res) => {
  db.Workout.create(body)
    .then(dbWorkout => {
      console.log("dbWorkout", dbWorkout);
      res.json(dbWorkout);
    })
    .catch(err => {
      console.log("error", err);
      res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
