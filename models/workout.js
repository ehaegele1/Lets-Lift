const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
    Arms: { type: String, required:true },
    Legs: { type: String, required:true },
    Chest: { type: String, required:true },
    Back: { type: String, required:true },
    Shoulders: { type: String, required:true },
  });

const Lift = mongoose.model('Lift', workoutSchema);

module.exports = Lift;
