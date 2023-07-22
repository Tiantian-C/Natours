const express = requie('express')

const Router = express.Router();

Router
    .route('/')
    .get(getAllTours)
    .post(createTour);

tourRouter
    .route('/:id')
    .get(getTour)
    .patch(updateTour).
    delete(deleteTour);
