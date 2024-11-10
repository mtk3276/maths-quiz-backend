const Score = require("../models/Score");

exports.postScore = async (req, res) => {
    const { username, score } = req.body;

    try {
        let existingScore = await Score.findOne({ username });

        if (existingScore) {
            existingScore.score = Math.max(existingScore.score, score);
            await existingScore.save();
            res.status(200).send({ message: "Score updated successfully" });
        } else { 
            const newScore = new Score ({ username, score });
            await newScore.save();
            res.status(201).send({ message: "Score added successfully" });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

exports.getLeaderboard = async (req, res) => {
    try { 
        const leaderboard = await Score.find().sort({ score: -1 });
        res.status(200).json(leaderboard);
    } catch (error) {
        res.status(500).json({ message: error.message });        
    }
};
