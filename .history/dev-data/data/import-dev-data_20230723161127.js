const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Tour = require('./../../models/tourModel')


dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB connection successful!');
  });

  //RAAD JSON FILE
const tours = fs.readFileSync('tours-simple.json', 'utf-8');

//IMPORT DATA INTO DB
const importData = async () => {
    try {
        await Tour.create()
    } catch (err) {
        
    }
}