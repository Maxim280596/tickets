import React from 'react';
import { Row, Container } from 'react-bootstrap';

import Logotype from '../logo.png';
import { StyledLogo, StyledLogoCol } from '../styled/StyledLogo';

const Logo = () => (
  <Container>
    <Row>
      <StyledLogoCol>
        <StyledLogo src={Logotype} alt="Logo" />
      </StyledLogoCol>
    </Row>
  </Container>
);

export default Logo;
