const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');

mongoose.co

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`APP running on port ${port}`);
});
