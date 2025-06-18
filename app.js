const Joi = require('joi');

const express = require('express');
const app = express();
app.use(express.json());    
const port = 3000 || process.env.PORT;

const genres = [
    {id: 1, name:'Action'},
    {id: 2, name:'Hororr'},
    {id: 3, name:'Fantasia'},
    {id: 4, name:'Comidy'},
    {id: 5, name:'Drama'},
    {id: 6, name:'Crime'},
];
const movies = [
    {id: 1, name:'Inception'},
    {id: 2, name:'The Godfather'},
    {id: 3, name:'The Dark Knight'},
    {id: 4, name:'Parasite'},
    {id: 5, name:'Forrest Gump'},
    {id: 6, name:'Pulp Fiction'},
];

app.get('/vidly.com', (req, res)=>{
    console.log('Welcome to your website ^_^ ');
});

app.get('/vidly.com/api/genres', (req, res)=>{
    res.send(genres);
});

app.post('/vidly.com/api/genres', (req, res)=>{
    const {error} =  validateInput(req.body)
    if(error) return res.status(400).send(error.details[0].message);
    
    const genre = {
        id: genres.length +1,
        name: req.body.name
    };
    genres.push(genre);
    res.send(genre);
});

app.put('/vidly.com/api/genres/:id', (req, res)=>{
    const genre = genres.find(c => c.id === parseInt(req.body.params));
    if(!genre) return res.status(404).send("There's no genre with this id!!");

    const {error} =  validateInput(req.body)
    if(error) return res.status(400).send(error.details[0].message);
    
    genre.name = req.body.name;
    res.send(genre);
    
});

app.delete('/vidly.com/api/genres/:id', (req, res)=>{
    const genre = genres.find(c => c.id === parseInt(req.body.params));
    if(!genre) return res.status(404).send("There's no genre with this id!!");

    const index = genres.indexOf(genre);
    genres.splice(index, 1);
    res.send(genre);
    
});

function validateInput(genre){
    const schema = Joi.object({
        name : string().min(3).required()
    });
    return schema.validate(genre);
}


app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
});