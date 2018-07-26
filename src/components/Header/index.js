import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image';

import Nav from '../Nav';
import EmailList from '../EmailList';

const Header = (props) => (
  <div
    style={{
      //background: '#030301',
      margin: '0 auto',
      marginBottom: '1rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        width: '100%',
        maxWidth: '700px',
        padding: '1rem 1.0875rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        flexWrap: 'wrap',
        background: 'rgba(0, 0, 0, 0)',
        borderRadius: '0 0 25px 25px',
        fontFamily: 'Montserrat, sans-serif',
      }}
    >
      <div style={{flex: 1}}>
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
      <div style={{flex: 1, margin: '0 auto', padding: '0', textAlign: 'center', minWidth: '200px',}}>
      {'Power to the Individual'}
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
