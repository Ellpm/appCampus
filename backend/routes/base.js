const express = require("express");
const router = express.Router();
const Faculty = require("../models/faculty");
const Group = require("../models/group");
const Student = require("../models/student");

async function getData() {
  const faculties = await Faculty.find()
   
  const groups = await Group.find()
  const students = await Student.find()
  return {faculties,groups,students}
}




router.get("/getData", async function (req, res) {
  res.json({ data: await getData() });
});

  //тестовый роут
router.post('/addStudent', async function( req,res) {
  const students = await Student.find()
  console.log(req.body);

  const newStudent = await Student.create({
    firstName: req.body.name,
    lastName: "String",
    birthday: new Date(),
    group_id: students[0].group_id,
  });
  res.json({newStudent})
  
})




module.exports = router;
