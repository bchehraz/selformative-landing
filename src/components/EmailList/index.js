import React, { Component } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import { withRouter } from 'react-router-dom';

import EmailListForm from '../EmailListForm';

class EmailList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      submitted: false,
      success: false,
      successMessage: '',
      error: false,
      errorMessage: 'Error: Invalid email or already on the list',
      isEmpty: false,
    };

    this.onTextChange = this.onTextChange.bind(this);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    //console.log(result);
    if (this.state.email === '') {
      this.setState({ ...this.state, error: true, errorMessage: 'Please enter a valid email address' });
    } else {
      addToMailchimp(this.state.email)
        .then(data => {
          console.log(data);
          if (data.result === "success") {
            this.props.history.push('/thank-you');
          } else {
            let message = '';
            if (data.msg.includes("already subscribed")) {
              message = "That email is already signed up"
            } else {
              message = data.msg;
            }
            this.setState({ ...this.state, error: true, errorMessage: message });
          }
        });
    }
  }

  onTextChange(e) {
    this.setState({ ...this.state, email: e.target.value })
  }

  render() {
    let {
      success,
      error,
      successMessage,
      errorMessage,
      email
    } = this.state;

    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          style={(success ? styles.containerSuccess : styles.container)}
        >
          <div style={styles.emailInputDiv}>
          <h4 style={ this.state.error ? styles.error : { display: 'none' }}>{this.state.errorMessage}</h4>

            <label>Email:</label>
            <input
              style={styles.emailInput}
              type="email"
              value={email}
              onChange={this.onTextChange}
              placeholder="Enter Your Email Address Here"
              required
            />
          </div>
          <div style={styles.buttonDiv}>
            <input
              type="submit"
              value={this.props.message || "Become an Early Member"}
              style={styles.buttonStyle}
            />
          </div>
        </form>
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignContent: 'center',
    //flexFlow: 'row wrap',
  },
  containerSuccess: {
    display: 'none',
  },
  emailInputDiv: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
  },
  emailInput: {
    padding: '10px',
    width: '100%',
    textAlign: 'center',
    backgroundColor: 'white',
  },
  buttonDiv: {
    flex: '1',
  },
  buttonStyle: {
    padding: '1em',
    width: '100%',
    backgroundColor: '#9CFC97',
    color: 'black',
    fontWeight: '700',
  },
  error: {
    color: 'red',
    display: 'block',
    textAlign: 'center',
    padding: 0, margin: 0,
    fontWeight: 'normal',
    fontFamily: 'inherit',
  }
}

export default withRouter(EmailList);
