import React from 'react'
import { connect } from "react-redux";

export class Base extends React.Component {

  render() {
    
    const {faculties, groups, students} = this.props.data
    
    console.log(this.props.data);
    console.log(faculties);

    
    return (
      <div>
        Base
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  data: state.data.data,
});

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Base);

