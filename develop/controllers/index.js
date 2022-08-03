const router = require('express').Router();
const books = require('./content-routes');

router.use('/contents', contents);

module.exports = router;