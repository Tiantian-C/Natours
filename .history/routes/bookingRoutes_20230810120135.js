const express = require('express');
const bookingController = require('./../controllers/bookingController');
const authController = require('./../controllers/authController');

const router = express.Router();

router.use(authController.protect);

router.get(
  '/checkout-session/:tourId',
  bookingController.getCheckoutSession
);
router.use(authController.restrictTo('admin'))
router.route('/').get(bookingController)
module.exports = router;
