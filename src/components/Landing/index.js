import React, { Component } from 'react'
import Img from 'gatsby-image';

import EmailList from '../EmailList';
import BgImage from '../BgImage';

class Landing extends Component {
  render() {
    const welcomeMessage = 'Under Construction';
    const subText = 'In the meantime, check out this important talk at Google regarding how important sleep is!'

    return (
      <div style={styles.container}>
        <h1 style={{color: 'white'}}>
          {welcomeMessage}
        </h1>
        <p style={styles.subTextStyle}>{subText}</p>
        <iframe src="http://www.youtube.com/embed/aXflBZXAucQ"
    width="560" height="315" frameborder="0"
        style={styles.iframeStyle}></iframe>
        <div style={styles.emailFormContainer}>
          <EmailList />
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    textAlign: 'center',
    maxWidth: '100%',
    margin: '0 auto',
  },
  emailFormContainer: {
    padding: '10',
    width: '80vw',
    maxWidth: '550px',
    margin: '0 auto',
    borderRadius: '20',
    backgroundColor: '#B1E5F2',
    padding: '20px',
  },
  iframeStyle: {
    border: 'none',
    width: '80vw',
    maxWidth: '550px',
  },
  subTextStyle: {
    color: 'white',
    backgroundColor: 'black',
    width: '80vw',
    maxWidth: '550px',
    margin: '0 auto',
    padding: '5px',
  },
}

export default Landing
