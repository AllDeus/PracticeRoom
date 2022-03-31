const router = require('express').Router();
const passport = require('passport')
// const { User } = require('../../models');

// authenticate with google - GET route =  auth/google
// scope - includes what we want to retrieve from user profile
router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

// get route - auth/google/callback
// ensure user is authenticated through google
router.get('/google/callback', passport.authenticate('google', {
    // if fails, redirect to login/homepage
    failureRedirect: '/'
}), (req, res) => {
    // pass auth and redirect to user dashboard/profile
    res.redirect('/profile');
});
// logout user route - /auth/logout
router.get('/logout', (req, res) => {
    req.logout()
    // redirect back to homepage
    res.redirect('/')
})


module.exports = router;
