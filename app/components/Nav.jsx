import React, { Component } from 'react';
import Logo from '../assets/oc-logo.png';

class Nav extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="logo">
            <img src={Logo} alt="Oddschecker"/>
          </div>
          <ul>
            <li>
              <a href="/">Futbol</a>
            </li>
            <li>
              <a href="">Tenis</a>
            </li>
            <li>
              <a href="">Baloncesto</a>
              <span className="separator"></span>
            </li>
            <li>
              <a href="">Bonos</a>
            </li>
            <li>
              <a href="">Pronosticos</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;