const mongoose = require('mongoose');

mongoose.connect('mongodb://27017/tutorialTest.users');

const Schema = mongoose.Schema;

// ObjectID
// how to pull info from front end register page to HERE:
// hash password
// how to push into backend

// parse email function (id @ gmail.com)

const userSchema = new Schema({
   _id: ObjectID,
   first_name: { type: String },
   last_name: { type: String },
   email: { type: String },
   isAdmin: { type: Boolean },
   password: { type: String },
   sponsored_children: { type: String, default : [""] }
});
