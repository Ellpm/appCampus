import React from "react";
import MaterialTable from "material-table";
import { connect } from "react-redux";

export class NewT extends React.Component {
  getdataTable(array) {
    const ar = [];
    array.map((item) => {
      let newItem = Object.assign({}, item);

      newItem["studentsQuantity"] = this.getQuantity(
        item._id,
        this.props.data.students,
        "faculty_id"
      );
      newItem["groupQuantity"] = this.getQuantity(
        item._id,
        this.props.data.groups,
        "faculty_id"
      );
      ar.push(newItem);
    });
    return ar;
  }
  handleClick(id) {
    window.location.assign(`http://localhost:3000/faculty/${id}`);
  }

  getQuantity(id, array, keyName) {
    const newarr = array.filter(function (item) {
      return item[keyName] === id;
    });

    return newarr.length;
  }

  render() {
    const { faculties, groups, students } = this.props.data;
    this.getdataTable(faculties);
    return (
      <div style={{ width: "70%" }}>
        <MaterialTable
          columns={[
            {
              title: "Название факультета",
              field: "faculty_name",
              cellStyle: {
                backgroundColor: "#039be5",
                color: "#FFF",
              },
              headerStyle: {
                backgroundColor: "#039be5",
              },
            },
            {
              title: "Количество учащихся",
              field: "studentsQuantity",
              type: "numeric",
            },
            {
              title: "Количество групп",
              field: "groupQuantity",
              type: "numeric",
            },
          ]}
          data={this.getdataTable(faculties)}
          options={{
            headerStyle: {
              backgroundColor: "#01579b",
              color: "#FFF",
            },
          }}
          title="База данных Университета"
          actions={[
            {
              icon: "reorder",
              tooltip: "Войти",
              onClick: (event, rowData) => {
                this.handleClick(rowData._id);
              },
            },
          ]}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.data.data,
});

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(NewT);
