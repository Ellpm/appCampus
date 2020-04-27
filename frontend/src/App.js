import React from "react";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from './Components/Home'
import Base from './Components/Base'


import "./App.css";

class App extends React.Component {
  render() {
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
          </Switch>
        </div>
      </>
    );
  }
}

export default App;
