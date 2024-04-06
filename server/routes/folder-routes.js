const express = require("express");

const router = express.Router();

const { getFolder } = require('../controllers/folder-controller')

router.get("/api/folder/:id/", getFolder)


module.exports = router;
