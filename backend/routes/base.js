const express = require("express");
const router = express.Router();
const Faculty = require("../models/faculty");
const Group = require("../models/group");
const Student = require("../models/student");

async function getData() {
  const faculties = await Faculty.find();
  
  const groups = await Group.find();
  const students = await Student.find();
  return { faculties, groups, students };
}

router.get("/getData", async function (req, res) {
  res.json({ data: await getData() });
});










module.exports = router;
