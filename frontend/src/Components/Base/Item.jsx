import React from 'react'
import { connect } from "react-redux";
import { Link } from "react-router-dom";
export default class Item extends React.Component {

  render() {
    return (
      <>
        <Link to={`/faculty/${this.props.id}`}>{this.props.facultyName}</Link>
        <br/>
      </>
    );
  }
}
