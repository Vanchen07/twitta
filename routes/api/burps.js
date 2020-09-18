const express = require("express");
const router = express.Router();
const passport = require("passport");
const validateBurpInput = require("../../validation/burps");
const Burp = require("../../models/Burp");


router.get('/', (req, res) => { 
    Burp.find()
      .sort({ date: -1 })
      .then(burps => {
        let allBurps = {};

        burps.forEach( burp => 
            allBurps[burp._doc._id] = burp._doc
        )
 
        return res.json(allBurps)})
      .catch(err => res.status(404).json({ noburpsfound: "No burps found" }));
});

// router.get('/user/:user_id', (req, res) => { 
//     Burp.find({ user: req.params.user_id })
//         .then(burps => res.json(burps))
//         .catch(err =>
//             res.status(404).json({ noburpsfound: 'No burps found from that user' }
//             )
//         );
// });

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

router.delete("/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Burp.findByIdAndRemove(req.params.id)
      .then(burp => res.json(burp))
      .catch(err =>
        res.status(404).json({ noburpfound: "No burp found with that id" })
      );
  }
);

module.exports = router; 