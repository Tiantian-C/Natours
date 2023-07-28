const jwt = require('jsonwebtoken');
const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

const signToken = id => {
    return jwt.sign({ id: id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
}

exports.signup = catchAsync(async (req, res, next) => {
    const newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        passwordConfirm:req.body.passwordConfirm
    });

    const token = signToken(newUser._id);

    res.status(201).json({
        status: 'success',
        token,
        data: {
            user: newUser
        }
    });
});


exports.login = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;
    
    //1)Check if email and password exist
    if (!email || !password) {
        return next(new AppError('Please provide email and password!', 400));
    }

    //2)Check if user exists && password correct
    const user = await User.findOne({ email }).select('+password');

    if (!user || !(await user.correctPassword(password, user.password))) {
        return next(new AppError('Incorrect email or password'));
    }
    
    //3)If everything ok,send token to client
    const token = signToken(user._id);
    console.log(token);
    res.status(200).json({
        status: 'success',
        token
    });
});

exports.protect = catchAsync(async (req, res, next) => {
    //1) Gettting token and check if it's there
    if(req.headers.authorization && req.headers.authorization)

    //2)Verification token

    //3)Check if ueser still exists

    //4)Check if user changed password after the token was issued

    next();
});

