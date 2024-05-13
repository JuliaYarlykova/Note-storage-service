const express = require("express");

const { getCommonNote, postCommonNote, getOneNote } = require("../controllers/commonNote-controller");

const router = express.Router();

router.get("/api/commonnote", getCommonNote);
router.post('/api/postcommonnote', postCommonNote)
router.get('/api/commonnote/:title', getOneNote)

module.exports = router;
