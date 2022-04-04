const router = require('express').Router();
const { Song } = require('../models');
const userAuth = require('../utils/auth');

// get songRoutes route
router.get('/songRoutes', async (req, res) => {

    res.render('song');
});

// get songRoutes route
router.get('/songRoutes/song', async (req, res) => {



    const songPicker = async () => {

        let songs = await Song.findAll();


        let song = songs[Math.floor(Math.random() * songs.length)];
        return (song);

    }

    let song = (await songPicker()).get({ plain: true });

    res.render('youtube', { song });
});



module.exports = router;

