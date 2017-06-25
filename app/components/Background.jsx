import React, { Component } from 'react';

class Background extends Component {
  render() {
    let homeName = this.props.teamData.home.name,
        awayName = this.props.teamData.away.name,
        homeImage = require('../assets/' + this.props.teamData.home.logo),
        awayImage = require('../assets/' + this.props.teamData.away.logo);
    return (
      <div className="background">
        <div className="team home">
          <div className="teamWrapper">
            <img src={homeImage} alt=""/>
            <span className="name">{homeName}</span>
          </div>
        </div>
        <span className="vs">
          V
        </span>
        <div className="team away">
          <div className="teamWrapper">
            <img src={awayImage} alt=""/>
            <span className="name">{awayName}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Background;