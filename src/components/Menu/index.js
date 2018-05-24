import React, { Component } from 'react';

import Link from 'gatsby-link'
import './index.css';

class Menu extends Component {
  render() {
    let visibility = "hide";

    if (this.props.menuVisibility) {
      visibility = "show";
    }

    return (
      <div
        id="flyoutMenu"
        onMouseDown={this.props.handleMouseDown}
        className={visibility}
      >
        <h2><Link to="/">Home</Link></h2>
        <h2><Link to="/">About</Link></h2>
        <h2><Link to="/">Contact</Link></h2>
        <h2><Link to="/">Search</Link></h2>
      </div>
    );
  }
}

export default Menu;
