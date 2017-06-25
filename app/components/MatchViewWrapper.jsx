import React, { Component } from 'react';
import { default as classNames } from 'classnames';

import marketsData from 'marketsData';
import Background from 'Background';
import MatchView from 'MatchView';

class MatchViewWrapper extends Component {
  render() {
    console.log(marketsData.marketData.markets);
    let bets = [];
    let i = 0;
    for (var key in marketsData.marketData.markets) {
      bets.push(<li key={i} className={classNames({active: i === 0 })}>{key}</li>);
      i++;
    }
    return (
      <div className="tabsWrapper">
        <div className="tabLinksWrapper">
          <ul>
            {bets}      
          </ul>
        </div>
        <div className="tabWrapper">
          <Background teamData={marketsData.marketData.banner} />
          <ul>
            <li className="active">
              <MatchView />
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default MatchViewWrapper;