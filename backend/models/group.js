const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
  faculty_id: { type: mongoose.Schema.Types.ObjectId, ref: "faculties" },
  faculty_name: String,
  groupNumber: Number,
});


module.exports = mongoose.model("groups", groupSchema);
