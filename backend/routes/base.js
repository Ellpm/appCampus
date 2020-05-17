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

router.put('/updateStudent', async function (req, res) {
  const group = await Group.findOne({faculty_id:req.body.student.faculty_id, groupNumber: req.body.student.groupNumber})
  await Student.findByIdAndUpdate(
    req.body.student._id,
    {
      firstName: req.body.student.name,
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
})

router.delete('/deleteStudent', async function (req, res){
  await Student.findByIdAndRemove(req.body.student._id, function(err, deletedStudent) {
    if (err) return res.json({error: "404"})
    res.json({deletedStudent})
  })
})


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
