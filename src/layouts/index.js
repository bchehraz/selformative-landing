import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Media from 'react-media'

import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import EmailList from '../components/EmailList'
import './index.css'
import '../styles/layout-overide.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Selformative, The Blog"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
    />
    <Header />
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
      <Media query={{ maxWidth: 848 }}>
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
              <div style={{ flex: 1 }}>{children()}</div>
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
                {children()}
              </div>
<div style={{ flex: 1 }}>
                <Sidebar
                  title="Selformative"
                  description="Articles on Everything Self Improvement: from health to science and technology. I hope that at the end of each article you walk away feeling like you accomplished something. Enjoy. All articles are written by Me."
                />
                <Sidebar
                  title="About Author"
                  description="My name is Babak and I am a Full-stack Developer specializing in React and React Native based in Fresno, California."
                />
                <Sidebar
                  title="Comments or concerns?"
                  description="Please, feel free to email: babak@selformative.com"
                />
                <Sidebar
                  title="The Selformative Email List"
                  description="Get notified when a new article is published!"
                >
                  <EmailList />
                </Sidebar>
              </div>
            </div>
          )
        }
      </Media>
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
