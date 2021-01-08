import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import StarShipList from "../StarShipList/StarShipList";
import StarShipPage from "../StarShipPage/StarShipPage";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <Route exact path="/" render={() => <StarShipList />} />
        <Route
          exact
          path="/starship"
          render={({ location }) => <StarShipPage location={location} />}
        />
      </>
    );
  }
}

export default App;


