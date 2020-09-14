const express = require("express");
const router = express.Router();
const passport = require("passport");
const validateBurpInput = require("../../validation/burps");
const Burp = require("../../models/Burp");


router.get('/', (req, res) => { 
    Burp.find()
      .populate('user')
      .sort({ date: -1 })
      .then(burps => res.json(burps))
      .catch(err => res.status(404).json({ noburpsfound: "No burps found" }));
});

router.get('/user/:user_id', (req, res) => { 
    Burp.find({ user: req.params.user_id })
        .then(burps => res.json(burps))
        .catch(err =>
            res.status(404).json({ noburpsfound: 'No burps found from that user' }
            )
        );
});

router.delete('/:id', (req, res) => {
    Burp.findByIdAndRemove(req.params.id)
        .then(() => res.json('Burp Deleted'))
        .catch(err =>
            res.status(404).json({ noburpfound: 'No burp found with that ID' })
        );
});

router.post("/", 
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        const { isValid, errors} = validateBurpInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newBurp = new Burp({
            user: req.user.id,
            text: req.body.text
        });

        newBurp
            .save()
            .then(burp => res.json(burp))
    }
)

module.exports = router; 