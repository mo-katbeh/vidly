
const express = require('express');
const genres = require('./routes/genres')
const home = require('./routes/home')
const app = express();

app.use('/vidly.com/api/genres', genres);    
app.use('/vidly.com', home);    

const port = 3000 || process.env.PORT;

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
});