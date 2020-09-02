import React from "react"
// import { Link } from "gatsby"
import { Header } from 'semantic-ui-react';

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
      style={{
        textAlign: 'left',
        width: '100%',
        margin: '1rem',
      }}
    >
      <Header
        as="h1"
        style={{
          color: 'white',
          // marginTop: '4rem',
        }}
      >
        Welcome to Dota Studio!
      </Header>
    </div>
  </Layout>
)

export default IndexPage
