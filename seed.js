require("dotenv").config();
const mongoose = require("mongoose");
const Question = require("./src/models/Question");
const Score = require("./src/models/Score");

const dbUrl = process.env.NODE_ENV === "production" ? process.env.MONGO_URI_PROD : process.env.MONGO_URI_DEV;

mongoose.connect(dbUrl);

const seedQuestions = async () => {
    const questions = [
        { questionNumber: 1, questionText: "15 + 31", correctAnswer: "46" },
        { questionNumber: 2, questionText: "22 - 14", correctAnswer: "8" },
        { questionNumber: 3, questionText: "92 - 6", correctAnswer: "86" },
        { questionNumber: 4, questionText: "24 + 27", correctAnswer: "51" },
        { questionNumber: 5, questionText: "17 - 5", correctAnswer: "12" },
    ];

    try {
        await Question.deleteMany();
        await Question.insertMany(questions);
        console.log(`Database seeded with ${questions.length} questions.`);
    } catch (error) {
        console.error("Error seeding database:", error);
    } finally {
        mongoose.connection.close();
    }
};

const seedScores = async () => {
    const scores = [
        { username: "Muhsina", score: 1 },
        { username: "Aamilah", score: 2 },
        { username: "Tom", score: 4 },
        { username: "Will", score: 2 },
        { username: "Naimah", score: 5 },
        { username: "Mo", score: 5 },
        { username: "Jane", score: 2 },
        { username: "Naim", score: 1 },
        { username: "Harry", score: 3 },
        { username: "Bob", score: 1 },
        { username: "Dick", score: 1 },
        { username: "John", score: 3 },
        { username: "Jack", score: 0 },
        { username: "Zahra", score: 3 },
        { username: "Is\'haaq", score: 5 },
        { username: "Betty", score: 4 },
        { username: "James", score: 3 },
        { username: "Tamjid", score: 4 },
    ];

    try {
        await Score.deleteMany();
        await Score.insertMany(scores);
        console.log(`Database seeded with ${scores.length} scores.`);
    } catch (error) {
        console.error("Error seeding database:", error);
    } finally {
        mongoose.connection.close();
    }
}

seedQuestions();
seedScores();
