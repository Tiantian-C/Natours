const Review = require('./../models/rewiewModel');
const catchAsync = require('./../utils/catchAsync')

exports.getAllReviews = catchAsync(async (req, res, next) => {
    const reviews = await Review.find();

    res.status(200).json({
        status:'success'
    })
})