const Tour = require('../models/tourModel');
const catchAsync = require('../utils/catchAsync');

exports.getOverview = catchAsync(async (req, res, next) => {
  //1) Get Tour data from collection
    const tours = await Tour.find();
  //2)Build Template

  //3)Render that template using tour data from 1)
  res.status(200).render('overview', {
      title: 'All Tours',
      tours
  });
});

exports.getTour = (req, res) => {
  //1) Get the data,for the requested tour(including reviews and guides) 

  //2)Build template

  //3)Render template 

  res.status(200).render('tour', {
    title: 'The Forest Hiker Tour',
  });
};
