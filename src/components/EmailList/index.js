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
      successMessage: 'Thank you! :)',
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
          style={(success ? styles.emailListSuccess : styles.emailList)}
        >
          <input
            type="email"
            value={email}
            placeholder="Enter your email here"
            onChange={this.onTextChange}
          />
          <input type="submit" value="Join the List"/>
        </form>
        <h4>{(success ? successMessage : "")}</h4>
        <h4>{(error ? errorMessage : "")}</h4>
      </div>
    );
  }
}

const styles = {
  emailList: {
  },
  emailListSuccess: {
    display: 'none'
  }
}

export default EmailList;
