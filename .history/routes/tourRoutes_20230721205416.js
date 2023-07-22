const express = requie('express')

const router = express.Router();

router
    .route('/')
    .get(getAllTours)
    .post(createTour);

Router
    .route('/:id')
    .get(getTour)
    .patch(updateTour).
    delete(deleteTour);
