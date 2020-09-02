import React from "react"
import {
  Header,
  Image,
} from 'semantic-ui-react';

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import MorphImg from '../../images/morphling.png';

const IndexPage = () => (
  <Layout>
    <SEO title="Morphling" />
    <div style={{ height: '100%' }}>
      {/* <Header
        as="h1"
        style={{
          color: 'white',
        }}
      >
        Morphling
      </Header> */}

      <Image
        src={MorphImg}
      />
    </div>
  </Layout>
)

export default IndexPage
