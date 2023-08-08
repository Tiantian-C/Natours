const express = require('express');
const viewsController = require('../controllers/viewsController');
const authController = require('../controllers/authController');

const router = express.Router();

router.use(authController.isLoggedIn); 

router.get('/', authController.isLoggedIn,viewsController.getOverview);
router.get('/tour/:slug', authController.isLoggedInviewsController.getTour);
router.get('/login', viewsController.getLoginForm);
router.get('/me', authController.protect,viewsController.getAccount);

module.exports = router;