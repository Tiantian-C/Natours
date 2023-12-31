const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const AppError = require('../utils/appError');
const Tour = require('./../models/tourModel');
const catchAsync = require('./../utils/catchAsync');
const factory = require('./handlerFactory');

exports.getCheckoutSession =catchAsync(async(req, res, next) => {
    // 1) Get the currently booked tour
    const tour = await Tour.findById(req.params.tourId)

    // 2) Create checkout session
    stripe.checkout.session.create({
      payment_method_types: ['card'],
      success_url: `${req.protocol}://${req.get(host)}/`,
        cancel_url: `${req.protocol}://${req.get(host)}/tour/${tour.slug}`,
        customer_email: req.user.email,
      client_reference_id:req.
    });


    // 3) Create session as response



});
