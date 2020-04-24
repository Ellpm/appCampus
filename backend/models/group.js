const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
  facultyName: String,
  groupName: String,
  students: Array,
});


module.exports = mongoose.model("groups", groupSchema);
