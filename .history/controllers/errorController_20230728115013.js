const AppError = require('../utils/appError');

const handleCastErrorDB = (err) => {
  const message = `Invalid ${err.path}:${err.value}.`;
  return new AppError(message, 400);
};


const handleDuplicateFieldsDB = (err) => {
//   const value = err.errmsg.match(/(["'])(\\?.)*?\1/)[0];
//   console.log(value);

//   const message = `Duplicate field value: ${value}. Please use another value!`;
//   return new AppError(message, 400);
    const [errorField, errorValue] = Object.entries(err.keyValue).flat();
    const message = `Duplicate '${errorField}' value entered '${errorValue}'.`
    return new AppError(message, 400);
};

const handleValidationErrorDB = (err) => {
  const errors = Object.values(err.errors).map((el) => el.message);

  const message = `Invalid input data. ${errors.join('. ')}`;
  return new AppError(message, 400);
};

const handleJWTError = err => new AppError('Invalid token')

const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

const sendErrorProd = (err, res) => {
  //Operational,trusted error:send message to client
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
    //programming or other unknown error:don"t leak details
  } else {
    //1) log err
    console.error('ERROR-----', err);

    //2) send a generic message
    res.status(500).json({
      status: 'error',
      message: 'Something went very wrong!',
    });
  }
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === 'production') {
      let error = { ...err };
      if (err.name === 'CastError') error = handleCastErrorDB(error);
      if (err.code === 11000) error = handleDuplicateFieldsDB(error);
      if (err.name === 'ValidationError')
        error = handleValidationErrorDB(error);
    if (err.name === 'JsonWebTokenError') error = handleJWTError(error);
      sendErrorProd(error, res);
  }
};
