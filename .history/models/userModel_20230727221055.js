const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

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
        minlength: 8,
        select:false
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
userSchema.pre('save', async function (next) {
    //this refers to the current document
    //Only run this function if password was actually modified
    if (!this.isModified('password')) return next();
    
    //Hash the password with cost of 12
    this.password = await bcrypt.hash(this.password, 12);
    
    //Delete passwordConfirm field
    //we do not want passwordConfirm to persist in database
    this.passwordConfirm = undefined;
    next();
})

userSchema.method.correctPassword = function(candidatePassword,userPass)

const User = mongoose.model('User', userSchema);

module.exports = User;