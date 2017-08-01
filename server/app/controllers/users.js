/**
 * Created by Hassan on 4/24/2017.
 */
const mongoose = require('mongoose'),
  User = mongoose.model('User'),
  passport = require("passport");
// sendErrorResponse = require('./index').sendErrorResponse;


function createUser(req, res) {
  let userObj = req.userObj;

  function authenticateUser(user) {
    winston.info('New User (local) : { email: ' + user.email + ' userName: ' + user.userName + ' }');
    req.login(user, function (err) {
      if (err) {
        return winston.info("error occur " + err)
      }
      return res.send({status: "success", message: "User sign up successfully", data: user});
    });
  }

  return User.create(userObj)
    .then(authenticateUser)
  //.catch((err) => sendErrorResponse(res, 403, err));
}
function login(req, res, next) {
  passport.authenticate('local', function (err, user) {
    if (err) {
      return next(err);
    }
    if (!user) {
      // return sendErrorResponse(res, 401, "User not found")
    }
    req.logIn(user, function (err) {
      if (err) {
        return next(err);
      }
      return res.send({status: "success", message: "User login successfully", data: user});
    });
  })(req, res, next);
};

function signout(req, res) {

  req.logout();
  return res.send({status: "success", message: "User logout successfully"});

}

function updateUserInfo(req, res) {

  var userObj = req.userObj;

  function authenticateUser(user) {
    winston.info('New User (local) : { email: ' + user.email + ' userName: ' + user.userName + ' }');
  }

  return User.update(userObj)
    .then(authenticateUser)
  //.catch((err) => sendErrorResponse(res, 403, err));
}

function me(req, res) {
  res.send(req.user || null);
}


module.exports = {
  createUser: createUser,
  login: login,
  signout: signout,
  updateUserInfo: updateUserInfo,
  me: me
}
