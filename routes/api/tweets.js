const express = require("express");
const router = express.Router();
const passport = require("passport");
const validateTweetInput = require("../../validation/tweets");
const Tweet = require("../../models/Tweet");


// router.get("/alltweets", (req, res) => res.json({ msg: "This is the tweets test route" })); // The callback for every Express route requires a request and response as arguments

router.get('/', (req, res) => { //get all tweets
    // console.log("get me all tweets")
    // debugger
    Tweet.find()
      .populate('user')
      .sort({ date: -1 })
      .then(tweets => res.json(tweets))
      .catch(err => res.status(404).json({ notweetsfound: "No tweets found" }));
});

router.get('/user/:user_id', (req, res) => { //get all tweets for the user
    // debugger
    Tweet.find({ user: req.params.user_id })
        .then(tweets => res.json(tweets))
        .catch(err =>
            res.status(404).json({ notweetsfound: 'No tweets found from that user' }
            )
        );
});

router.delete('/:id', (req, res) => {
    Tweet.findByIdAndRemove(req.params.id)
        .then(() => res.json('Tweet Deleted'))
        .catch(err =>
            res.status(404).json({ notweetfound: 'No tweet found with that ID' })
        );
});

router.post("/", 
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        const { isValid, errors} = validateTweetInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newTweet = new Tweet({
            user: req.user.id,
            text: req.body.text
        });

        newTweet
            .save()
            .then(tweet => res.json(tweet))
    }
)

module.exports = router; 