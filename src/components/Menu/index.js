import React, { Component } from 'react';

import FaHome from 'react-icons/lib/fa/home';
import FaQuestionCircle from 'react-icons/lib/fa/question-circle';
import FaComment from 'react-icons/lib/fa/comment';
import FaSearch from 'react-icons/lib/fa/search';

import Link from 'gatsby-link'
import './index.css';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.generateLink = this.generateLink.bind(this);
  }

  // This will generate Nav menu link
  generateLink(title = "NoName", path = "/", Icon) {
    return (
      <Link style={styles.menuLink} to={path}>
        <li>
          <h2>
            <p>
              <Icon size={30} style={{ padding: '5px' }}/>
              {title}
            </p>
          </h2>
        </li>
      </Link>
    );
  }

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
            {this.generateLink("Home", "/", FaHome)}
            {this.generateLink("About", "/", FaQuestionCircle)}
            {this.generateLink("Contact", "/", FaComment)}
            {this.generateLink("Search", "/", FaSearch)}
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
