import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import 'styles/main.scss';

import Header from 'components/Header';
import Footer from 'components/Footer';

const Layout = ({ children, pageName }) => {

  let className = '';

  if ( pageName ) {
    className = `${className} page-${pageName}`;
  }

  return (
    <>
      <Helmet bodyAttributes={{ class: className}}>
        <title>WIP</title>
      </Helmet>
      <div className="wrapper">
        <main>{ children }</main>
        <Footer />
      </div>
    </>
  );

};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;