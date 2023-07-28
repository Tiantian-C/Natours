const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');

exports.signup = catchAsync(async (req, res, next) => {
    const newUser = await User.create({
        name: req.bode.name,
        email: req.body.email,
        password: req.body.password,
        passwordConfirm:req.body.pa
    });
    res.status(201).json({
        status: 'success',
        data: {
            user: newUser
        }
    });
});