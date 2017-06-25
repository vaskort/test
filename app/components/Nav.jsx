import React, { Component } from "react";
import Logo from "../assets/oc-logo.png";
import { transformicons } from "burgerIcon";
import { default as classNames } from 'classnames';

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      showHideMenu: 'menuHidden'
    };
  }

  handleBurgerMenu(e) {
    let burgerMenuClass = this.state.showHideMenu === 'menuHidden' ? 'menuVisible' : 'menuHidden';
    this.setState({
      showHideMenu: burgerMenuClass
    });
  }

  render() {
    return (
      <header className={this.state.showHideMenu}>
        <div className="logo">
          <img src={Logo} alt="Oddschecker" />
        </div>
        <nav>
          <ul>
            <li>
              <a href="/">Futbol</a>
            </li>
            <li>
              <a href="">Tenis</a>
            </li>
            <li>
              <a href="">Baloncesto</a>
              <span className="separator" />
            </li>
            <li>
              <a href="">Bonos</a>
            </li>
            <li>
              <a href="">Pronosticos</a>
            </li>
          </ul>
            <button
              type="button"
              className={classNames('tcon tcon-menu--xcross burgerMenu', {'tcon-transform': this.state.showHideMenu === 'menuHidden' ? false : true})}
              aria-label="toggle menu"
              onClick={this.handleBurgerMenu.bind(this)}
            >
              <span className="tcon-menu__lines" aria-hidden="true" />
              <span className="tcon-visuallyhidden">toggle menu</span>
            </button>
        </nav>
      </header>
    );
  }
}

export default Nav;
