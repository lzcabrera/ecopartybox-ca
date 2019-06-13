/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Image from "./image"
import "./layout.css"
import "./qbpb-layout.css"

const MainWrapper = styled.main`
  max-width: 600px;
  margin: 0 auto;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => (
      <div id="main-wrapper">
        <div className="content">
          <Header menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} />
          <MainWrapper>
            {children}
          </MainWrapper>
        </div>
        <footer className="footer">
          <div style={{textAlign: `center`}}>
            <small>
              <div>Made possible by</div>
              <a href="http://neighbourhoodsmallgrants.ca/">
                <Image />
              </a>
              <div>
              © {new Date().getFullYear()}
              </div>
            </small>
          </div>
        </footer>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
