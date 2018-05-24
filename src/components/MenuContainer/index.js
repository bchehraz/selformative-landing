import React, { Component } from 'react';

import Menu from '../Menu';
import MenuButton from '../MenuButton';

class MenuContainer extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      visible: false
    }

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({
      visible: !this.state.visible
    });
  }

  handleMouseDown(e) {
    this.toggleMenu();
    e.stopPropagation();
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

export default MenuContainer;
