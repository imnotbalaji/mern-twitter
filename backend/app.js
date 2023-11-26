var express = require('express');

var cookieParser = require('cookie-parser');
var logger = require('morgan');


var usersRouter = require('./routes/api/users');
var catsRouter = require('./routes/cats');
var tweetsRouter = require('./routes/api/tweets')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());



app.use('/api/users', usersRouter);
app.use('/api/tweets', tweetsRouter);
app.use('/cats', catsRouter);

module.exports = app;
