const router = require('express').Router();
const { Song } = require('../models');
const userAuth = require('../utils/auth');

// get songRoutes route
router.get('/songRoutes', async (req, res) => {

    res.render('song', {
        cssFile: "/css/songSelect.css"
    });
});

// get songRoutes route
router.get('/songRoutes/song', async (req, res) => {



    const songPicker = async () => {

        let songs = await Song.findAll();


        let song = songs[Math.floor(Math.random() * songs.length)];
        return (song);

    }

    let song = (await songPicker()).get({ plain: true });

    res.render('youtube', { song, cssFile: "/css/songSelect.css" });
});



module.exports = router;

