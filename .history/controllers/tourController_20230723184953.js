const Tour = require('./../models/tourModel');

exports.getAllTours = async (req, res) => {
  try {
    //BUILD THE QUERY
    //1A)Filtering
    const queryObj = { ...req.query };
    const excludesFields = ['page', 'sort', 'limit', 'fileds'];
    excludesFields.forEach(el => delete queryObj[el]);

    //2B)Advanced Filtering
    console.log(req.query);
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);
   
    

    let query = Tour.find(JSON.parse(queryStr));
    console.log(query);
    //3)SORTING
    if (req.query.sort) {
      const sortBy = req.query.sort.split(',').join(' ')
      //sort('price ratingAverage')
      console.log(sortBy)
      query = query.sort(sortBy)
    } else {
      query = query.sort('-createAt');
    }

    //3)Filed LIMITING
    if (req.query.fields) {
      const fileds = req.query.fileds.split(',').join(' ');
      query = query.select(fileds);

    } else {
      query = query.select(' ')
    }


    //EXCUTE THE QUERY
    const tours = await query;


    //SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: tours.length,
      data: {
        tours,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data: {
        tour,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
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
      message: 'Invalid data sent!',
    });
  }
};

exports.updateTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: 'success',
      data: {
        tour,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.deleteTour = async (req, res) => {
  try {
    await Tour.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
