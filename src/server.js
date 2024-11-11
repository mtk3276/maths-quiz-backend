require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const questionRoutes = require("./routes/questionRoutes");
const scoreRoutes = require("./routes/scoreRoutes");

const app = express();
const PORT = process.env.PORT || 5001;
const dbUrl = process.env.NODE_ENV === "production" ? process.env.MONGO_URI_PROD : process.env.MONGO_URI_DEV;

app.use(cors());
app.use(express.json());

app.use("/api/questions", questionRoutes);
app.use("/api/score", scoreRoutes);

mongoose.connect(dbUrl)
    .then (() => {
        app.listen(PORT, () => {
            console.log(`Server running on port: ${PORT}`);
            console.log(`Database running on ${dbUrl}`)
        });        
    })
    .catch(error => {
        console.error(error);
    })
