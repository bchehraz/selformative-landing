import React, { Component } from 'react';
import Link from 'gatsby-link';

class MenuButton extends Component {

  constructor(props) {
    super(props);

    this.state = { visible: props.menuVisibility }
  }

  render() {
    return (
      /*<menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </menu>*/
      <div style={this.props.style}>
        <button style={(this.props.menuVisibility) ? { ...styles.buttonStyle, ...styles.buttonStyleOpen } : styles.buttonStyle} onMouseDown={this.props.handleMouseDown}>
          {"MENU"}
        </button>
      </div>
    );
  }
}

const styles = {
  buttonStyle: {
    color: '#64a3d1',
    background: 'inherit',
    padding: '10px 5px',
    borderRadius: '7px',
    outline: 'none',
    fontFamily: 'Quicksand, sans-serif', //this is Google-imported,
    fontWeight: 'none',
    border: '1px solid #64a3d1',
  },
  buttonStyleOpen: {
    backgroundColor: '#000',
    opacity: 0.5,
    color: 'white',
    border: '1px solid white',
  }
}

export default MenuButton;
