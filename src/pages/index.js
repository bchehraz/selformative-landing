import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import '../styles/blog-listing.css';

import Landing from './landing.js'

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <Landing />
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;
