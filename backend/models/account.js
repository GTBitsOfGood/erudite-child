"use strict"
var mongoose = require('mongoose');

var accountSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  accountType: String
});

var Account = mongoose.model('Account', accountSchema);
module.exports = Account;