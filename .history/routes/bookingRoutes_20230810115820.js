const express = require('express');
const bookingController = require('./../controllers/bookingController');
const authController = require('./../controllers/authController');

const router = express.Router();

router.
router.get(
  '/checkout-session/:tourId',
  authController.protect,
  bookingController.getCheckoutSession
);

router.route('/').get()
module.exports = router;