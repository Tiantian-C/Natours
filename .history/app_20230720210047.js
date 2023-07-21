const fs = require('fs');
const express = require('express');

const app = express();

//middleware is a function that can modify the incoming req data
app.use(express.json());

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

app.get('/api/v1/tours', (req, res) => {
    res.status(200).json({
        status: 'success',
        results: tours.length,
        data: {
            tours
        }

    })
});

//send data from client to the server
app.post('/api/v1/tours', (req, res) => {
    const newId = tours[tours.length - 1].id + 1;
    const newTour = Object.assign({id:newId},RE)
    res.send('Done');
})

const port = 3000;
app.listen(port, () => {
    console.log(`APP running on port ${port}`);
})