"use strict";
const mongoose = require('mongoose'),
  _ = require('lodash'),
  UrlModel = mongoose.model('Url'),
  generalHelpers = require('./general.helper');

const createUrl = (input, host) => {

  const newUrl = input.urlObj;
  return UrlModel.create(newUrl).then((url) => {
    return host +'/'+ url.shortUrl;
  })
    .catch(generalHelpers.catchException)

};

const redirectPage = (input) => {

    const shortUrl = _.trim(input.shortUrl),
          currentDate = new Date();

    return UrlModel.findOneAndUpdate({shortUrl : shortUrl, expiresAt :  {$gt: currentDate}}, {$inc: {count: 1}}).then((obj) => {
      if(!obj){
        return generalHelpers.rejectPromise('Url not found')
      }
      return obj.orignalUrl
    }).catch(generalHelpers.catchException)

};


module.exports = {
  createUrl,
  redirectPage
};
