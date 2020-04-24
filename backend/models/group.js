const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
  faculty_name: String,
  groupNumber: Number,
});


module.exports = mongoose.model("groups", groupSchema);
