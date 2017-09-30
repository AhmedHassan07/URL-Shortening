/**
 * Created by Hassan on 4/22/2017.
 */
'use strict';

var express = require('express'),
    path = require('path'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    sessionMiddleware = require('./session'),
    glob = require('glob'),
    passport = require('./passport'),
    app = express();


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './../../dist')));
app.use(express.static(path.join(__dirname, './../../node_modules')));

app.use(sessionMiddleware);
app.use(passport.initialize());
app.use(passport.session());

glob("server/**/*.routes.js", function (err, files) {

  var apiPath = '/api';
    files.forEach(function(routePath){

      require(path.resolve(routePath))(app, apiPath);

    });


  app.use('*',function(req, res) {
    res.sendFile(path.join(__dirname, '../../dist/index.html'));
  });

  app.use(function (err, req, res) {
    res.status(err.status || 500);
    return res.render('error', {
      message: err.message,
      error: err
    });
  });

});





module.exports = app;
