/**
 * Creates hierarchical menu based on WordPress menu.
 * @link https://www.wpgraphql.com/docs/menus/#hierarchical-data
 */
 import React from "react"
 import { useStaticQuery, graphql } from "gatsby"
 
 import UniversalLink from "../utils/UniversalLink"
 import * as style from "./footerNav.module.css"
 
 const FooterNav = () => {
   const wpMenu = useStaticQuery(graphql`
     {
       allWpMenuItem(
         filter: {
           menu: { node: { slug: { eq: "footer-menu" } } }
           parentDatabaseId: { eq: 0 }
         }
       ) {
         nodes {
           title: label
           path
         }
       }
     }
   `)
 
    /* For flat menu only; Hierarchical menus work differently */
   const menuItems = wpMenu.allWpMenuItem.nodes
 
    return (
        <nav className={style.footernav}>
            <ul>
                {menuItems.map((menuItem, index) => {
                    return (
                        <li key={index}>
                            <UniversalLink to={menuItem.path} activeClassName="current-page">
                                {menuItem.title}
                            </UniversalLink>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
 
 export default FooterNav
 