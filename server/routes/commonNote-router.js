const express = require("express");

const { getCommonNote, postCommonNote } = require("../controllers/commonNote-controller");

const router = express.Router();

router.get("/api/commonnote", getCommonNote);
router.post('/api/postcommonnote', postCommonNote)

module.exports = router;
