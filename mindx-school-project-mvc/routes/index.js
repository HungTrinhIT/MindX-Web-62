const express = require('express');

const studentRouter = require('./students');

const router = express.Router();

router.use('/students', studentRouter);

module.exports = router;
