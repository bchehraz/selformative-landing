import React, { Component } from 'react';
import Link from 'gatsby-link';

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false
    }
  }

  offHover = () => {
    this.setState({ hover: false })
  }

  onHover = () => {
    this.setState({ hover: true })
  }

  render() {
    return (
      <div className="Nav" style={styles.navDiv}>
        <ul style={styles.ul}>
          <Link
            to="/categories/"
          >
            <li
              style={ this.state.hover ? styles.liHover : styles.li}
              onMouseEnter={this.onHover}
              onMouseLeave={this.offHover}
            >
              Link 1
            </li>
          </Link>
          <Link to="/categories/">
            <li
              style={ this.state.hover ? styles.liHover : styles.li}
              onMouseEnter={this.onHover}
              onMouseLeave={this.offHover}
            >
              Link 2
            </li>
          </Link>
          <Link to="/categories/">
            <li style={styles.li}>
              Link 3
            </li>
          </Link>
          <Link to="/categories/">
            <li style={styles.li}>
              Link 4
            </li>
          </Link>
        </ul>
      </div>
    );
  }
}

const styles = {
  navDiv: {
    textAlign: 'center'
  },
  ul: {
    display: 'block',
  },
  liHover: {
    listStyle: 'none',
    display: 'inline-block',
    width: '25%',
    backgroundColor: 'red',
    padding: '20px 0'
  },
  li: {
    listStyle: 'none',
    display: 'inline-block',
    width: '25%',
    backgroundColor: 'white',
    padding: '20px 0'
  },
}

export default Nav;
