/**
 * Created by Hassan on 4/24/2017.
 */
'use strict';

const urlHelper = require('../helpers/url.helper'),
  StandardError = require('standard-error'),
  path = require('path'),
  generalController = require('./general.controller');


const create = (req, res) => {
  return urlHelper.createUrl(req.body, req.protocol + '://' + req.get('host'))
    .then((data) => {
      return generalController.successResponse(res, "Url created successfully!", data, "url.controller.create");
    }).catch(StandardError, (err) => {
      return generalController.errorResponse(res, err, null, "url.controller.create", 403);
    }).catch((err) => {
      return generalController.errorResponse(res, err, "Could not create url!", "url.controller.create", 403);
    });

}

const redirectPage = (req, res) => {
  return urlHelper.redirectPage(req.params)
    .then((data) => {
      return res.redirect(data);
    }).catch(StandardError, (err) => {
      return res.render(path.join(__dirname, '../../../dist/index.html'));
    }).catch((err) => {
      return res.sendFile(path.join(__dirname, '../../../dist/index.html'));
    });

};
const getLinks = (req, res) => {
  return urlHelper.getLinks(req.params)
    .then((data) => {
      return generalController.successResponse(res, "Links fetched successfully!", data, "url.controller.getLinks");
    }).catch(StandardError, (err) => {
      return generalController.errorResponse(res, err, null, "url.controller.getLinks", 403);
    }).catch((err) => {
      return generalController.errorResponse(res, err, "Could not create url!", "url.controller.getLinks", 403);
    });

};

module.exports = {
  create,
  redirectPage,
  getLinks
};
