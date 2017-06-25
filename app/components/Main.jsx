import React, { Component } from "react";
import Nav from "Nav";
import MatchViewWrapper from "MatchViewWrapper";
import Footer from "Footer";

import layoutData from 'layoutData';

class Main extends Component {
  render() {
    return (
      <div>
        <div className="mainContainer">
          <Nav data={layoutData} />
          <MatchViewWrapper />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;
