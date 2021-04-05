import React from 'react';

import Logotype from '../../logo.png';
import { Row, Container } from 'react-bootstrap';
import { StyledLogo, StyledLogoCol } from '../../styled/Logo/StyledLogo';

export const Logo = () => {
  return (
    <Container>
      <Row>
        <StyledLogoCol>
          <StyledLogo src={Logotype} alt="Logo" />
        </StyledLogoCol>
      </Row>
    </Container>
  );
}
