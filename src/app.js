const express = require('express');
const userController = require('./controller/userController.js')

const app = express();
app.use(express.json());

app.post('/users', userController.createUser);
app.get('/users/:id', userController.getUser);

module.exports = app;
