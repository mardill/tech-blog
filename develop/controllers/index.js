const router = require('express').Router();

const contents = require('./home-routes.js');

router.use('/', homeRoutes);

module.exports = router;