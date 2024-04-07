const express = require("express");

const router = express.Router();

const { getNote, postNote } = require("../controllers/note-controller");

router.get("/api/note/:id/", getNote);
router.post('/api/note', postNote)

module.exports = router;
