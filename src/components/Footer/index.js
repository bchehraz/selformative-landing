import React from 'react';
import Link from 'gatsby-link';
import FaInstagram from 'react-icons/lib/fa/instagram';

const Footer = () => (
  <footer style={styles.footer}>
    <div style={styles.socialMediaContainer}>

    </div>
    Copyright &copy; 2018 - Selformative
  </footer>
)

/*
<a
  href="http://instagram.com/babakthedev"
  target="_blank"
  style={styles.a}
>
  <FaInstagram size="56" />
</a>
*/

const styles = {
  footer: {
    width: '100%',
    margin: '0 auto',
    textAlign: 'center',
    color: 'white',
  },
  socialMediaContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  a: {
    color: 'white',
  },


}

export default Footer;
