const express = require('express');
const userController = require('./../controllers/userController')

const router = express.Router();

router
    .route('/')
    .get(usergetAllUsers)
    .post(usercreateUser);

router
    .route('/:id')
    .get(usergetUser)
    .patch(userupdateUser)
    .delete(userdeleteUser);

module.exports = router;
