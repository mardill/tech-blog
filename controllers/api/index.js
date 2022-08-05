const router = require('express').Router();
const userRoutes = require('./user-routes');
const contentRoutes = require('./content-routes');
const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);

module.exports = router;