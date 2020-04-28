const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  birthday: Date,
  groupNumber: Number,
  group_id: { type: mongoose.Schema.Types.ObjectId, ref: "groups" },
  faculty_id: { type: mongoose.Schema.Types.ObjectId, ref: "faculties" },
});

module.exports = mongoose.model("students", studentSchema);
