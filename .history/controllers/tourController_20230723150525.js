const Tour = require('./../models/tourModel');

exports.getAllTours = async (req, res) => {
  try {
      const tours = await Tour.find();
      res.status(200).json({
      status: 'success',
      results: tours.length,
      data: {
        tours,
      },
  });
  }catch
  
};

exports.getTour = (req, res) => {
  const id = req.params.id * 1;
  // const tour = tours.find((el) => el.id === id);

  // res.status(200).json({
  //   status: 'success',
  //   results: tours.length,
  //   data: {
  //     tour,
  //   },
  // });
};

exports.createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);

    res.status(201).json({
      status: 'success',
      tour: newTour,
    });

  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message:'Invalid data sent!'
    })
  }
};

exports.updateTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tour: '<updating tour here..>',
    },
  });
};

exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null,
  });
};