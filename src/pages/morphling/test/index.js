import React from "react"
import {
  Header,
  Image,
} from 'semantic-ui-react';

import Layout from "@/components/layout"
import SEO from "@/components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Morphling Test" />
    <div style={{ height: '100%' }}>
      <Header
        as="h1"
        style={{
          color: 'white',
        }}
      >
        Morphling Test
      </Header>
    </div>
  </Layout>
)

export default IndexPage
