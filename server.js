require('colors')
const express = require('express');
const helmet = require('helmet');
const RecipeRouter = require('./Routers/recipe-router')

const server = express();

server.use(helmet());
server.use(express.json());
server.use('/recipe', RecipeRouter)



module.exports = server;