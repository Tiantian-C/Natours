const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('DB connection successful!');
  });

const tourScheme = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name'],
    unique:true

  },
  rating: {
    type: Number,
    default:4.5
  },
  price: {
    type: Number,
    required:[true,'A tour must have a price']
  }
});
const Tour = mongoose.model('Tour',tourScheme);

const testTour = new Tour({
  name: 'The Park Camp',
  price:997
  
})

testTour.save().then(doc => {
  console.log(doc)
}).catch(err => {
  console.log('ERROR!!', err)
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`APP running on port ${port}`);
});
