const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

userSchema.statics.createUser = async function(email, password) {
  return User.create({
    email: email,
    password: password,
  });
};

module.exports = mongoose.model("users", userSchema);;
