
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const opts = { toJSON: { virtuals: true } }; // virtuals 4 mongoose


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
        duration: { type: Number, required: "Time, Minutes" },
        weight: Number,
        sets: Number,
        reps: Number
    }],
},opts);

// TO GET TOTAL DURATION TO WORK: THIS CODE ✨
// In Mongoose, a virtual is a property that is not stored in MongoDB.
// https://mongoosejs.com/docs/tutorials/virtuals.html
WorkoutSchema.virtual("totalDuration").get(function() {
    const totalDuration = this.excercises.reduce((partialSum, exercise) => {
        return partialSum + exercise.duration;
    },0)
    return totalDuration
})

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;