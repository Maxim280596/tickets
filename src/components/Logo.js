import React from 'react';
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";

const StyledLogo = styled.img `

width: 80px;
text-align:center;
  height:80px;
  padding: 20px;
 margin-bottom: 40px;
`

export function Logo () {

    return (
      
        <Col lg={{span:6, offset: 5}} sm={{span:6, offset: 3}} xs={{span:6, offset: 3}}>
        <StyledLogo  src="../logo.png" alt="Logo"/>
        </Col>
      
    )
}