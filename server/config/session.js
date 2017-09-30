/**
 * Created by Hassan on 4/22/2017.
 */
'use strict';

var session = require('express-session'),
    mongoStore = require('connect-mongo')(session),
    mongoose = require('mongoose');





var sessionMiddleware = session({
    resave : true,
    saveUninitialized: true,
    store: new mongoStore({url : config.mongodb.host+config.mongodb.db_name}),
    cookie:{maxAge:1000*3600*24*14}, //remember for 14 days
    secret: config.expressSessionSecret,
    key:'connect.sid'
});

module.exports = sessionMiddleware;

