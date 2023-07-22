const fs = require('fs');
const express = require('express');
const morgan = require('morgan');

const app = express();

//1)    MIDDLEWARES

app.use(morgan('dev'));

app.use(express.json());



const getAllUsers = (req, res) => {
    res.status(500).json({
        status: 'error',
        message:'This route is not yet defined'
    })
}

const getUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined',
  });
};

const createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined',
  });
};

const updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This roUte is not yet defined',
  });
};

const deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This roUte is not yet defined',
  });
};


//3)ROUTES

const userRouter = express.Router();
    
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);






//4)START SERVER    
const port = 3000;
app.listen(port, () => {
  console.log(`APP running on port ${port}`);
});
