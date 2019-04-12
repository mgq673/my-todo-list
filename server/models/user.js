const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let User = new Schema({
  name: String,
  lists: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "List"
    }
  ]
});

module.exports = mongoose.model("User", User);
