import React, { Component } from "react";
import Nav from "Nav";
import MatchViewWrapper from "MatchViewWrapper";

import layoutData from 'layoutData';

class Main extends Component {
  render() {
    return (
      <div className="mainContainer">
        <Nav data={layoutData} />
        <MatchViewWrapper />
      </div>
    );
  }
}

export default Main;
