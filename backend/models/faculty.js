const mongoose = require("mongoose");

const facultySchema = new mongoose.Schema({
  faculty_name: String,
});

module.exports = mongoose.model("faculties", facultySchema);
