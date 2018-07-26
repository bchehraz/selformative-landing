import React, { Component } from 'react'
import Img from 'gatsby-image';

import EmailList from '../components/EmailList';
import BgImage from '../components/BgImage';

class ThankYou extends Component {
  render() {
    const thankyouMessage = 'Congratulations!';
    const subText = ''

    return (
      <div style={styles.container}>
        <div style={styles.headingContainer}>
          <h1 style={styles.headerStyle}>
            {thankyouMessage}
          </h1>
          <p style={styles.subTextStyle}>
            {`You've made the first step to improving yourself. Small, incremental steps are the key to developing yourself. Progress is progress, no matter how small.`}
          </p>
          <p style={{ ...styles.subTextStyle, fontWeight: '700', }}>
            {`We're not quite ready!`}
          </p>
          <p style={styles.subTextStyle}>
            {`In the meantime, check out this talk by Dr. Marshall Walker at Google on "Why We Sleep"!`}
          </p><iframe style={styles.iframe} height="350" src="https://www.youtube.com/embed/aXflBZXAucQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    textAlign: 'center',
    width: '100%',
    margin: '0 auto',
    backgroundColor: 'rgba(255,255,255,0.8)',
    backgroundColor: 'white',
    padding: '2em',
    opacity: '0.9',
    border: '10px solid #42CAFD'
  },
  headerStyle: {
    fontFamily: 'inherit',
    fontSize: '2em',
    color: 'black',
    lineHeight: '1em',
    fontWeight: '400',
  },
  subTextStyle: {
    color: '#333',
    width: '100%',
    margin: '0 auto',
    fontFamily: 'inherit',
    textAlign: 'left',
    fontWeight: '400',
    padding: '0.5em 1.5em',
    fontSize: '1.2em'
  },
  headingContainer: {
    color: 'white',
    fontFamily: 'Montserrat, sans-serif',
    margin: '0 auto',
    width: '100%',
  },
  iframe: {
    border: 'none',
    padding: 0,
    width: '100%',
  },
}

export default ThankYou
