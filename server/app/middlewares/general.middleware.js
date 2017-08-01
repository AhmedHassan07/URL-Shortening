'use strict'; //NOSONAR

const StandardError = require('standard-error'),
  passport = require('../../config/passport');


const standardErrorResponse = (res, err, type, statusCode) => {
  return res.status(statusCode).send({
    status: "Error",
    message: err,
    originalError: new StandardError({
      message: err
    }),
    type: type,
    severity: "low",
    msgCode: "409"
  });
}

const checkAuth = () => {
  return passport.authenticate('jwt', {session: false})
}


const validateEmail = (email) => {
  var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return re.test(email);
}

const validateUrl = (url) => {
  var r = new RegExp('/^(ftp|http|https):\/\/[^ "]+$/');
  return r.test(url);
}

module.exports = {
  standardErrorResponse,
  checkAuth,
  validateEmail,
  validateUrl
}

