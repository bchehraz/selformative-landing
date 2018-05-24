import React, { Component } from 'react';

import FaHome from 'react-icons/lib/fa/home';

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
        id="menuContainer"
        className={visibility}
        onMouseDown={this.props.handleMouseDown}
      >
        <div
          id="flyoutMenu"
        >
          <ul>
            <Link style={styles.menuLink} to="/"><li><h2>Home</h2></li></Link>
            <Link style={styles.menuLink} to="/"><li><h2>About</h2></li></Link>
            <Link style={styles.menuLink} to="/"><li><h2>Contact</h2></li></Link>
            <Link style={styles.menuLink} to="/"><li><h2>Search</h2></li></Link>
          </ul>
        </div>
      </div>
    );
  }
}

const styles = {
  menuLink: {
    color: 'black',
    textDecoration: 'none',
    margin: 0
  },
}

export default Menu;
