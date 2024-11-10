const express = require("express");
const scoreController = require("../controllers/scoreController");
const router = express.Router();

router.post("/", scoreController.postScore);
router.get("/leaderboard", scoreController.getLeaderboard);

module.exports = router;
