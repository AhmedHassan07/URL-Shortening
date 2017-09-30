
'use strict';

module.exports = function (app, api) {

  var url = require('../controllers/url.controller'),
       urlMiddleWare = require('../middlewares/url.middleware');

  // Setting up the users api
  app.route(api + '/shorten-url')
    .post(urlMiddleWare.createHandler, url.create);

  app.route('/:shortUrl')
    .get(url.redirectPage)


};
