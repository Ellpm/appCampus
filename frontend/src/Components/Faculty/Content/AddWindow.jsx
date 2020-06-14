import React from "react";
import Modal from "../../../modalwindows/Modal.jsx";
import {
  editStudentSaga,
  addGroupSaga,
  addGroup,
  getBase,
  getBaseSaga,
  addStudent,
  addStudentSaga,
} from "../../../redux/action";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CancelIcon from "@material-ui/icons/Cancel";
import SaveIcon from "@material-ui/icons/Save";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import MenuItem from "@material-ui/core/MenuItem";

class AddWindow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editStudent: false,
      firstName: "",
      lastName: "",
      birthday: "",
      groupNumber: 0,
    };
    this.edit = this.edit.bind(this);
    this.addStudent = this.addStudent.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {}

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  edit() {
    this.setState({
      editStudent: true,
    });
  }
  addStudent(e) {
    e.preventDefault();
    if (this.props.add === "student") {
      this.props.addStudentSaga({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        birthday: this.state.birthday,
        faculty_id: this.props.faculty,
        groupNumber: this.state.groupNumber,
      });
      console.log("redux" + this.props.student);
    } else {
      this.props.addGroupSaga({
        groupNumber: this.state.groupNumber,
        faculty_id: this.props.faculty,
      });
    }
    this.props.modalClose();

    this.setState({
      editStudent: false,
    });
  }

  // saveChanges(e) {
  //   e.preventDefault();
  //   this.props.editStudentSaga({
  //     firstName: this.state.firstName,
  //     lastName: this.state.lastName,
  //     birthday: this.state.birthday,
  //     faculty_id: this.props.person.faculty_id,
  //     groupNumber: this.state.groupNumber,
  //     group_id: this.props.person.group_id,
  //     __v: this.props.person.__v,
  //     _id: this.props.person._id,
  //   });
  //   this.props.updateStudent({
  //     firstName: this.state.firstName,
  //     lastName: this.state.lastName,
  //     birthday: this.state.birthday,
  //     faculty_id: this.props.person.faculty_id,
  //     groupNumber: this.state.groupNumber,
  //     group_id: this.props.person.group_id,
  //     __v: this.props.person.__v,
  //     _id: this.props.person._id,
  //   });
  //   this.setState({
  //     editStudent: false,
  //   });
  // }
  render() {
    const buttons = (
      <ButtonGroup
        variant="text"
        color="primary"
        aria-label="text primary button group"
      >
        <Button color="primary" onClick={this.addStudent}>
          <SaveIcon />
          Сохранить
        </Button>
        <Button color="primary" onClick={this.props.modalClose}>
          <CancelIcon />
          Отмена
        </Button>
      </ButtonGroup>
    );
    const groupForm = (
      <div>
        <form action="" className="content">
          <TextField
            type="text"
            placeholder="Название группы"
            name="groupNumber"
            onChange={this.handleChange}
            color="primary"
          />
          {buttons}
        </form>
      </div>
    );
    const studentForm = (
      <div>
        <form action="" className="content">
          <TextField
            type="text"
            placeholder="Имя"
            name="firstName"
            onChange={this.handleChange}
          />
          <TextField
            type="text"
            placeholder="Фамилия"
            name="lastName"
            onChange={this.handleChange}
          />
          <TextField
            type="date"
            label="Birthday"
            placeholder="Дата рождения"
            name="birthday"
            onChange={this.handleChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            select
            label="Выберите номер группы"
            placeholder="Номер группы"
            name="groupNumber"
            onChange={this.handleChange}
    
          >
            {this.props.data.groups
              .filter((group) => group.faculty_id === this.props.faculty)
              .map((option) => (
                <MenuItem key={option.groupNumber} value={option.groupNumber}>
                  {option.groupNumber}
                </MenuItem>
              ))}
          </TextField>
          {buttons}
        </form>
      </div>
    );
    return (
      <div>
        <Modal>
          <div className="modal">
            <div className="modal__block">
              {/* <div>
                <Button
                  onClick={this.props.modalClose}
                  className="button__hover"
                >
                  Закрыть
                </Button>
              </div> */}
              {this.props.add === "student" ? studentForm : groupForm}​
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.data.data,
});

const mapDispatchToProps = {
  editStudentSaga,
  addStudentSaga,
  getBaseSaga,
  addGroupSaga,
};
export default connect(mapStateToProps, mapDispatchToProps)(AddWindow);
