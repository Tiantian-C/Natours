
const express = require('express');
const morgan = require('morgan');

const AppError = require('./utils/appError');
const globalErrorHandler = requ
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

//1)    MIDDLEWARES
if (process.env.NODE_ENV === 'developmet') {
    app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`))



//3)ROUTES
   
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

app.all('*', (req, res, next) => {

    
    // const err = new Error(`Can not find ${req.originalUrl} on this server!`);
    // err.status = 'fail';
    // err.statusCode = 404;
    //next(err);

    next(new AppError(`Can not find ${req.originalUrl} on this server!`,404));
})

app.use()



module.exports = app;

