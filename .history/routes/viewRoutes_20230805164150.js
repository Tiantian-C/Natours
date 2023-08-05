const express = require('express');
const viewsController = require('../controllers/viewsController');
const authController = require('../controllers/authController');

const router = express.Router();

router.use(authController.isLoggedIn);//if a user is logged in we can get 

router.get('/',viewsController.getOverview);
router.get('/tour/:slug',viewsController.getTour);
router.get('/login', viewsController.getLoginForm);

module.exports = router;