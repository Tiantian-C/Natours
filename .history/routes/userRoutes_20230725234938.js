const express = require('express');
const userController = require('./../controllers/userController');
const auth

const router = express.Router();

router.post('/signup')
router
    .route('/')
    .get(userController.getAllUsers)
    .post(userController.createUser);

router
    .route('/:id')
    .get(userController.getUser)
    .patch(userController.updateUser)
    .delete(userController.deleteUser);

module.exports = router;
