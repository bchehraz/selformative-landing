import React, { Component } from 'react'
import Img from 'gatsby-image';

import EmailList from '../EmailList';
import BgImage from '../BgImage';

class Landing extends Component {
  render() {
    const welcomeMessage = 'Under Construction';
    const subText = 'In the meantime, Check out this recent JRE talk on health with Dr. Peter Atia'

    return (
      <div style={styles.container}>
        <h1 style={{color: 'white'}}>
          {welcomeMessage}
        </h1>
        <h2 style={styles.subTextStyle}>{subText}</h2>
        <iframe src="http://www.youtube.com/embed/gP1NA5f4LfE"
    width="560" height="315" frameborder="0"
        style={styles.iframeStyle}></iframe>
        <div style={styles.emailFormContainer}>
          <h1>{'Ready to Make a Change?'}</h1>
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
