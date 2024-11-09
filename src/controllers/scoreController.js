const Score = require("../models/Score");

exports.postScore = async (req, res) => {
    let score = new Score({
        username: req.body.username,
        score: req.body.score,
    });

    try {
        await score.save();
        res.status(201).send({ message: "Score added successfully" });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}