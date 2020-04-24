const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
  faculty_name: String,
  groupName: String,
});


module.exports = mongoose.model("groups", groupSchema);
