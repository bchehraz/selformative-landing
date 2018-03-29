import React from 'react';
import Link from 'gatsby-link';

const EmailListForm = () => (
  <form method="POST">
    <input type="email" placeholder="email@example.com" />
    <input type="submit" value="Join the List"/>
  </form>
);

export default EmailListForm;
