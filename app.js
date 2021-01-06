var createError = require('http-errors');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');

var BookApiRouter = require('./routes/book');
const port =process.env.PORT || 3000;
app.engine('ejs' , require('ejs').__express)

var app = express();






app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist/MEAN-CRUD-book-library')));
app.use('/', express.static(path.join(__dirname, 'dist/MEAN-CRUD-book-library')));
app.use('/api', BookApiRouter);



app.listen(port,()=>{console.log("server ready at" +port)});
