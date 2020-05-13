const mongoose = require('mongoose'); //import mongoose ORM of mongo
const passport = require('passport'); 

//server/db
const express = require("express");
const app = express(); // creates new express server
const db = require('./config/keys').mongoURI; //import key

//deploy to heroku
const path = require('path');

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
}

//routes
const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");

//models
// const User = require('./models/User'); //bring in User model to create new user

//parsers
const bodyParser = require('body-parser'); //Parse incoming request bodies in a middleware before your handlers, available under the req.body property.

mongoose
    .connect(db, {useNewUrlParser: true}) //returns a promise
    .then(() => console.log("Connect to MongoDB successfully"))
    .catch(err => console.log(err)); // connect to MongoDB using mongoose


app.use(bodyParser.urlencoded({ extended: false })); //tell app to respond to other apps like postman
app.use(bodyParser.json()); //tell app to respond to json requests

app.use(passport.initialize());

require('./config/passport.js')(passport);


// for initial test before frontend
// app.get("/", (req, res) => {
//     const user = new User ({
//         handle: "vanessa",
//         email: "vanessa@vanessa.com",   
//         password: "password"
//     })
//     user.save()
//     res.send("Hello Hellooooo");
// });

app.use("/api/users", users); //base routes
app.use("/api/tweets", tweets); //base routes


const port = process.env.PORT || 5000; //specifies which port to run on

app.listen(port, () => console.log(`Server is running on port ${port}`)); // tells express to start a socket and listen for connections