const router = require('express').Router();
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');
const seatGeekRoutes = require('./seatGeekRoutes');

router.use('/posts', postRoutes);
router.use('/comments', commentRoutes)
router.use('/seatGeekRoutes', seatGeekRoutes);

module.exports = router;

