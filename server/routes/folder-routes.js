const express = require("express");

const router = express.Router();

const { getFolder, postFolder } = require('../controllers/folder-controller')

router.get("/api/folder/:id/", getFolder)
router.post('/api/folder', postFolder)

module.exports = router;
