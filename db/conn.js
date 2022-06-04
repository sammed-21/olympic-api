const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/olympic').then((req, res) => {
    console.log("connected successfully");
}).catch((err) => {
    console.log(err);
})