
const router = require('express').Router();

// get page
router.get('/tunerRoutes', async (req, res) => {

    res.render('tuner', {
        cssFile: '/css/posts.css'
      })
});

module.exports = router;