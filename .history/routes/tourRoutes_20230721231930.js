const express = require('express');
const tourController = require('./../controllers/tourController');

const router = express.Router();

router
    .route('/')
    .get(tourControllergetAllTours)
    .post(tourControllercreateTour);

router
    .route('/:id')
    .get(tourControllergetTour)
    .patch(tourControllerupdateTour).
    delete(tourControllerdeleteTour);

module.exports = router;

