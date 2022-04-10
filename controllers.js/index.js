const router = require('express').Router();
const songRoutes = require('./songRoutes');
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const userRoutes = require('./userRoutes');
const tunerRoutes = require('./tunerRoutes');
const commentRoutes = require('./commentRoutes');


router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/auth', userRoutes);
router.use('/comments', commentRoutes);
router.use('/', songRoutes);
router.use('/', tunerRoutes);

module.exports = router;