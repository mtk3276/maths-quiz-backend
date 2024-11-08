const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
    questionNumber: {type: Number, required: true},
    questionText: {type: String, required: true},
    correctAnswer: {type: Number, required: true},
})

module.exports = mongoose.model('Question', questionSchema);
