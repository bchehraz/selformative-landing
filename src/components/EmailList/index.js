import React, { Component } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';

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
    };

    this.onTextChange = this.onTextChange.bind(this);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    //console.log(result);
    addToMailchimp(this.state.email)
      .then(data => {
        console.log(data);
        if (data.result === "success") {
          this.setState({ ...this.state, success: true, error: false });
        } else {
          this.setState({ ...this.state, error: true })
        }
      });
  }

  onTextChange(e) {
    this.setState({ email: e.target.value })
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
            <label>Email Address:</label>
            <input
              style={styles.emailInput}
              type="email"
              value={email}
              onChange={this.onTextChange}
              placeholder="youremail@email.com"
            />
          </div>
          <div style={styles.buttonDiv}>
            <input
              type="submit"
              value="Join Selformative's Mailing List"
              style={styles.buttonStyle}
            />
          </div>
        </form>
        <h4>{(success ? successMessage : "")}</h4>
        <h4>{(error ? errorMessage : "")}</h4>
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
  },
  buttonDiv: {
    flex: '1',
  },
  buttonStyle: {
    padding: '10px',
    width: '100%',
    backgroundColor: '#77BFA3',
    color: 'white',
  }
}

export default EmailList;
