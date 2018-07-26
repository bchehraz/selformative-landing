import React, { Component } from 'react'
import Img from 'gatsby-image';

import EmailList from '../EmailList';
import BgImage from '../BgImage';

class Landing extends Component {
  render() {
    const welcomeMessage = 'Self Improvement on Steroids';
    const subText = ''

    return (
      <div style={styles.container}>
        <div style={styles.headingContainer}>
          <h1 style={styles.headerStyle}>
            {welcomeMessage}
          </h1>
          <div style={styles.subTextStyle}>
            <ul style={styles.ul}>
              <li style={styles.li}>
                {`Build Your Best Self using Selformative's Knowledge Base and Premium Tools`}
              </li>
              <li style={styles.li}>
                {`Get Access to the Blog, Community & Platform`}
              </li>
              <li style={styles.li}>
                {`Transform Your Future`}
              </li>
              <li style={styles.li}>
                {`Gain Confidence in Yourself`}
              </li>
            </ul>
          </div>

          <div style={styles.emailListContainer}>
            <h3 style={styles.emailListHeader}>{`Reach Your Full Potential`}</h3>
            <h4 style={{ ...styles.emailListHeader, textAlign: 'center', fontWeight: 'normal', }}>{`Interested in Early Access?`}</h4>
            <EmailList message="Become an Early Adopter" />
          </div>
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
    border: '1em solid #42CAFD'
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
    padding: 0,
    fontSize: '1.2em'
  },
  headingContainer: {
    color: 'white',
    fontFamily: 'Montserrat, sans-serif',
    margin: '0 auto',
    width: '100%',
  },
  ul: {
    margin: '0 auto',
    width: '100%',
    padding: '0 1em',
  },
  li: {
    padding: '0.5em 0',
    width: '100%',
  },
  emailListContainer: {
    color: 'black',
    padding: '1em',
    background: '#fff',
    border: '0px solid black',
  },
  emailListHeader: {
    fontFamily: 'inherit',
    padding: '0.5em 0',
    margin: 0,
  }
}

export default Landing
