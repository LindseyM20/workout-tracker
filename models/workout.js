//schema

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  // CODE HERE
  day: {
    type: Date,
  },
  exercises: [
    {
      type: String,
      name: String, 
      duration: Number,
      weight: Number,
      reps: Number,
      sets: Number,
      distance: Number
    }
  ],
});

// WorkoutSchema.methods.combineWeight = function() {
//   this.totalWeight = `${this.exercises.weight}`
// }

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
