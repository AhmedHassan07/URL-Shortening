/**
 * Created by Hassan on 4/22/2017.
 */
'use strict';

module.exports = function usersRoutes(app, api) {

  let users = require('../controllers/users'),
    userMiddleWare = require('../middlewares/users');

  // Setting up the users api
  app.post(api + '/users/create', userMiddleWare.verifyUserAttributes, users.createUser);

  app.post(api + '/users/login', users.login);
  app.get(api + '/signout', users.signout);
  app.get(api + '/users/me', users.me);

};
