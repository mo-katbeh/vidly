const Joi = require('joi');
const express = require('express');
const app = express();
app.use(express.json());

const genres = [
    {id: 1, name:'Action'},
    {id: 2, name:'Hororr'},
    {id: 3, name:'Fantasia'},
    {id: 4, name:'Comidy'},
];
