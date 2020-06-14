import React from "react";
import { connect } from "react-redux";
import DetailRowView from "./Content/Detail";
import TableSearch from "./Content/SearchHook";
import Tab from "./Content/Tab";
import _ from "lodash";
import AddWindow from "./Content/AddWindow.jsx";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import "./Faculties.css"
import ShowGroup from "./Content/ShowGroup"

class TableView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groupChosen: 0,
      search: "",
      sort: "asc", // 'desc'
      sortField: "_id",
      row: null,
      add: null,
      dataFaculty: this.props.data.students.filter(
        (student) => student.faculty_id === this.props.id
      ),
    };
    this.modalClose = this.modalClose.bind(this);
    this.updateStudent = this.updateStudent.bind(this);
  }
  groupChose = (newValue) => {
    this.setState({
      groupChosen: newValue,
    });
  }
  fetchData() {
    this.setState({
      isLoading: false,
      dataFaculty: _.orderBy(
        this.props.data.students,
        this.state.sortField,
        this.state.sort
      ),
    });
  }

  onSort = (sortField) => {
    const cloneData = this.state.dataFaculty.concat();
    const sort = this.state.sort === "asc" ? "desc" : "asc";
    const dataFaculty = _.orderBy(cloneData, sortField, sort);
    this.setState({ dataFaculty, sort, sortField });
  };

  onRowSelect = (row) => this.setState({ row });
  
  findFaculty(id) {
    const faculty = this.props.data.faculties.find(
      (faculty) => faculty._id === id
    );
    return faculty.faculty_name;
  }
  searchHandler = (search) => {
    this.setState({ search });
  };
  handleButton = (add) => {
    this.setState({ add });
  };

  getFilteredData() {
    const { dataFaculty, search, groupChosen } = this.state;
    if (!search && !groupChosen) {
      return dataFaculty;
    }

    let result = dataFaculty.filter((item) => {
      return (
        item["firstName"].toLowerCase().includes(search.toLowerCase()) ||
        item["lastName"].toLowerCase().includes(search.toLowerCase())
      );
    });
    if (groupChosen) {
      result = result.filter((student)=>(student.groupNumber===groupChosen))
    }
      if (!result.length) {
        result = this.state.dataFaculty;
      }
    return result;
  }

  modalClose() {
    this.setState({
      row: null,
      add: null,
    });
  }

  updateStudent(obj) {
    this.state.dataFaculty.forEach((item, index) => {
      if (item._id === obj._id) {
        const data = JSON.parse(JSON.stringify(this.state.dataFaculty));
        data[index] = obj;
        this.setState({
          data,
        });
      }
    });
  }
  addStudent (obj) {
    this.setState({dataFaculty: this.state.dataFaculty.push(obj)})
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
        <br></br>
        <Typography variant="h5"> Показать по группам</Typography>
        {/* <TextField
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
          </TextField> */}
        <ShowGroup
          groupChose={this.groupChose}
          faculty={this.props.id}
          groups={this.props.data.groups}
        />
        <div>
          <ButtonGroup
            variant="text"
            color="primary"
            aria-label="text primary button group"
          >
            <Button onClick={() => this.handleButton("student")}>
              Добавить студента
            </Button>
            <Button onClick={() => this.handleButton("group")}>
              Добавить группу
            </Button>
          </ButtonGroup>
        </div>
        {this.state.add ? (
          <AddWindow
            add={this.state.add}
            faculty={this.props.id}
            modalClose={this.modalClose}
            updateStudent={this.updateStudent}
          />
        ) : null}

        <Tab
          tableData={filteredData}
          onSort={this.onSort}
          sort={this.state.sort}
          sortField={this.state.sortField}
          onRowSelect={this.onRowSelect}
          tableHead={["firstName", "lastName", "birthday", "groupNumber"]}
          tableHeaderColor="primary"
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.data.data,
});

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(TableView);
