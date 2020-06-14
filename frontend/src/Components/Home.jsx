import React, { Component } from "react";
import { getData } from "../fetches/getData";
import { connect } from "react-redux";
import {
  getBase,
  getBaseSaga,
  addStudent,
  addStudentSaga,
} from "../redux/action";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }
  
  writeName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  addStudent = () => {
    this.props.addStudentSaga(this.state.name);
  };

  render() {

    return (
        <>
        Home
         {/* <div>
          <input type="text" onChange={this.writeName} />
          <button onClick={this.addStudent}>Button</button>
        </div> */}
        </>   
    )
 
}
}
const mapStateToProps = (state) => ({
  data: state.data.data,
  isFetching: state.isFetching,
});

const mapDispatchToProps = {
  getBase,
  getBaseSaga,
  addStudent,
  addStudentSaga,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
