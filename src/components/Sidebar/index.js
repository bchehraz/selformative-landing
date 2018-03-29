import React from 'react';

const Sidebar = (props) => (
  <div
      style={styles.sideBarDiv}
  >
      <strong>{props.title}</strong> {props.description}
  </div>
);

const styles = {
  sideBarDiv: {
    border: '2px solid #e6e6e6',
    maxWidth: 960,
    padding: '0.5rem',
    marginBottom: '25px'
  }
}

export default Sidebar;
