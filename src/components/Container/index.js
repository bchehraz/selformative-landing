import React, { Component } from 'react';

import Header from '../Header'; 

class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false
    }
  }

  render() {
    return (
      <div>
        <div> {/*This is the div that will, at some point, hide when the menu button is pressed*/}
          <Header headerImage={data.headerImage} /> {/*This header will be explicitely defined in Wrapper, potentially*/}
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Container;
