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
import "./layout.css"
import "./qbpb-layout.css"

import fsgvLogo from "../images/Family_Services_Greater_Vancouver.png"
import sngLogo from "../images/nsg-wordmark-2014_ladybug.png"

const MainWrapper = styled.main`
  max-width: 800px;
  margin: 0 auto;
`

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const VFLogo = styled.a`
  img {
    width: 200px;
  }
`
const FSLogo = styled.a`
  padding-top: 5px;
  img {
    width: 110px;
  }
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
              <div>© {new Date().getFullYear()}</div>
              <div>Made possible by</div>
              <LogoWrapper>
                <VFLogo href="http://neighbourhoodsmallgrants.ca/">
                  <img src={sngLogo} alt="Vancouver Foundation | Small Neighbourhood Grants" />
                </VFLogo>
                <FSLogo href="">
                  <img src={fsgvLogo} alt="Family Services of Greater Vancouver" />
                </FSLogo>
              </LogoWrapper>
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
