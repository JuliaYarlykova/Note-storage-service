const express = require('express')

const router = express.Router()
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

const {
	getNote,
	postNote,
	getOneNote,
	deleteNote,
	patchNote,
} = require('../controllers/note-controller')

router.get('/api/note/:id/', getNote)
router.get('/api/onenote/:title/', getOneNote)
router.post('/api/note', upload.array('file', 10), postNote)
router.delete('/api/deletenote', deleteNote)
router.patch('/api/updatenote', patchNote)
module.exports = router
