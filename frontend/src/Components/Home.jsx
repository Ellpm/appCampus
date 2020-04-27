import React, { Component } from "react";
import { getData } from "../fetches/getData";
import { connect } from "react-redux";
import {
  getBase,
  getBaseSaga,
  addStudent,
  addStudentSaga,
} from "../redux/action";
import ListFaculties from "./Faculty/ListFaculties";
import Table1 from "./Table/Table1";
import Navigation from "./Navigation";
import preloader from '../assets/images/preloader.svg'
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }
  async componentDidMount() {
    this.props.getBaseSaga();

    // let dataFetch = getData()
    // this.props.getBase(dataFetch)
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
    // console.log(this.props);

    // const list = this.props.data
    // const items = list.map(function(child) {
    // return (<li>{child}</li>)
    // })
if (this.props.isFetching) {
    return (   
        <>
        <Navigation />
         <div>
          <input type="text" onChange={this.writeName} />
          <button onClick={this.addStudent}>Button</button>
        </div>
        </>   
    );
  } else return (
    <img scc={preloader} />)
  
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
