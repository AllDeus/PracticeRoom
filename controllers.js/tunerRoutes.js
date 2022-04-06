
const router = require('express').Router();
const { ensureAuth } = require('../utils/auth');

// get page
router.get('/tunerRoutes', ensureAuth, async (req, res) => {

    res.render('tuner')
});

module.exports = router;