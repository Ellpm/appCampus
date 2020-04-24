const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  patronymic: String,
  birthday: Date,
  groupStudy: String,
});

studentSchema.statics.mostRecent = async function () {
  return this.find().sort("lastName").limit(10).exec();
};

module.exports = mongoose.model("sports", studentSchema);
