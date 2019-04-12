const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const TaskModel = require("./task");

let List = new Schema({
  title: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  tasks: [TaskModel.schema]
});

module.exports = mongoose.model("List", List);
