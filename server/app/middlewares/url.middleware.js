"use strict";
const generalMiddelware = require('./general.middleware'),
      _ = require('lodash');

const createHandler = (req, res, next) => {

  console.log(req.body.url)
  let urlObj = {
    orignalUrl : _.trim(req.body.url)
  };
  if(!urlObj.orignalUrl){
    return generalMiddelware.standardErrorResponse(res, 'Please provide url', 'url.middleware.create', 200)
  }
  if(generalMiddelware.validateUrl(urlObj.orignalUrl)){
    return generalMiddelware.standardErrorResponse(res, 'Please provide valid url', 'url.middleware.create', 200)
  }
  req.body.urlObj = urlObj;
  return next();
};


module.exports = {
  createHandler
};
