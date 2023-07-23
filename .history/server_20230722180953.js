const mongoose = require('mo')
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');



const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`APP running on port ${port}`);
});
