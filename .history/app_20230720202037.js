const fs = require('fs');
const express = require('express');

const app = express();

app.get('/api/v1/tours', (req, res) => {
    
})
const tours = fs.readFileSync(``)
const port = 3000;
app.listen(port, () => {
    console.log(`APP running on port ${port}`);
})