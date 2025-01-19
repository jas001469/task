const express = require('express');
const { uploadUserData, getSubmissions } = require('../controller/submissionController');
const upload = require('../middleware/uploadMiddleware');
const router = express.Router();

router.post('/upload', upload.array('images', 10), uploadUserData);

router.get('/submissions', getSubmissions);

module.exports = router;