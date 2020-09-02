import React from "react"
// import { Link } from "gatsby"
import { Header, Container } from 'semantic-ui-react';

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Dota Studio" />
    <Container
      // style={{ height: '100%' }}
    >
      <Header
        as="h1"
        style={{
          color: 'white',
        }}
      >
        Welcome to Dota Studio!
      </Header>
    </Container>
  </Layout>
)

export default IndexPage
