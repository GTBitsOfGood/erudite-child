"use strict"
var mongoose = require('mongoose');

var peopleSchema = mongoose.Schema({
  title: String,
  description: String,
  images: String,
  isSponsor: Boolean
});

var People = mongoose.model('People', peopleSchema);
module.exports = People;