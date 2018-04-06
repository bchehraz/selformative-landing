import React from 'react'
import Link from 'gatsby-link'

const SecondPage = ({ data }) => (
  <div>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage ayyy</Link>
  </div>
)

export default SecondPage
