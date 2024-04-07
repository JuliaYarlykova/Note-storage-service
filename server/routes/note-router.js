const express = require("express");

const router = express.Router();

const { getNote, postNote, getOneNote } = require("../controllers/note-controller");

router.get("/api/note/:id/", getNote);
router.get("/api/onenote/:title/", getOneNote)
router.post('/api/note', postNote)

module.exports = router;
