import React from "react";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./Components/Home";
import Base from "./Components/Base";
import { connect } from "react-redux";
import {
  getBase,
  getBaseSaga,
  addStudent,
  addStudentSaga,
} from "./redux/action";
import preloader from "./assets/images/preloader.svg";
import TableView from "./Components/Faculty/Faculties";

import "./App.css"

class App extends React.Component {
  async componentDidMount() {
    this.props.getBaseSaga();

    // let dataFetch = getData()
    // this.props.getBase(dataFetch)
  }
  render() {
    if (this.props.isFetching) {
      return (
        <>
          <div className="body">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/base">
                <Base />
              </Route>
              <Route
                path="/faculty/:id"
                render={(props) => (
                  <TableView
                    id={props.match.params.id}                    
                  />
                )}
              />
            </Switch>
          </div>
        </>
      );
    } else {
      return <img scc={preloader} />;
    }
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
export default connect(mapStateToProps, mapDispatchToProps)(App);
