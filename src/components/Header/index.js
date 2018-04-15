import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image';

import Nav from '../Nav';

const Header = (props) => (
  <div
    style={{
      background: '#f5f5f5',
      marginBottom: '3rem',
      borderBottom: '2px solid #e6e6e6',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 980,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <Img
        className="HeaderLogo"
        title="Header Image"
        alt="selformative logo"
        sizes={props.headerImage.sizes}
      />
      <Nav />
    </div>
  </div>
);

/*

<h1 style={{margin: 0, textAlign: 'center',fontSize: '18px', display: 'inline-block'}}>
   <Link to="/"
     style={{
       color: 'rgba(0, 0, 0, 0.6)',
       textDecoration: 'none',
     }}
   >
     <span style={{ color: 'black' }}>self</span>ormative
   </Link>
 </h1>

*/
export default Header
