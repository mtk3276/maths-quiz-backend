const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const questionRoutes = require("./routes/questionRoutes");

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.use("/api", questionRoutes);

mongoose.connect("mongodb://localhost:27017/mathsquiz")
    .then (() => {
        app.listen(PORT, () => {
            console.log(`Server running on https://localhost:${PORT}`);
        });        
    })
    .catch(error => {
        console.error(error);
    })
