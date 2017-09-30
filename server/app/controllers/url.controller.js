/**
 * Created by Hassan on 4/24/2017.
 */
'use strict';

const urlHelper = require('../helpers/url.helper'),
  StandardError = require('standard-error'),
  path = require('path'),
  generalController = require('./general.controller');


const create = (req, res) => {
  return urlHelper.createUrl(req.body, req.get('host'))
    .then((data) => {
      return generalController.successResponse(res, "Url created successfully!", data, "url.controller.create");
    }).catch(StandardError, (err) => {
      generalController.errorResponse(res, err, null, "url.controller.create", 500);
    }).catch((err) => {
      return generalController.errorResponse(res, err, "Could not create url!", "url.controller.create", 500);
    });

}

const redirectPage = (req, res) => {
  return urlHelper.redirectPage(req.params)
    .then((data) => {
      return res.redirect(data);
    }).catch(StandardError, (err) => {
      return res.sendFile(path.join(__dirname, '../../../dist/index.html'));
    }).catch((err) => {
      return res.sendFile(path.join(__dirname, '../../../dist/index.html'));
    });

}

module.exports = {
  create,
  redirectPage
}
