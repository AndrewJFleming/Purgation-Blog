/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import FooterNav from "./footerNav"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} siteAuthor={data.site.siteMetadata?.author} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          // padding: `0 1.0875rem 1.45rem`,
          padding: `2rem`,
          backgroundColor: `#efebf2`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          <FooterNav/>
          © {new Date().getFullYear()},
          {` `}
          <a href="http://andrewjfleming.com/">{data.site.siteMetadata?.author}</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
