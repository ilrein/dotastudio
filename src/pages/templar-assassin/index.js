import React from "react"
import {
  Header,
  Image,
} from 'semantic-ui-react';

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import img from '../../images/ta.png';

const IndexPage = () => (
  <Layout>
    <SEO title="Templar Assassin" />
    <div style={{ height: '100%' }}>
      <Image
        src={img}
      />
    </div>
  </Layout>
)

export default IndexPage
