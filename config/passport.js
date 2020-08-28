const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const keys = require('./keys');

const User = mongoose.model('users');

//on initial express server app load, 
//create options hash and call extractjwt
//also add secret key from our keys file
const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = keys.secretOrKey;

module.exports = passport => {
    passport.use(new JwtStrategy(options, (jwt_payload, done) => {
        User.findById(jwt_payload.id)
        .then(user => {
            if (user) {
                console.log("I exist")
                return done(null, user) //express middleware has keyword next and done is passed as 2nd arg so passport doesn't hang
            } else {
                console.log("I exist")
                return done(null, false)
            }
        })
        .catch(err => console.log(err))
    }));
};
