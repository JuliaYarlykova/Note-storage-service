const express = require("express");

const router = express.Router();

const { getFolder, postFolder, deleteFolder, patchFolder } = require('../controllers/folder-controller')

router.get("/api/folder/:id/", getFolder)
router.post('/api/folder', postFolder)
router.delete('/api/deletefolder', deleteFolder)
router.patch('/api/updatefolder', patchFolder)

module.exports = router;
