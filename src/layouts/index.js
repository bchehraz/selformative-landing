import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Media from 'react-media'

import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import EmailList from '../components/EmailList'
import './index.css'
import '../styles/layout-overide.css'

const TemplateWrapper = ({ data, children }) => (
  <div>
    <Helmet
      title="Selformative"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
    />
    <Header headerImage={data.headerImage} />
    <div
      style={{
        margin: "0 auto",
        maxWidth: 980,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        height: "100%"
      }}
    >
      <div style={{ flex: 2.5, paddingRight: "30px" }}>
        {children()}
      </div>
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

export const pageQuery = graphql`
  query HeaderImageQuery {
    headerImage: imageSharp(id: { regex: "/logo_3_2/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
  `
