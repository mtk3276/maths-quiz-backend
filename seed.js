const mongoose = require("mongoose");
const Question = require("./src/models/Question");

mongoose.connect("mongodb://localhost:27017/mathsquiz");

const seedQuestions = async () => {
    const questions = [
        { questionText: "15 + 31", correctAnswer: "46" },
        { questionText: "22 - 14", correctAnswer: "8" },
        { questionText: "92 - 6", correctAnswer: "86" },
        { questionText: "24 + 27", correctAnswer: "51" },
        { questionText: "17 - 5", correctAnswer: "12" },
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

seedQuestions();
