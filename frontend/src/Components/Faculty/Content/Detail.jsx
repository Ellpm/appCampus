import React from "react";
import Modal from "../../../modalwindows/Modal.jsx";
import { editStudentSaga } from "../../../redux/action";
import { connect } from "react-redux";

const moment = require("moment");

class Detail extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      editStudent: false,
      firstName: "",
      lastName: "",
      birthday: "",
      groupNumber: 0
    };
    this.edit = this.edit.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  componentDidMount() {
    const { firstName, lastName, birthday, groupNumber } = this.props.person;
    this.setState({
      firstName,
      lastName,
      birthday,
      groupNumber
    });
  }
  
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  
  edit() {
    this.setState({
      editStudent: true
    });
  }
  
  saveChanges(e) {
    e.preventDefault();
    this.props.editStudentSaga({
      birthday: this.state.birthday,
      faculty_id: this.props.person.faculty_id,
      firstName: this.state.firstName,
      groupNumber: this.state.groupNumber,
      group_id: this.props.person.group_id,
      lastName: this.state.lastName,
      __v: this.props.person.__v,
      _id: this.props.person._id
    });
    this.props.updateStudent({
      birthday: this.state.birthday,
      faculty_id: this.props.person.faculty_id,
      firstName: this.state.firstName,
      groupNumber: this.state.groupNumber,
      group_id: this.props.person.group_id,
      lastName: this.state.lastName,
      __v: this.props.person.__v,
      _id: this.props.person._id
    });
    this.setState({
      editStudent: false
    });
  }
  render() {
    const { firstName, lastName, birthday, groupNumber } = this.state;
    const editForm = (
      <div>
        <form action="" className="content">
          <input
            type="text"
            placeholder="Имя"
            name="firstName"
            value={firstName}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Фамилия"
            name="lastName"
            value={lastName}
            onChange={this.handleChange}
          />
          <input
            type="date"
            placeholder="Дата рождения"
            name="birthday"
            onChange={this.handleChange}
          />
          <input
            type="number"
            placeholder="Номер группы"
            name="groupNumber"
            value={groupNumber}
            onChange={this.handleChange}
          />
          <button onClick={this.saveChanges}>Сохранить</button>
        </form>
      </div>
    );
    return (
      <div>
        <Modal>
          <div className="modal">
            <div className="modal__block">
              {this.state.editStudent ? (
                editForm
              ) : (
                <div className="content">
                  <p>
                    Выбран студент: <b>{firstName + " " + lastName}</b>
                  </p>
                  <p>
                    Дата рождения:{" "}
                    <b>{moment(birthday).format("DD.MM.YYYY")}</b>
                  </p>
​
                  <p>
                    Номер группы: <b>{groupNumber}</b>
                  </p>
                </div>
              )}
​
              <div>
                <button onClick={this.edit} className="button__hover">
                  Редактировать
                </button>{" "}
                <button
                  onClick={this.props.modalClose}
                  className="button__hover"
                >
                  Удалить
                </button>
                <button
                  onClick={this.props.modalClose}
                  className="button__hover"
                >
                  Закрыть
                </button>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  editStudentSaga
};
export default connect(mapStateToProps, mapDispatchToProps)(Detail);
