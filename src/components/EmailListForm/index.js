import React from 'react';

const EmailListForm = (props) => (
  <form onSubmit={props.onSubmit(state.email)}>
    <input type="email" placeholder="email@example.com" />
    <input type="submit" value="Join the List"/>
  </form>
);

export default EmailListForm;
