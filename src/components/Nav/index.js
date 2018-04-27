import React, { Component } from 'react';
import Link from 'gatsby-link';

import NavElement from '../NavElement';

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [
        { link: '/categories/', name: 'Link 1' },
        { link: '/categories/', name: 'Link 2' },
        { link: '/categories/', name: 'Link 3' },
        { link: '/categories/', name: 'Link 4' },
        { link: '/categories/', name: 'Link 5' },
      ]
    };
  }

  render(props) {
    return (
      <div className="Nav" style={this.props.style}>
        <ul style={styles.ul}>
          {this.state.categories.map((category) => (
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
  /*ul: {
    display: 'block',
    flexDirection: 'row',
    flex: 3,
    justifyContent: 'space-evenly'
  },*/
  ul: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  }
}

export default Nav;
