/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {
  Icon,
  Menu,
  Segment,
  Sidebar
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import SEO from "./seo"
import Navbar from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <SEO title="Home" />
      <Sidebar.Pushable as={Segment}>
        <Sidebar
          as={Menu}
          icon='labeled'
          inverted
          vertical
          visible
          width='thin'
        >
          <Menu.Item
            as='a'
            href="/"
          >
            <Icon name="home" />
            Home
          </Menu.Item>
          <Menu.Item
            as='a'
            href="/morphling"
          >
            Morphling
          </Menu.Item>
          <Menu.Item
            as='a'
            href="/templar-assassin"
          >
            Templar Assassin
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher>
          <div class="main">
            {children}
          </div>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
