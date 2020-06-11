import React from "react";
import { connect } from "react-redux";
import TableContent from "./Content/TableContent";
import DetailRowView from "./Content/Detail";
import TableSearch from "./Content/SearchHook";
import Tab from "./Content/Tab"
import _ from "lodash";


class TableView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      sort: "asc", // 'desc'
      sortField: "_id",
      row: null,
      data: this.props.data.students.filter(
        student => student.faculty_id === this.props.id
      )
    };
    this.modalClose = this.modalClose.bind(this);
    this.updateStudent = this.updateStudent.bind(this);
  }
  fetchData() {
    this.setState({
      isLoading: false,
      data: _.orderBy(
        this.props.data.students,
        this.state.sortField,
        this.state.sort
      )
    });
  }
  onSort = sortField => {    
    const cloneData = this.state.data.concat();
    const sort = this.state.sort === "asc" ? "desc" : "asc";
    const data = _.orderBy(cloneData, sortField, sort);
    this.setState({ data, sort, sortField });
  };
  
  onRowSelect = row => this.setState({ row });
  findFaculty(id) {
    const faculty = this.props.data.faculties.find(
      faculty => faculty._id === id
    );
    return faculty.faculty_name;
  }
  searchHandler = search => {
    this.setState({ search });
  };
  
  getFilteredData() {
    const { data, search } = this.state;
    if (!search) {
      return data;
    }
    let result = data.filter(item => {
      return (
        item["firstName"].toLowerCase().includes(search.toLowerCase()) ||
        item["lastName"].toLowerCase().includes(search.toLowerCase())
      );
    });
    if (!result.length) {
      result = this.state.data;
    }
    return result;
  }
  
  modalClose() {
    this.setState({
      row: null
    });
  }
  
  updateStudent(obj) {
    this.state.data.forEach((item, index) => {
      if (item._id === obj._id) {
        const data = JSON.parse(JSON.stringify(this.state.data));
        data[index] = obj;
        this.setState({
          data
        });
      }
    });
  }
  render() {
    const filteredData = this.getFilteredData();
    
    return (
      <>
        <h1>{this.findFaculty(this.props.id)}</h1>
        <div>
          {this.state.row ? (
            <DetailRowView
              person={this.state.row}
              modalClose={this.modalClose}
              updateStudent={this.updateStudent}
            />
          ) : null}
        </div>
        <TableSearch onSearch={this.searchHandler} />
        <Tab
          tableData={filteredData.slice(0, 10)}
          onSort={this.onSort}
          sort={this.state.sort}
          sortField={this.state.sortField}
          onRowSelect={this.onRowSelect}
          tableHead={["firstName", "lastName", "birthday", "groupNumber"]}
          tableHeaderColor="success"
        />
      </>
    );
  }
}

const mapStateToProps = state => ({
  data: state.data.data
});

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(TableView);