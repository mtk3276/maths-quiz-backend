const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const questionRoutes = require("./routes/questionRoutes");
const scoreRoutes = require("./routes/scoreRoutes");

require("dotenv").config({
    path: process.env.NODE_ENV === "production" ? ".env.production" : ".env.development"
});

const app = express();
const PORT = process.env.PORT;
const dbUrl = process.env.DB_URI;

app.use(cors());
app.use(express.json());

app.use("/api/questions", questionRoutes);
app.use("/api/score", scoreRoutes);

mongoose.connect(dbUrl)
    .then (() => {
        app.listen(PORT, () => {
            console.log(`Server running on https://localhost:${PORT}`);
            console.log(`Database running on ${dbUrl}`)
        });        
    })
    .catch(error => {
        console.error(error);
    })
