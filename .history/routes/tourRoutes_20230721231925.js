const express = require('express');
const tourController = require('./../controllers/tourController');

const router = express.Router();

router
    .route('/')
    .get(tourgetAllTours)
    .post(tourcreateTour);

router
    .route('/:id')
    .get(tourgetTour)
    .patch(tourupdateTour).
    delete(tourdeleteTour);

module.exports = router;

