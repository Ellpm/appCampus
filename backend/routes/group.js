const express = require("express");
const router = express.Router();
const Group = require("../models/group");
const Student = require("../models/student");

router.post("/addGroup", async function (req, res) {
  const newGroup = await Group.create({
    faculty_id: req.body.faculty_id,
    faculty_name: req.body.faculty_name,
    groupNumber: req.body.groupNumber,
  });
  res.json({ newGroup });
});

router.put("/updateGroup", async function (req, res) {
  await Group.findByIdAndUpdate(
    req.body.group._id,
    {
      faculty_id: req.body.faculty_id,
      faculty_name: req.body.faculty_name,
      groupNumber: req.body.groupNumber
    },
    async function (err, updatedGroup) {
      if (err) return res.json({ error: "404" });
      await Student.updateMany({group_id:updatedGroup._id}, {groupNumber: updatedGroup.groupNumber})
      res.json({ updatedGroup });
    }
  );
});

router.delete("/deleteGroup", async function (req, res) {
  await Group.findByIdAndRemove(req.body.group._id, async function (
    err,
    deletedGroup
  ) {
    if (err) return res.json({ error: "404" });
    await Student.deleteMany({group_id: deletedGroup._id}).then(next)
    res.json({ deletedGroup });
  });
});

module.exports = router;
