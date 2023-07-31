
const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');
const reviewRouter = require('')

const app = express();

//1) GLOBAL MIDDLEWARES
//it will be executed for every incoming request, regardless of the route


//SET security HTTP headers
app.use(helmet());

//Developmeng logging
if (process.env.NODE_ENV === 'developmet') {
    app.use(morgan('dev'));
}

//Limit requests from same API
const limiter = rateLimit({
    max: 100,
    windowMs: 60 * 60 * 1000,
    message: 'Too many requests fron this IP,please try again in an hour!'
});

//Test middleware
app.use('/api', limiter);


//Body parser,reading data from body into req.body
app.use(express.json({ limit: '10kb' }));


//Data sanitization against NoSQL query injection
app.use(mongoSanitize());

//Data sanitization against XSS
app.use(xss());

//Prevent parameter pollution
app.use(
  hpp({
    whitelist: [
      'duration',
      'ratingsQuantity',
      'ratingAverage',
      'maxGroupSize',
      'difficulty',
      'price',
    ],
  })
);

//Serving static files
app.use(express.static(`${__dirname}/public`))

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    //console.log(req.headers);
    next();
})

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

app.use(globalErrorHandler);



module.exports = app;

