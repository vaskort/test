import React, { Component } from 'react';

class MatchView extends Component {
  render() {
    console.log(this.props);
    let bets = this.props.bets.map((bet, index) => 
      <li key={index}>
        <span className="name">{bet.name}</span>
        <span className="bestOddsDecimal">{bet.bestOddsDecimal}</span>
      </li>
    );
    return (
      <div className="betsWrapper">
        <ul>{bets}</ul>
      </div>
    );
  }
}

export default MatchView;