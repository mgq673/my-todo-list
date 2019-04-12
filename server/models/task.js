const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const TaskStatus = require("./TaskStatus");
let Task = new Schema({
  title: String,
  status: {
    type: String,
    enum: [TaskStatus.DONE, TaskStatus.NORMAL, TaskStatus.REMOVED]
  },
  listId: String
});

module.exports = mongoose.model("Task", Task);
