// Include Dependencies
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Retrieve Routers
var indexRouter     = require('./routes');
var dashboardRouter = require('./routes/dashboard');

// Start Express
var app = express();

// View Engine Setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Debug and Cookie Setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// User Routers
app.use('/', indexRouter);
app.use('/dashboard', dashboardRouter);

// Catch 404 and Forward to Error Handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error Handler
app.use(function(err, req, res, next) {
  // Set Locals, Only Providing Error in Development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the Error Page
  res.status(err.status || 500);
  res.render('error');
});

// Export App
module.exports = app;
