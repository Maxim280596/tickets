import Logotype from '../logo.png';
import { Row, Container } from 'react-bootstrap';

import { StyledLogo, StyledLogoCol } from '../styled/StyledLogo';

export const Logo = () => (
  <Container>
    <Row>
      <StyledLogoCol>
        <StyledLogo src={Logotype} alt="Logo" />
      </StyledLogoCol>
    </Row>
  </Container>
);

export default Logo;
