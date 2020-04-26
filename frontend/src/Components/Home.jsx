import React, { Component } from "react";
import { getData } from "../fetches/getData";
import { connect } from 'react-redux';
import {getBase, getBaseSaga, addStudent, addStudentSaga} from '../redux/action'





 class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }
  componentDidMount() {
this.props.getBaseSaga();


    // let dataFetch = getData()
    // this.props.getBase(dataFetch)
  }
writeName = e => {
  this.setState({
    name:e.target.value
  })
}

addStudent = ()=> {
this.props.addStudentSaga(this.state.name);
}

  render() 
  {
    return (
    <div>
      <input type='text' onChange={this.writeName}/>
      <button onClick={this.addStudent}>Button</button>
    </div>)
}
}
const mapStateToProps = (state) => ({
  
});
const mapDispatchToProps = {
getBase,
getBaseSaga,
addStudent,
addStudentSaga
};
export default 
  connect(mapStateToProps, mapDispatchToProps)(Home);