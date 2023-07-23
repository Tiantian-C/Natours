const mongoose = require('mongoose');

const tourScheme = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name'],
    unique: true,
  },
    durations: {
        type: Number,
        required:[true,'a tour must have a duration']
    },
    maxGroupSize: {
        type: Number,
        required:[true,'A tour must have a group size']
        
    },
    difficulty: {
        type: String,
        required:[true,'A tour must have a difficulty']
    },
  ratingAverage: {
    type: Number,
    default: 4.5,
    },
    ratingsQuantity: {
        type: Number,
        default:0
  },
  price: {
    type: Number,
    required: [true, 'A tour must have a price'],
    },
    priceDiscount: Number,
    summery: {
        type: String,
        trim:true
  }
});
const Tour = mongoose.model('Tour', tourScheme);

module.exports = Tour;
