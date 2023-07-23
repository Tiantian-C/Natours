const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({path:'./co'})
console.log(process.env);

const port = 3000;
app.listen(port, () => {
  console.log(`APP running on port ${port}`);
});