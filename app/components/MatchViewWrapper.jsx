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
      tabShown: marketsData.marketData.markets.name,
      firstClicked: false
    };
  }

  componentDidMount() {
    // lets find the first object and set the name to tabShown property so we have an active item
    for (var key in marketsData.marketData.markets) {
        console.log(marketsData.marketData.markets[key].name);
        i++;
    }
  }

  handleChange(e) {
    this.setState({
      tabShown: e.target.dataset.name,
      firstClicked: true
    });
  }

  render() {
    console.log(this.state);
    let bets = [];
    let betViews = [];
    let i = 0;
    for (var key in marketsData.marketData.markets) {
      // add to the best array the tab items
      bets.push(
        <li
          key={i}
          data-name={marketsData.marketData.markets[key].name}
          onClick={this.handleChange.bind(this)}
          className={classNames({
            active:
              this.state.tabShown === marketsData.marketData.markets[key].name || i === 0 && this.state.firstClicked === false
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
                    marketsData.marketData.markets[key].name || i === 0 && this.state.firstClicked === false
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
              {" "}<NonMatchView />{" "}
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
