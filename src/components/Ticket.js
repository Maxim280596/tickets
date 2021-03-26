import React from 'react';
import {Row, Col} from 'react-bootstrap';
import styled from 'styled-components';


const StyledRow = styled.div `
box-shadow: 0 0 10px;
`

export function Ticket () {

  return(
    <StyledRow>
    <Row>
      
      <Col lg={4}>1780 UAH</Col>
      <Col lg={{ span: 4, offset: 4 }} >1780 UAH</Col>
      
      <Col lg={4}>
        <p>HWT-KWT</p>
        <p>10:45-08:00</p>
      </Col>
      <Col lg={4}>
        <p>HWT-KWT</p>
        <p>10:45-08:00</p>
      </Col>
      <Col lg={4}>
        <p>HWT-KWT</p>
        <p>10:45-08:00</p>
      </Col>
      <Col lg={4}>
        <p>HWT-KWT</p>
        <p>10:45-08:00</p>
      </Col>
      <Col lg={4}>
        <p>HWT-KWT</p>
        <p>10:45-08:00</p>
      </Col>
      <Col lg={4}>
        <p>HWT-KWT</p>
        <p>10:45-08:00</p>
      </Col>
    </Row>
    </StyledRow>
  )
}