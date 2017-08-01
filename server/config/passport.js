/**
 * Created by Hassan on 4/22/2017.
 */
'use strict';
var passport = require('passport')
    , LocalStrategy = require('passport-local').Strategy
    , mongoose = require('mongoose')
    , User = mongoose.model('User');


passport.use(new LocalStrategy({

        usernameField: 'email',
        passwordField: 'password'

    },function(email, password, done) {

        User.findOne({ email: email }, function (err, user) {

            if (err) { return done(err); }
            if (!user) {
                return done(null, false, { message: 'User does not exist.' });
            }
            user.comparePassword(password, function(err, isMatch){
                if(err) { return done(err); }
                if (!isMatch) {
                    return done(null, false, { message: 'Incorrect password.' });
                }
                return done(null, user);
            });
        });
    }
));

passport.serializeUser(function(user, done) {
    done(null, user._id);
});

passport.deserializeUser(function(_id, done) {
    User.findById(_id, function(err, user) {
        done(err, user);
    });
});

module.exports = passport;
