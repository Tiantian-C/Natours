const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });
console.log(process.env);

const port = process.EN3000;
app.listen(port, () => {
  console.log(`APP running on port ${port}`);
});
