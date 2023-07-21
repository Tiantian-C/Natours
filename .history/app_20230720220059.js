const fs = require('fs');
const express = require('express');

const app = express();

//middleware is a function that can modify the incoming req data
app.use(express.json());

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

app.get('/api/v1/tours/:id', (req, res) => {
    r
    res.status(200).json({
        status: 'success',
        // results: tours.length,
        // data: {
        //     tours
        // }

    })
});

//send data from client to the server
app.post('/api/v1/tours', (req, res) => {
    const newId = tours[tours.length - 1].id + 1;
    const newTour = Object.assign({ id: newId }, req.body);
    tours.push(newTour);
    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), err => {
        res.status(201).json({
            status: 'success',
            tour:newTour
        })
    });
    
})

const port = 3000;
app.listen(port, () => {
    console.log(`APP running on port ${port}`);
})