const express = require('express');
const tourController = require('./../controllers/tourController');
const authController = require('./../controllers/authController');
const reviewRouter = require('./../routes/reviewRoutes')

const router = express.Router();

//router.param('id', tourController.checkID)


//POST /tour/3423hbjdnl/reviews
//GET /tour/3423hbjdnl/reviews
//GET /tour/3423hbjdnl/reviews/79034667lkshvkjj


router.use('/:tourId/reviews', reviewRouter);

router.
    route('/top-5-cheap')
    .get(tourController.aliasTopTours, tourController.getAllTours);
    
router.route('/tour-stats').get(tourController.getTourStats)
router.route('/monthly-plan/:year').get(tourController.getMonthlyPlan);

router
  .route('/')
  .get(tourController.getAllTours)
  .post(authController.protect,authController.restrictTo('admin') tourController.createTour);

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(
    authController.protect,
    authController.restrictTo('admin','lead-guide'),
    tourController.deleteTour
);
  


module.exports = router;
