/**
 * Created by Hassan on 4/22/2017.
 * */
'use strict';
var glob = require('glob'),
    path = require('path'),
    env = process.env.NODE_ENV || 'development',
    mongoose = require('mongoose'),
    _ = require("lodash"),
    async = require('async');

global.config = {};

module.exports = function(callback) {

    async.series([
        function(envCb){
            // configuring the environment
            glob("config/env/**/*.json", function (err, files) {

                if(err) {
                    envCb(err);
                }
                else {
                    // picking up the environment file
                    global.config = require(path.join(__dirname,'env',env+'.json'));

                    if(!config) {
                        envCb('error occured while loading config file!');
                    }
                    else {
                        winston.info('loaded config file:', env);

                        var dbURI = config.mongodb.host+config.mongodb.db_name;
                        //make connection with mongodb
                        mongoose.connect(dbURI);

                        // when successfully connected
                        mongoose.connection.on('connected', function () {
                            winston.info('mongoose connection open to ' + dbURI);
                            envCb();
                        });

                        // if the connection throws an error
                        mongoose.connection.on('error',function (err) {
                            envCb(err);
                        });

                        // when the connection is disconnected
                        mongoose.connection.on('disconnected', function () {
                            envCb('mongoose connection disconnected');
                        });
                    }
                }
            });

        },
        function(modelsCb){

            glob("server/**/*.models.js", function (err, files) {

                if(err) {
                    modelsCb(err);
                }
                else {
                    winston.info('models are loading ...');
                    files.forEach(function(file){
                        require(path.join(__dirname,'../../',file));
                        winston.info(file, 'is loaded');
                    });
                    modelsCb();
                }
            });
        }], function(err){
        if(err){
            callback(err);
        }
        else {
            callback();
        }
    });

};
