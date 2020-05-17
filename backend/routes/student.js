const express = require("express");
const router = express.Router();
const Group = require("../models/group");
const Student = require("../models/student");

router.post("/addStudent", async function (req, res) {
  const students = await Student.find();
  console.log(req.body);

  const newStudent = await Student.create({
    firstName: req.body.name,
    lastName: "String",
    birthday: new Date(),
    group_id: students[0].group_id,
  });
  res.json({ newStudent });
});

router.put("/updateStudent", async function (req, res) {
  const group = await Group.findOne({
    faculty_id: req.body.student.faculty_id,
    groupNumber: req.body.student.groupNumber,
  });
  await Student.findByIdAndUpdate(
    req.body.student._id,
    {
      firstName: req.body.student.firstName,
      lastName: req.body.student.lastName,
      birthday: req.body.student.birthday,
      groupNumber: group.groupNumber,
      group_id: group._id,
    },
    function (err, updatedStudent) {
      if (err) return res.json({ error: "404" });
      res.json({ updatedStudent });
    }
  );
});

router.delete("/deleteStudent", async function (req, res) {
  await Student.findByIdAndRemove(req.body.student._id, function (
    err,
    deletedStudent
  ) {
    if (err) return res.json({ error: "404" });
    res.json({ deletedStudent });
  });
});

module.exports = router;
