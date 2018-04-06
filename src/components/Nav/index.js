import React, { Component } from 'react';
import Link from 'gatsby-link';

class Nav extends Component {
  render() {
    return (
      <div>
        <Link
          to="/another-page/"
        >
          Words within the link
        </Link>
      </div>
    );
  }
}

export default Nav;
