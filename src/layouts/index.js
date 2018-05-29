import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Media from 'react-media'

import Header from '../components/Header'
import BgImage from '../components/BgImage';
import Sidebar from '../components/Sidebar';
import EmailList from '../components/EmailList';
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
    <div>
      <div> {/*This is the div that will, at some point, hide when the menu button is pressed*/}
        <Header headerImage={data.headerImage} /> {/*This header will be explicitely defined in Wrapper, potentially*/}
        <div> {/*This is the content div. Contains all the content including the background image*/}
          <Media query={{ maxWidth: 848 }}>
            { /*<div style={{ flex: 2.5, paddingRight: "30px" }}>
              <BgImage image={data.bgImg} />
              {children()}
            </div> */ }
            {matches =>
              matches ? (
                <div
                  style={{
                    margin: "0 auto",
                    maxWidth: 980,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    height: "100%",
                    padding: "25px"
                  }}
                >
                  <div style={{ flex: 1 }}>
                  <BgImage image={data.bgImg} />
                    {children()}
                  </div>
                </div>
              ) : (
                <div
                  style={{
                    margin: "0 auto",
                    maxWidth: 980,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    height: "100%",
                    padding: "25px"
                  }}
                >
                
                <div style={{ flex: 2.5, paddingRight: "30px" }}>
                  <BgImage image={data.bgImg} />
                  {children()}
                  </div>
                </div>
              )
            }
          </Media>
        </div>
      </div>
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
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
    bgImg: imageSharp(id: { regex: "/bg/" }) {
      sizes(maxWidth: 2000 ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
  `
