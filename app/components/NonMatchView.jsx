import React, { Component } from "react";

class NonMatchView extends Component {
  render() {
    let { name } = this.props.bets;
    let bets = this.props.bets.bets.map((bet, index) =>
      <li key={index}>
        <span className="name">{bet.name}</span>
        <span className="bestOddsDecimal">{bet.bestOddsDecimal}</span>
      </li>
    );
    return (
      <div className="nonMatchWrapper">
        <span className="nonMatchName">
          {name}
        </span>
        <div className="betsWrapper nonMatchView">
          <ul>{bets}</ul>
        </div>
      </div>
    );
  }
}

export default NonMatchView;
