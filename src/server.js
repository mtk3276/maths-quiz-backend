const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend running");
});

mongoose.connect("mongodb://localhost:27017/mathsquiz")
    .then (() => {
        app.listen(PORT, () => {
            console.log(`Server running on https://localhost:${PORT}`);
        });        
    })
    .catch(error => {
        console.error(error);
    })
