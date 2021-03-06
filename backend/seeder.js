const faker = require("faker/locale/ru");
const mongoose = require("mongoose");
mongoose.pluralize(null);
const moment = require("moment");

const Student = require("./models/student");
const Group = require("./models/group");
const Faculty = require("./models/faculty");
const faculties = require("./src/faculty");

async function createBase() {
  await mongoose.connect("mongodb://localhost:27017/campus", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.connection.on(
    "error",
    console.error.bind(console, "Ошибка соединения с MongoDB:")
  );
  for (let indexFaculty = 0; indexFaculty < faculties.length; indexFaculty++) {
    const curentFaculty = await Faculty.create({
      faculty_name: faculties[indexFaculty],
    });
    for (let indexGroup = 1; indexGroup < 6; indexGroup++) {
      const curentGroup = await Group.create({
        faculty_id: curentFaculty._id,
        faculty_name: curentFaculty.faculty_name,
        groupNumber: indexGroup,
      });

      for (
        let indexStudent = 0;
        indexStudent < Math.round(Math.random() * 10) + 20;
        indexStudent++
      ) {
        const nameStudent = await faker.name.findName();
        const spliteName = nameStudent.split(" ");

        await Student.create({
          firstName: spliteName[0],
          lastName: spliteName[1],
          birthday: moment(
            faker.date.past() - 31536000000 * (17 + indexGroup)
          ).format("DD.MM.YYYY"),
          groupNumber: curentGroup.groupNumber,
          group_id: curentGroup._id,
          faculty_id: curentFaculty._id,
        });
      }
    }
  }
  await mongoose.disconnect();
}

createBase();
