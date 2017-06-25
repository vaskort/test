import React, { Component } from "react";
import Nav from "Nav";

import layoutData from 'layoutData';

class Main extends Component {
  render() {
    return (
      <div className="mainContainer">
        <Nav data={layoutData} />
      </div>
    );
  }
}

export default Main;
