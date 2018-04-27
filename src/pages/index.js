import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import '../styles/blog-listing.css';

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <div className="blog-posts">
      <div>
        <h1>Hi from the home page</h1>
      </div>
    </div>
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
