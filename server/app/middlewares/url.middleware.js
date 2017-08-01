"use strict";
const generalMiddelware = require('./general.middleware'),
  _ = require('lodash'),
  shortid = require('shortid');

const createHandler = (req, res, next) => {

  const urlObj = {
    orignalUrl: _.trim(req.body.url),
    expiresAt: req.body.expiresAt || new Date(+new Date() + 7 * 24 * 60 * 60 * 1000),
    shortUrl: shortid.generate()
  };
  if (!urlObj.orignalUrl) {
    return generalMiddelware.standardErrorResponse(res, 'Please provide url', 'url.middleware.create', 200)
  }
  if (generalMiddelware.validateUrl(urlObj.orignalUrl)) {
    return generalMiddelware.standardErrorResponse(res, 'Please provide valid url', 'url.middleware.create', 200)
  }
  req.body.urlObj = urlObj;
  return next();
};


module.exports = {
  createHandler
};
