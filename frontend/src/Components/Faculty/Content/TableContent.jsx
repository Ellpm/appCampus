import React from 'react'

const moment = require("moment");

export default class TableContent extends React.Component {
  render() {
    console.log(this.props.data);
    

    return (
      <table className="table" style={{ cursor: "pointer" }}>
        <thead>
          <tr>
            <th onClick={this.props.onSort.bind(null, "firstName")}>
              Имя {this.props.sortField === "firstName"}
            </th>
            <th onClick={this.props.onSort.bind(null, "lastName")}>
              Фамилия {this.props.sortField === "lastName"}
            </th>
            <th onClick={this.props.onSort.bind(null, "birthday")}>
              Дата рождения {this.props.sortField === "birthday"}
            </th>
            <th onClick={this.props.onSort.bind(null, "groupNumber")}>
              Номер группы {this.props.sortField === "groupNumber"}
            </th>
          </tr>
        </thead>
        <tbody>
          {this.props.data.map((item) => (
            
            
            <tr
              key={item._id + item.groupNumber}
              onClick={this.props.onRowSelect.bind(null, item)}
            >
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>
                {moment(item.birthday).format("DD.MM.YYYY")}
              </td>
              <td>{item.groupNumber}</td>
            </tr>
          )
          )}
        </tbody>
      </table>
    );
  }
}



