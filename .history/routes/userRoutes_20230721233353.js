const express = require('express');
const userController = require('./../controllers/userController')

const router = express.Router();

router
    .route('/')
    .get(userCogetAllUsers)
    .post(userCocreateUser);

router
    .route('/:id')
    .get(userCogetUser)
    .patch(userCoupdateUser)
    .delete(userCodeleteUser);

module.exports = router;
