
const express = require('express');
const morgan = require('morgan');

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
//     res.status(404).json({
//         status: 'fail',
//         message:`Can not find ${req.originalUrl} on this server!`
//     })
    
    const err
})

app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    res.status = err.statusCode || 'error';

    res.status(err.statusCode).json({
        status: err.status,
        message:err.message
    })
})



module.exports = app;

