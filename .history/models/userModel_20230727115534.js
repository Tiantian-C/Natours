const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please tell us your name!']
    },
    email: {
        type: String,
        required: [true, 'Please provide your email'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email']
    },
    photo: String,
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minlength: 8
    },
    passwordConfirm: {
        type: String,
        required: [true, 'Please confirm your password!'],
        validate: {
            // this only works on SAVE and CREATE
            validator: function (el) {
                return el === this.password;
            },
            message:'Passwords are not the same'
        }
    }
    
});

//excute between get the data and persist to the database
userSchema.pre('save', function (next) {
    //this refers to the current document
    if (!this.isModified('password')) return next();


})

const User = mongoose.model('User', userSchema);

module.exports = User;