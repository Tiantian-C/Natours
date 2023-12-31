const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const sendEmail = require('./../utils/email');

const signToken = (id) => {
  return jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create(
    req.body
    // {
    //   name: req.body.name,
    //   email: req.body.email,
    //   password: req.body.password,
    //   passwordConfirm: req.body.passwordConfirm,
    //   passwordChangedAt: req.body.passwordChangedAt,
    //   role: req.body.role,
    // }
  );

  const token = signToken(newUser._id);

  res.status(201).json({
    status: 'success',
    token,
    data: {
      user: newUser,
    },
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
    token,
  });
});

exports.protect = catchAsync(async (req, res, next) => {
  //1) Gettting token and check if it's there
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }
  if (!token) {
    return next(new AppError('Your are not logged in to get acccess', 401));
  }

  //2)Verification token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  //console.log(decoded);

  //3)Check if ueser still exists
  const freshUser = await User.findById(decoded.id);
  if (!freshUser) {
    return next(
      new AppError('The user belonging to this token does no longer exist', 401)
    );
  }
  //4)Check if user changed password after the token was issued
  if (freshUser.changedPasswordAfter(decoded.iat)) {
    return next(
      new AppError('User recently changed password!Please log in again.', 401)
    );
  }

  //GRANT ACCESS TO GRANTED ROUTE
  req.user = freshUser; //put the user to the req Object
  next();
});

exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    //roles['admin','lead-guide'] . role = 'user'
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError('You do not have permission to perform this action', 403)
      );
    }

    next();
  };
};

exports.forgotPassword = catchAsync(async(req, res, next) => {
    //1)Get user based on Posted email
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        return next(new AppError('There is  no user with email address.', 404));
    }

    //2)Generated the random reset token
    const resetToken = user.createPassworsResetToken();
    await user.save({validateBeforeSave:false});

    //3)Send it to user's email
    const resetURL = `${req.protocol}://${req.get('host')}/api/v1/users/reset`
});
exports.resetPassword = (req, res, next) => {};
