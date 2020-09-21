const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const keys = require('./keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');

//on initial express server app load, 
//create options hash and call extractjwt
    //which is our strategy configured to read the JWT from the Authorization http headers of each request.
//also add secret key from our keys file
    //which is the secret that our tokens will be signed with. 
const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = keys.secretOrKey;

module.exports = passport => {
    passport.use(new JwtStrategy(options, (jwt_payload, done) => {
        // debugger
        // console.log(jwt_payload)
        // console.log(jwt_payload.data._id)
        User.findById(jwt_payload.data._id)
        .then(user => {
            if (user) {
                console.log("I exist")
                return done(null, user) //express middleware has keyword next and done is passed as 2nd arg so passport doesn't hang
            } else {
                console.log("I don't exist")
                return done(null, false)
            }
        })
        .catch(err => console.log(err))
    }));
};
