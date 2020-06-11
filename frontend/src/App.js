import React from "react";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Base from "./Components/Base/Base";
import { connect } from "react-redux";
import {
  getBase,
  getBaseSaga,
  addStudent,
  addStudentSaga,
} from "./redux/action";
import preloader from "./assets/images/preloader.svg";
import Faculties from "./Components/Faculty/Faculties";
import "./App.css"

class App extends React.Component {
state = {
  isModalOpen: false
}
toggleModal = () => {
this.setState(state => ({isModalOpen: !state.isModalOpen}))
}
  async componentDidMount() {
    this.props.getBaseSaga();
  }
  render() {
    if (this.props.isFetching) {
      return (        
        <>
        <Header />
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
                  <Faculties
                    id={props.match.params.id}                    
                  />
                )}
              />
            </Switch>
          </div>
        </>
      );
    } else {
      return <img src={preloader} />;
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
