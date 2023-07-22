const express = require('express');
const userController = require('./../controllers/userController')

const router = express.Router();

router
    .route('/')
    .get(userControllergetAllUsers)
    .post(userControllercreateUser);

router
    .route('/:id')
    .get(userControllergetUser)
    .patch(userControllerupdateUser)
    .delete(userControllerdeleteUser);

module.exports = router;
