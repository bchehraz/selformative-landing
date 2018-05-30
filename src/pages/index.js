import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import '../styles/blog-listing.css';

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <div className="blog-posts">
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }, index) => {
          console.log(index);

          //The most recent blog post is shown larger than the rest
          if (index === 0) {
            return (
              <div className="blog-post-preview" key={post.id}>
                <h1>
                  <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                </h1>
                <h2>{post.frontmatter.date}</h2>
                <iframe src={post.frontmatter.src}
            width="560" height="315" frameborder="0"></iframe>
              </div>
            );
          } else {
            return (
              <div className="blog-post-preview" key={post.id}>
                <h1>
                  <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                </h1>
                <h2>{post.frontmatter.date}</h2>
                <iframe src={post.frontmatter.src}
            width="560" height="315" frameborder="0"></iframe>
              </div>
            );
          }
        })}
    </div>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            src
          }
        }
      }
    }
  }
`;
