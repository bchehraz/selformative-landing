import React from 'react';
import PropTypes from 'prop-types';

import Link from 'gatsby-link';

const Categories = ({ pathContext, data }) => {
  const { tag } = pathContext;
  const { edges: posts } = data.allMarkdownRemark;
return (
  <div>
    <ul>
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
        //const { path, title } = node.frontmatter;
        return (
          <div className="blog-post-preview" key={post.id}>
            <h1>
              <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
            </h1>
            <h2>{post.frontmatter.date}</h2>
            <p>{post.excerpt}</p>
          </div>
        );
      })}
    </ul>
    {/*
            This links to a page that does not yet exist.
            We'll come back to it!
          */}

  </div>
);//<Link to="/">All Categories</Link>-->
};

Categories.propTypes = {
pathContext: PropTypes.shape({
  tag: PropTypes.string.isRequired,
}),
data: PropTypes.shape({
  allMarkdownRemark: PropTypes.shape({
    totalCount: PropTypes.number.isRequired,
    edges: PropTypes.arrayOf(
      PropTypes.shape({
        node: PropTypes.shape({
          frontmatter: PropTypes.shape({
            path: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
          }),
        }),
      }).isRequired
    ),
  }),
}),
};

export default Categories;

// export const pageQuery = graphql`
// query CategoryPage($tag: String) {
//   allMarkdownRemark(
//     limit: 2000
//     sort: { fields: [frontmatter___date], order: DESC }
//     filter: { frontmatter: { tags: { in: [$tag] } } }
//   ) {
//     totalCount
//     edges {
//       node {
//         frontmatter {
//           title
//           path
//         }
//       }
//     }
//   }
// }
// `;

export const pageQuery = graphql`
  query CategoryPage($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { order: DESC, fields: [frontmatter___date]}
      filter: { frontmatter: { tags: { in : [$tag] } } }
    ) {
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
