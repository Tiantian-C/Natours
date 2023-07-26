const mongoose = require('mongoose');
const validator = 
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required:[true,'Please tell us your name!']
    },
    email: {
        tyoe: String,
        required: [true, 'Please provide your email'],
        unique: true,
        lowercase:true
    },
    
})