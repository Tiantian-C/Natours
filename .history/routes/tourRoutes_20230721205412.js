const express = requie('express')

const router = express.Router();

Router
    .route('/')
    .get(getAllTours)
    .post(createTour);

Router
    .route('/:id')
    .get(getTour)
    .patch(updateTour).
    delete(deleteTour);
