const router = require('express').Router();
const songRoutes = require('./songRoutes');
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const userRoutes = require('./userRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/auth', userRoutes);

router.use('/', songRoutes);

module.exports = router;