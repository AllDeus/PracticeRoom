const router = require('express').Router();
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');
const seatGeekRoutes = require('./seatGeekRoutes');

router.use('/posts', postRoutes);
router.use('/commentRoutes', commentRoutes)
router.use('/seatGeekRoutes', seatGeekRoutes);



module.exports = router;

