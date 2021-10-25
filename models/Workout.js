
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        type: {
            type: String,
            required: "Cardio, Resistance",
        },
        name: {
            type: String,
            required: "Exercise"
        },
        distance: Number,
        duration: { type: Number, required: "Time, Minutes." },
        weight: Number,
        sets: Number,
        reps: Number
    }]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;