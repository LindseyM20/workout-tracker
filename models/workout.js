const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
  },
  exercises: [
    {
      type: String,
      trim: true,
      required: [true, 'Please provide an exercise type'],
      name: String,
      trim: true,
      required: [true, 'Please provide a name for your activity'],
      duration: Number,
      required: [true, 'Please provide duration of exercise'],
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
