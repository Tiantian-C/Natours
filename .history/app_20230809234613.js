const path = require('path');
const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cookieParser = require('cookie-parser');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');
const reviewRouter = require('./routes/reviewRoutes');
const bookingRouter = require('./routes/bookingRoutes');
const viewRouter = require('./routes/viewRoutes');

const app = express();

//set the view engine for the express app to pug
app.set('view engine', 'pug');
//set the directory where the views (templates) for the application are located
app.set('views', path.join(__dirname, 'views'));

//1) GLOBAL MIDDLEWARES
//it will be executed for every incoming request, regardless of the route

//Serving static files
app.use(express.static(path.join(__dirname, 'public')));

//SET security HTTP headers
// app.use(helmet());
// app.use(
//   helmet({
//     contentSecurityPolicy: {
//       directives: {
//         defaultSrc: ["'self'", 'data:', 'blob:', 'https:', 'ws:'],
//         baseUri: ["'self'"],
//         fontSrc: ["'self'", 'https:', 'data:'],
//         scriptSrc: [
//           "'self'",
//           'https:',
//           'http:',
//           'blob:',
//           'https://*.mapbox.com',
//           'https://js.stripe.com',
//           'https://m.stripe.network',
//           'https://*.cloudflare.com',
//         ],
//         frameSrc: ["'self'", 'https://js.stripe.com'],
//         objectSrc: ["'none'"],
//         styleSrc: ["'self'", 'https:', "'unsafe-inline'"],
//         workerSrc: [
//           "'self'",
//           'data:',
//           'blob:',
//           'https://*.tiles.mapbox.com',
//           'https://api.mapbox.com',
//           'https://events.mapbox.com',
//           'https://m.stripe.network',
//         ],
//         childSrc: ["'self'", 'blob:'],
//         imgSrc: ["'self'", 'data:', 'blob:'],
//         formAction: ["'self'"],
//         connectSrc: [
//           "'self'",
//           "'unsafe-inline'",
//           'data:',
//           'blob:',
//           'https://*.stripe.com',
//           'https://*.mapbox.com',
//           'https://*.cloudflare.com/',
//           'https://bundle.js:*',
//           'ws://127.0.0.1:*/',
//         ],
//         upgradeInsecureRequests: [],
//       },
//     },
//   })
// );
// Set security HTTP headers
// app.use(
//   helmet({
//     crossOriginEmbedderPolicy: false,
//     contentSecurityPolicy: false 
//   })
// );
 
// // Further HELMET configuration for Security Policy (CSP)
// const scriptSrcUrls = [
//   'https://api.tiles.mapbox.com/',
//   'https://api.mapbox.com/',
//   'https://*.cloudflare.com',
//   'https://js.stripe.com/v3/',
//   'https://checkout.stripe.com'
// ];
// const styleSrcUrls = [
//   'https://api.mapbox.com/',
//   'https://api.tiles.mapbox.com/',
//   'https://fonts.googleapis.com/',
//   'https://www.myfonts.com/fonts/radomir-tinkov/gilroy/*',
//   ' checkout.stripe.com'
// ];
// const connectSrcUrls = [
//   'https://*.mapbox.com/',
//   'https://*.cloudflare.com',
//   'http://127.0.0.1:3000',
//   'http://127.0.0.1:52191',
//   '*.stripe.com'
// ];
 
// const fontSrcUrls = ['fonts.googleapis.com', 'fonts.gstatic.com'];
 
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: [],
      connectSrc: ["'self'", ...connectSrcUrls],
      scriptSrc: ["'self'", ...scriptSrcUrls],
      styleSrc: ["'self'", "'unsafe-inline'", ...styleSrcUrls],
      workerSrc: ["'self'", 'blob:'],
      objectSrc: [],
      imgSrc: ["'self'", 'blob:', 'data:'],
      fontSrc: ["'self'", ...fontSrcUrls],
      frameSrc: ['*.stripe.com', '*.stripe.network']
    }
  })
);

 
 

//Developmeng logging
if (process.env.NODE_ENV === 'developmet') {
  app.use(morgan('dev'));
}

//Limit requests from same API
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests fron this IP,please try again in an hour!',
});

//Test middleware
app.use('/api', limiter);

//Body parser,reading data from body into req.body
app.use(express.json({ limit: '10kb' }));
app.use(cookieParser()); //parse the data from cookie

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

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  //console.log(req.headers);
  //console.log(req.cookies);
  next();
});

//3)ROUTES

app.use('/', viewRouter);
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/reviews', reviewRouter);
app.use('/api/v1/bookings', bookingRouter);

app.all('*', (req, res, next) => {
  // const err = new Error(`Can not find ${req.originalUrl} on this server!`);
  // err.status = 'fail';
  // err.statusCode = 404;
  //next(err);

  next(new AppError(`Can not find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
