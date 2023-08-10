const AppError = require('../utils/appError');
const Tour = require('./../models/tourModel');
const catchAsync = require('./../utils/catchAsync');
const factory = require('./handlerFactory');

exports.getCheckoutSession = (req, res, next) => {
    // 1) Get the currently booked tour
    const tour = await Tour.findById(req.para)

    // 2) Create checkout session



    // 3) Create session as response



};
