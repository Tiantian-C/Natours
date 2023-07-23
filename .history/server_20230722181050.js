const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = require('./app');

const DB = 
mongoose.connect()

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`APP running on port ${port}`);
});
