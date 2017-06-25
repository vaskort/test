import React, { Component } from "react";
import { default as classNames } from "classnames";

import marketsData from "marketsData";
import Background from "Background";
import MatchView from "MatchView";
import NonMatchView from "NonMatchView";

class MatchViewWrapper extends Component {
  render() {
    console.log(marketsData.marketData.markets);

    let bets = [];
    let betViews = [];
    let i = 0;
    for (var key in marketsData.marketData.markets) {
      // add to the best array the tab items
      bets.push(
        <li key={i} className={classNames({ active: i === 0 })}>
          {marketsData.marketData.markets[key].name}
        </li>
      );
      // add to another variable the tab items
      betViews.push(
        // depending on the type show the appropriate view
        marketsData.marketData.markets[key].type === "match"
          ? <li key={i} className={classNames({ active: i === 0 })}>
              <MatchView bets={marketsData.marketData.markets[key].bets} />
            </li>
          : <li key={i} className={classNames({ active: i === 0 })}> <NonMatchView/> </li>
      );
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
            {betViews}
          </ul>
        </div>
      </div>
    );
  }
}

export default MatchViewWrapper;
