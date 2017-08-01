'use strict';

var PromiseReturns = require('bluebird'),
  StandardError = require('standard-error'),
  _ = require('lodash');

const validateEmail = (email) => {
  var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return re.test(email);
}

const validateUrl = (url) => {
  var r = new RegExp('/^(ftp|http|https):\/\/[^ "]+$/');
  return r.test(url);
}

const rejectPromise = (message) => {
  winston.error(message);
  return new PromiseReturns(function (resolve, reject) {
    reject(new StandardError({
      status: 'Error',
      message: message,
      msgCode: '409'
    }));
  });
}

const catchException = (err) => {
  winston.error(err);
  return rejectPromise(err.message);
}


module.exports = {
  validateEmail,
  rejectPromise,
  validateUrl,
  catchException
};
