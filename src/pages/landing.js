import React, { Component } from 'react'

import EmailList from '../components/EmailList';

class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.state = { section: 0 }
  }

  goNext = () => {
    this.setState({ section: this.state.section + 1 });
  }

  render() {
    return (
      <div style={styles.container}>
        <h1 style={{color: 'white'}}>{'Under Construction'}</h1>
        <iframe src="http://www.youtube.com/embed/W7qWa52k-nE"
   width="560" height="315" frameborder="0" allowfullscreen></iframe>
        <div style={styles.emailFormContainer}>
          <h1>Join the Early Starters</h1>
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
    overflow: 'hidden'
  },
  emailFormContainer: {
    padding: '10',
    maxWidth: '600px',
    margin: '0 auto',
    borderRadius: '20',
    backgroundColor: '#B1E5F2',
    padding: '20px',
  }
}

export default LandingPage;
