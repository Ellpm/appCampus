import React from "react";
import { Link } from "react-router-dom";

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Link to="/">Main</Link>
        <br></br>
        <Link to="/base">Base</Link>
      </div>
    );
  }
}
