const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  birthday: Date,
  group_id: { type: mongoose.Schema.Types.ObjectId, ref: "groups" },
});

module.exports = mongoose.model("students", studentSchema);
