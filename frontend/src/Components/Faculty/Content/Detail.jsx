import React from "react";

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
          Дата рождения <b>{this.props.person.birthday}</b>
        </p>

        <p>
          Номер группы <b>{this.props.person.groupNumber}</b>
        </p>
      </div>
    );
  }
}
