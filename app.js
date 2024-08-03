const express = require('express');
const app = express();
require('dotenv').config()
const userRouter = require('./routes/index')
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', userRouter);


module.exports = app;
