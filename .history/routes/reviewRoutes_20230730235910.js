const express = require('express');
const reviewController = require('./../controllers/reviewController');
const authController = require('./../controllers/authController');

const router = express.Router({mergeParams:true});

//POST /tours/5346gdghj/reviews
//GET /tours/5346gdghj/reviews
//POST /reviews

router
  .route('/')
  .get(reviewController.getAllReviews)
  .post(
    authController.protect,
    authController.restrictTo('user'),
    reviewController.createReview
);
  


router.route('/:id').patch().delete(reviewController.deleteReview);

module.exports = router;
