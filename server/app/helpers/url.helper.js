"use strict";
const mongoose = require('mongoose'),
  _ = require('lodash'),
  async = require('async'),
  UrlModel = mongoose.model('Url'),
  HashMap = require('hashmap'),
  generalHelpers = require('./general.helper');

let map = new HashMap();

const createUrl = (input, host) => {

  const newUrl = input.urlObj;
  return UrlModel.create(newUrl).then((url) => {
    map.set(url.shortUrl, url);
    return host + '/' + url.shortUrl;
  })
    .catch(generalHelpers.catchException)

};

const redirectPage = (input) => {

  const shortUrl = _.trim(input.shortUrl),
    currentDate = new Date();

  const fetchedItem = map.get(shortUrl);

  UrlModel.findOneAndUpdate({
    shortUrl: shortUrl,
    expiresAt: {$gt: currentDate}
  }, {$inc: {count: 1}}).catch(generalHelpers.catchException);


  if (fetchedItem && fetchedItem.expiresAt > currentDate) {
    return Promise.resolve(fetchedItem.orignalUrl)
  } else {
    return generalHelpers.rejectPromise('Url not found')
  }

};

const getLinks = (input) => {

  let limit = parseInt(input.limit, 10) || 10,
    offset = parseInt(input.offset, 10) || 0,
    orderBy = input.orderBy || -1,
    _self = {rows: [], page: {}};


  return UrlModel.find({}).limit(limit).skip(offset).sort({count: orderBy})
    .then((links) => {
      _self.rows = links;
      return UrlModel.count()
    }).then((count) => {
      _self.page.count = count;
      return _self;
    })
    .catch(generalHelpers.catchException)
};

(() => {

  UrlModel.find({
    expiresAt: {$gt: new Date()}
  }).then((links) => {

    async.eachLimit(links, 500, function (item) {
      map.set(item.shortUrl, item);
    })

  }).catch(generalHelpers.catchException)

})();


module.exports = {
  createUrl,
  redirectPage,
  getLinks
};
