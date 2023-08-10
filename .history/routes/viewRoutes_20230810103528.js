const express = require('express');
const viewsController = require('../controllers/viewsController');
const authController = require('../controllers/authController');
const booingController = require('../controllers/bookingController');
const router = express.Router();

router.get('/', booingController.cr,authController.isLoggedIn, viewsController.getOverview);
router.get('/tour/:slug', authController.isLoggedIn, viewsController.getTour);
router.get('/login', authController.isLoggedIn, viewsController.getLoginForm);
router.get('/me', authController.protect, viewsController.getAccount);

module.exports = router;
