import React from 'react';
import Helmet from 'react-helmet';

import Layout from 'components/Layout';
import Container from 'components/Container';

import img_gatsby from 'assets/images/cc.png';

const IndexPage = () => {
  return (
    <Layout pageName="home">
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Container>
        <h1>Work in progress</h1>
        <p>Testing deployment</p>
       
      </Container>
    </Layout>
  );
};

export default IndexPage;
