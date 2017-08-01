/**
 * Created by Hassan on 4/24/2017.
 */

var validator = require('validator');
// sendErrorResponse = require('./general.middleware').;


function verifyUserAttributes(req, res, next) {

  var input = req.body,
    userObj = {
      userName: validator.trim(input.userName),
      email: validator.trim(input.email),
      password: validator.trim(input.password)
    };

  if (validator.isEmpty(userObj.userName)) {
    // return sendErrorResponse(res, 406, "Please provide user name");
  } else if (!validator.isEmail(userObj.email)) {
    // return sendErrorResponse(res, 406, "Please provide a valid email address.");
  } else {
    userObj.courses = [];
    req.userObj = req.body;
    return next();
  }

}

module.exports = {
  verifyUserAttributes: verifyUserAttributes
}
