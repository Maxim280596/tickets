import React from "react";
import { Row, Container } from "react-bootstrap";
import Logotype from "../../Logo.png";
import { StyledLogo, StyledLogoCol } from "./StyledLogo";

export function Logo() {
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
