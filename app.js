// Include Dependencies
var createError = require('http-errors');
var express = require('express');
var session = require('express-session');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var pgSession = require('connect-pg-simple')(session);
var db = require("./models/db.js");

// Retrieve Routers
var indexRouter     = require('./routes');
var courseRouter     = require('./routes/courses');
var assignmentRouter = require('./routes/assignments');

// Start Express
var app = express();
app.use(session({
  store: new pgSession({
    pgPromise: db
  }),
  secret: 'adfklg74naKAJSDfe32df!',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 } // 30 days
}));

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
app.use('/courses', courseRouter);
app.use('/assignments', assignmentRouter);

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
