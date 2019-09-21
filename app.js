const mongoose = require('mongoose'); //import mongoose ORM of mongo

const express = require("express");
const app = express(); // creates new express server
const db = require('./config/keys').mongoURI; //import key
mongoose
    .connect(db, {useNewUrlParser: true})
    .then(() => console.log("Connect to MongoDB successfully"))
    .catch(err => console.log(err)); // connect to MongoDB using mongoose

app.get("/", (req, res) => res.send("Hello World I am here"));

const port = process.env.PORT || 5000; //specifies which port to run on

app.listen(port, () => console.log(`Server is running on port ${port}`)); // tells express to start a socket and listen for connections



