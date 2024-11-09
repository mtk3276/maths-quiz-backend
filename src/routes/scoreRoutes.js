const express = require("express");
const scoreController = require("../controllers/scoreController");
const router = express.Router();

router.post("/", scoreController.postScore);

module.exports = router;
