const app = require('./app');

console.log()

const port = 3000;
app.listen(port, () => {
  console.log(`APP running on port ${port}`);
});
