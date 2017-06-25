import React, { Component } from "react";
import { default as classNames } from "classnames";

import marketsData from "marketsData";
import Background from "Background";
import MatchView from "MatchView";
import NonMatchView from "NonMatchView";

class MatchViewWrapper extends Component {
  constructor() {
    super();
    this.state = {
      tabShown: '',
      firstClicked: false,
      tabType: 'match'
    };
  }

  handleChange(e) {
    this.setState({
      tabShown: e.target.dataset.name,
      firstClicked: true,
      tabType: e.target.dataset.type
    });
  }

  render() {
    let bets = [];
    let betViews = [];
    let i = 0;
    for (var key in marketsData.marketData.markets) {
      // add to the best array the tab items
      bets.push(
        <li
          key={i}
          data-name={marketsData.marketData.markets[key].name}
          data-type={marketsData.marketData.markets[key].type}
          onClick={this.handleChange.bind(this)}
          className={classNames({
            active:
              this.state.tabShown ===
                marketsData.marketData.markets[key].name ||
                (i === 0 && this.state.firstClicked === false)
          })}
        >
          {marketsData.marketData.markets[key].name}
        </li>
      );
      // add to another variable the tab items
      betViews.push(
        // depending on the type show the appropriate view
        marketsData.marketData.markets[key].type === "match"
          ? <li
              key={i}
              className={classNames({
                active:
                  this.state.tabShown ===
                    marketsData.marketData.markets[key].name ||
                    (i === 0 && this.state.firstClicked === false)
              })}
            >
              <MatchView bets={marketsData.marketData.markets[key].bets} />
            </li>
          : <li
              key={i}
              className={classNames({
                active:
                  this.state.tabShown ===
                    marketsData.marketData.markets[key].name || i === 0
              })}
            >
              <NonMatchView bets={marketsData.marketData.markets[key]} />
            </li>
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
          {/*I will pass to the Background component the matchViewVisible so I can make the necessary styling changes*/}
          <Background teamData={marketsData.marketData.banner} matchTypeVisible={this.state.tabType}/>
          <ul>
            {betViews}
          </ul>
        </div>
      </div>
    );
  }
}

export default MatchViewWrapper;
