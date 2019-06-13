import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, menuLinks }) => (
  <header
    style={{
      background: `#07AED6`,
      marginBottom: `1.45rem`,
      textAlign: `center`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0, fontFamily: 'Abril Fatface', letterSpacing: '0.05em' }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <div>
        <nav>
          <ul style={{ display: "flex", flex: 1, alignItems: `center`, justifyContent: `center`, marginBottom: 0}}>
            {menuLinks.map(link => (
              <li
              key={link.name}
              style={{
                listStyleType: `none`,
                padding: `1rem`
              }}
              >
                <Link style={{color: `white`}} to={link.link}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
