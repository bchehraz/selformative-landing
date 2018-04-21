import React, { Component } from 'react';
import Link from 'gatsby-link';

import NavElement from '../NavElement';

class Nav extends Component {
  constructor() {
    const categories = [
      { link: '/categories/', name: 'Link 1' },
      { link: '/categories/', name: 'Link 2' },
      { link: '/categories/', name: 'Link 3' },
      { link: '/categories/', name: 'Link 4' },
      { link: '/categories/', name: 'Link 5' },
    ];
  }

  render() {
    return (
      <div className="Nav" style={styles.navDiv}>
        <ul style={styles.ul}>
          {categories.map((category) => (
            <Link to={category.link}>
              <NavElement>{category.name}</NavElement>
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}

const styles = {
  navDiv: {
    textAlign: 'center',
  },
  ul: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-evenly'
  },
}

export default Nav;
