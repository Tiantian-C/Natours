const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required:[true,'Please tell us your name!']
    },
    email: {
        tyoe: String,
        required:[true,'Please']
    }
})