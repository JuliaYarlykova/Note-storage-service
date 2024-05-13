const express = require("express");

const { postFile } = require('../controllers/file-controller')
const router = express.Router();
// const uploadFile= require("../middleware/upload");
const multer = require("multer");
const upload = multer({ dest: 'uploads/' })

router.post("/api/file",upload.array('file',10), postFile)

module.exports = router;