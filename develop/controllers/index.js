const router = require('express').Router();
const contents = require('./content-routes');

router.use('/contents', contents);

module.exports = router;