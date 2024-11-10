const mongoose = require("mongoose");

const scoreSchema = mongoose.Schema({
    username: {type: String, required: true},
    score: {type: Number, required: true},
});

module.exports = mongoose.model("Score", scoreSchema);