const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let Task = new Schema({
  title: String,
  status:{ type:String, enum:['Done','Removed','Normal']},
  listId: String
});

module.exports = mongoose.model('Task', Task);