const Review = require('./../models/rewiewModel');
const catchAsync = require('./../utils/catchAsync')

exports.getAllReviews = catchAsync(async (req, res, next) => {
    const reviews = await Review.find();

    res.status(200).json({
        status: 'success',
        results: reviews.length,
        data: {
            reviews
        }
    });
});

exports.createReview = catchAsync(async (req, res, next) => {
    if(!req.body.tour) req.body.tour = req.params.
    const newReview = await Review.create(req.body);

    res.status(200).json({
      status: 'success',
      data: {
        review:newReview
      }
    });
})