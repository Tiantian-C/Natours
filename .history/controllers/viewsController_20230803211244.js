const Tour = require('../models/tourModel');
const catchAsync = require('../utils/catchAsync');


exports.getOverview =catchAsync( async(req, res,next) => {
  //1) Get Tour data from collection
    

  //2)Build Template

  //3)Render that template using tour data from 1)
  res.status(200).render('overview', {
    title: 'All Tours',
  });
};

exports.getTour = (req, res) => {
  res.status(200).render('tour', {
    title: 'The Forest Hiker Tour',
  });
};
