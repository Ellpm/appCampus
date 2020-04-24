const faker = require("faker/locale/ru");
const mongoose = require("mongoose");
mongoose.pluralize(null);

const Student = require("./models/student");
const Group = require("./models/group");
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
    for (let indexGroup = 1; indexGroup < 6; indexGroup++) {
      let curentGroup = await Group.create({
        faculty_name: faculties[indexFaculty],
        groupName: String(indexGroup),
      });

      for (
        let indexStudent = 1;
        indexStudent < Math.round(Math.random() * 10) + 20;
        indexStudent++
      ) {
        const nameStudent = await faker.name.findName()
        const spliteName = nameStudent.split(' ')



        await Student.create({
          firstName: spliteName[0],
          lastName: spliteName[1],
          birthday: faker.date.past() - 630720000000,
          group_id: curentGroup._id,
        });
      }
    }
  }
  await mongoose.disconnect();
}

createBase();
