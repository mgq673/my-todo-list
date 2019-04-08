const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let List = new Schema({
  title: String,
  userId: String
});

module.exports = mongoose.model('List', List);