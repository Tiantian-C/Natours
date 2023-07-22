const fs = require('fs');
const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

//1)    MIDDLEWARES

app.use(morgan('dev'));
app.use(express.json());





//3)ROUTES
   
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);






//4)START SERVER    
const port = 3000;
app.listen(port, () => {
  console.log(`APP running on port ${port}`);
});
