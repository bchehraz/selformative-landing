import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image';

import Nav from '../Nav';
import EmailList from '../EmailList';

const Header = (props) => (
  <div
    style={{
      //background: '#030301',
      marginBottom: '2rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: '100%',
        padding: '1.45rem 1.0875rem',
        alignItems: 'center',
        justifyContent: 'space-around',
        display: 'flex',
        flexDirection: 'row',
        background: 'white',
      }}
    >
      <div>
        <Img
          className="HeaderLogo"
          title="Header Image"
          alt="selformative logo"
          sizes={props.headerImage.sizes}
          style={{
            // display: 'flex',
            // flex: 2,
            maxWidth: 400,
            width: 200,
            margin: 'auto',
          }}
        />
      </div>
    </div>
  </div>
);

const styles = {
  navStyle: {
    textAlign: 'center',
    display: 'flex',
    flex: 1,
    margin: 'auto',
  }
}

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
