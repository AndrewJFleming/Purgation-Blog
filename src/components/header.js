import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Background from '../images/headerBG.png';

import MainNav from "./mainNav"

const Header = ({ siteTitle, siteAuthor }) => (
  
  <header
    style={{
      background: `#472623`,
      // marginBottom: `1.45rem`,
      backgroundImage: `url(${Background})`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem 0`,
      }}
    >

      <h1 style={{ margin: 0 }}>
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
      <p style={{ margin: `1rem 0 0`,
        color: `white`,
        textDecoration: `none`,
      }}
      >{siteAuthor}</p>
    </div>
    <MainNav/>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteAuthor: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  siteAuthor: ``,
}

export default Header
