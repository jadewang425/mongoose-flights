require('dotenv').config();
require('./config/database');
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// require routes
const indexRouter = require('./routes/index');
const flightsRouter = require('./routes/flights');
const arrivalsRouter = require('./routes/arrivals')
const ticketsRouter = require('./routes/tickets');

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middleware setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(methodOverride('_method'));

// register routes
app.use('/', indexRouter);
app.use('/flights', flightsRouter);
app.use('/', arrivalsRouter);
app.use('/flights/:id/tickets', ticketsRouter);


const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log('Your server is running')
})

module.exports = app
