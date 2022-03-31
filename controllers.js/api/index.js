const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');

router.use('/auth', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;

