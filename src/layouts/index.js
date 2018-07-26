import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Media from 'react-media'

import Header from '../components/Header'
import Footer from '../components/Footer'
import BgImage from '../components/BgImage';
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
          width: '95vw',
          maxWidth: '700px',
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          height: "100%",
          fontFamily: 'Montserrat, sans-serif',
        }}
      >
        <div style={{ flex: 1, paddingRight: "0px" }}>
          <BgImage image={data.bgImg} style={styles.bg} />
          {children()}

          <Footer />
        </div>
      </div>

  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

const styles = {
  bg: {
    position: 'fixed',
  }
}

export default TemplateWrapper

export const pageQuery = graphql`
  query ImageQuery {
    # Get header image
    headerImage: imageSharp(id: { regex: "/logo_3_2/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }

    # Get background image
    bgImg: imageSharp(id: { regex: "/bg7/" }) {
      sizes(maxWidth: 2000 ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
  `
