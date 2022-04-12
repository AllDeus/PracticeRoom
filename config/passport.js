const GoogleStrategy = require('passport-google-oauth20').Strategy
const sequelize = require('sequelize');
const User = require('../models/User');
require('dotenv').config();
var LocalStrategy = require('passport-local');

// passport.js
// req.session.passport.user
// how to implement this into my passport.js

// req.session.save(() => {
//     req.session.passport.user_id = user.id;
//     req.session.logged_in = true;
    
//     res.json({ user: userData, message: 'You are now logged in!' });
//   });

// catch passport - passed in from server
module.exports = function(passport) {
    passport.use(new GoogleStrategy(
        {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/callback'
    },
    async (accessToken, refreshToken, profile, done) => {
        const newUser = {
            googleId: profile.id,
            displayName: profile.displayName,
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
            image: profile.photos[0].value,
            username: profile.emails[0].value
        }
        // findone based on email address instead of userid
        // https://www.googleapis.com/discovery/v1/apis/oauth2/v2/rest?fields=auth(oauth2(scopes))
        try{
            let user = await User.findOne({googleId: profile.id})
            if(user){
                done(null, user)
            } else {
                user = await User.create(newUser)
                done(null, user)
            }

                // req.session.passport.save(() => {
                // req.session.passport.user_id = user.id;
                // req.session.passport.logged_in = true;
        
                // res.json({ user: userData, message: 'You are now logged in!' });
    // });
        }catch(err){
            console.error(err);
        }
    }))
    // passport.use(local)
    passport.use(new LocalStrategy( async function verify(username, password, cb) {
        try{
            let user = await User.findOne({ where: { username: username } })
            if(user){
                if(!user.checkPassword(password)){
                    return cb(null, false, `Incorrect username or password`)
                }
                cb(null, user)
            } else {
                // user = await User.create(req.body)
                cb(null,false)
            }

    //         req.session.save(() => {
    //             req.session.passport.user_id = user.id;
    //             req.session.logged_in = true;
        
    //             res.json({ user: userData, message: 'You are now logged in!' });
    // });
        }catch(err){
            console.error(err);
        }
        }));


    passport.serializeUser((user, done) => {
        done(null, user.id)
    })
    
    passport.deserializeUser( async (id, done) => {
        console.log(id)
        try { 
            const userData = await User.findByPk(id) 
            if(!userData){
                return done(null, false);
            }
            const user = userData.get({ plain: true });
            done(null, user);
            
        }
        catch(err){
            console.error(err);
            done(null, false)
        }
    })
}