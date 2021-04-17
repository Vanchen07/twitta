const mongoose = require('mongoose'); 

const passport = require('passport');

const express = require('express');
const db = require('./config/keys').mongoURI; 

const path = require('path');

const users = require("./routes/api/users");
const burps = require("./routes/api/burps");

mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true}) 
    .then(() => console.log("Connect to MongoDB successfully"))
    .catch(err => console.log(err)); 

const app = express(); 

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
}

app.use(express.urlencoded()); 
app.use(express.json()); 

app.use(passport.initialize()); 

const passportConfiguration = require('./config/passport.js');
passportConfiguration(passport);

app.use("/api/users", users); 
app.use("/api/burps", burps); 

const port = process.env.PORT || 5000; 

app.listen(port, () => console.log(`Server is running on port ${port}`)); 