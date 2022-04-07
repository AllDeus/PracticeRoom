
const router = require('express').Router();

// get page
router.get('/tunerRoutes', async (req, res) => {

    res.render('tuner')
});

module.exports = router;