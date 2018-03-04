const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/my_database');

const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

const User = new Schema({
 author: ObjectId,
 title: String,
 body: String,
 date: Date
});
