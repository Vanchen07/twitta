const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const keys = require('../../config/keys');
const jwt = require('jsonwebtoken');
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');


router.post("/register", (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);

    if(!isValid) {
        return res.status(400).json(errors);
    }
    
    User.findOne({email: req.body.email})
    .then(user => {
        if (user) {
            return res.status(400).json({email: "Email is already registered"})
        } else {
            const newUser = new User({
                handle: req.body.handle,
                email: req.body.email,
                password: req.body.password,
                avatar: req.body.avatar,
                blurb: '',
                location: '',
                favoriteFoods: ''
            })
            
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser.save()
                    .then(user => res.json(user))
                    .catch(err => console.log(err))
                })
            })

            const payload = {
              id: newUser._id,
              handle: newUser.handle,
              avatar: newUser.avatar,
              blurb: newUser.blurb,
              location: newUser.location,
              favoriteFoods: newUser.favoriteFoods
            };

            jwt.sign(
                payload,
                keys.secretOrKey,
                { expiresIn: 3600 },
                (err, token) => {
                    res.json({
                        success: true,
                        token: "Bearer " + token
                    });
                }
            );
        }
    })
});

router.post("/login", (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    User.findOne({email: email})
    .then(user => {
        if (!user) {
            return res.status(404).json({email: "This user does not exist"});
        }

        bcrypt.compare(password, user.password)
        .then(isMatch => {
            if(isMatch) {
                const payload = {
                    id: user._id,
                    handle: user.handle,
                    avatar: user.avatar,
                    blurb: user.blurb,
                    location: user.location,
                    favoriteFoods: user.favoriteFoods
                }

                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    { expiresIn: 3600 },
                    (err, token) => {
                        res.json({
                            success: true,
                            token: "Bearer " + token
                        });
                    }
                )
            } else {
                return res.status(400).json({password: "Incorrect password"});
            }
        })
    })
})

router.get('/', (req, res) => {
    User.find()
        .then( users => {
            let allUsers = {};
            
            users.forEach(user =>
                allUsers[user._doc._id] = user._doc
            )

            return res.json(allUsers)})
        .catch(err => res.status(404).json({nousersfound: 'No users found'}))
});

router.patch("/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    User.findByIdAndUpdate(req.params.id)
      .then(user => res.json(user))
      .catch(err =>
        res.status(404).json({ nouserfound: "No user found with that ID" })
      );
  }
);

module.exports = router; 