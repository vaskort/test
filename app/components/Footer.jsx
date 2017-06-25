import React, { Component } from 'react';
import layoutData from "layoutData";

class Footer extends Component {
  render() {
    console.log(layoutData);
    let footerLinks = layoutData.navigation.footerLinks.map((link, index) => 
      <li><a href={link.url}>{link.name}</a></li>
    );

    return (
      <footer>
        <div className="container">
          <ul>
            {footerLinks}
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;