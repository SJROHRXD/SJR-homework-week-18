const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const opts = { toJSON: { virtuals: true } }; // virtuals 4 mongoose


const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,
    },
    exercises: [{
        type: {
            type: String,
        },
        name: {
            type: String,
        },
        distance: Number,
        duration: Number,
        weight: Number,
        sets: Number,
        reps: Number,
    }],
},opts);

// TO GET TOTAL DURATION TO WORK: THIS CODE ✨
// In Mongoose, a virtual is a property that is not stored in MongoDB.
// https://mongoosejs.com/docs/tutorials/virtuals.html
WorkoutSchema.virtual('totalDuration').get(function() {
    const totalDuration = this.exercises.reduce((partial_sum, exercise) => {
        return partial_sum + exercise.duration;
    }, 0)

    return totalDuration;
})

module.exports = Workout = mongoose.model("workout", WorkoutSchema)

// module.exports = Workout;