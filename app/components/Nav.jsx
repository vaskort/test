import React, { Component } from "react";
import Logo from "../assets/oc-logo.png";
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
    let el = document.body;
    if (el.classList) {
      el.classList.remove('menuHidden', 'menuVisible');
      el.classList.add(burgerMenuClass);
    }
    else {
      el.className = className;
    }
  }

  render() {
    let sportsLinks = this.props.data.navigation.sportLinks.map((link, index) => 
      <li key={index}>
        <a href={link.url}>{link.name}</a>
        {/* add the separator if its the last item */}
        {this.props.data.navigation.sportLinks.length === index + 1 &&
          <span className="separator" />
        }
      </li>
    );
    let headerLinks = this.props.data.navigation.headerLinks.map((link, index) => 
      <li key={index}>
        <a href={link.url}>{link.name}</a>
      </li>
    );
    return (
      <header className={this.state.showHideMenu}>
        <div className="logo">
          <img src={Logo} alt="Oddschecker" />
        </div>
        <nav>
          <ul>
            {sportsLinks}
            {headerLinks}
          </ul>
          {/* burger button */}
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
