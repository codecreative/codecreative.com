import React from 'react';

import Container from 'components/Container';

const Footer = () => {
  return (
    <footer>
      <Container>
        <p>&copy;2002 -  {new Date().getFullYear()}</p>
      </Container>
    </footer>
  );
};

export default Footer;