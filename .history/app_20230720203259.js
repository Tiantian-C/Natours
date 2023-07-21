const fs = require('fs');
const express = require('express');

const app = express();

//middleware is a function that can modify
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
    
})

const port = 3000;
app.listen(port, () => {
    console.log(`APP running on port ${port}`);
})