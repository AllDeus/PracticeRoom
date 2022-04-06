
const router = require('express').Router();
require('dotenv').config();
const { ensureAuth } = require('../../utils/auth');
const axios = require('axios');


// get page
router.get('/', ensureAuth, async (req, res) => {

  res.render('seatGeek', {
    cssFile: "/css/songSelect.css"
  })
});

// performer by id 
router.get('/:performer', async (req, res) => {
  axios.get(`https://api.seatgeek.com/2/performers`, {
    params: {
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      q: req.params.performer.replace(' ', '+')
    }
  })
    .then(function (response) {

      res.render('seatGeek', { performers: response.data.performers });

    })
    .catch(function (err) {
      console.log(err);
      res.status(400).json(err);

    })

});

module.exports = router;