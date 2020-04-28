import React from "react";
const moment = require("moment");

export default class Detail extends React.Component {
  render() {
    return (
      <div>
        <p>
          Выбран студент{" "}
          <b>
            {this.props.person.firstName + " " + this.props.person.lastName}
          </b>
        </p>
        <p>
          Дата рождения{" "}
          <b>{moment(this.props.person.birthday).format("DD.MM.YYYY")}</b>
        </p>

        <p>
          Номер группы <b>{this.props.person.groupNumber}</b>
        </p>
      </div>
    );
  }
}
