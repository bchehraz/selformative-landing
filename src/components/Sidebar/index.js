import React from 'react';

const Sidebar = ({ title, description, children }) => (
  <div
      style={styles.sideBarDiv}
  >
      <strong>{title}</strong> {description}
      {children}
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
