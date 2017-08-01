'use strict';
const mongoose = require('mongoose'),
  shortid = require('shortid'),
  Schema = mongoose.Schema,
  urlSchema = new Schema({
    orignalUrl: {type: String, required: true},
    createdAt: {type: Date, default: new Date()},
    shortUrl: {type: String, unique: true, required: true},
    expiresAt: {type: Date, default: new Date(+new Date() + 7 * 24 * 60 * 60 * 1000)},
    count: {type: Number, default: 0}
  });


module.exports = mongoose.model('Url', urlSchema);
