import React from "react";
import { Row, Col } from "react-bootstrap";

import {
  StyledDiv,
  StyledRow,
  StyledPrice,
  StyledImg,
  StyledTitle,
  StyledValue,
} from "./StyledTicket";

export function Ticket() {
  return (
    <StyledRow>
      <Row>
        <Col lg={4} sm={4} xs={4}>
          <StyledPrice>1780 P</StyledPrice>
        </Col>
        <Col
          lg={{ span: 4, offset: 4 }}
          sm={{ span: 4, offset: 4 }}
          xs={{ span: 5, offset: 3 }}
        >
          <div>
            <StyledImg
              src="https://upload.wikimedia.org/wikipedia/commons/c/c2/S7_new_logo.svg"
              alt="s7 airlines logo"
            />
          </div>
        </Col>

        <Col lg={4} sm={4} xs={4}>
          <StyledDiv>
            <StyledTitle>HWT-KWT</StyledTitle>
            <StyledValue>10:45-08:00</StyledValue>
          </StyledDiv>
          <StyledDiv>
            <StyledTitle>HWT-KWT</StyledTitle>
            <StyledValue>10:45-08:00</StyledValue>
          </StyledDiv>
        </Col>
        <Col lg={4} sm={4} xs={4}>
          <StyledDiv>
            <StyledTitle>В пути</StyledTitle>
            <StyledValue>21ч 15мин</StyledValue>
          </StyledDiv>
          <StyledDiv>
            <StyledTitle>В пути</StyledTitle>
            <StyledValue>21ч 15мин</StyledValue>
          </StyledDiv>
        </Col>
        <Col lg={4} sm={4} xs={4}>
          <StyledDiv>
            <StyledTitle>2 пересадки</StyledTitle>
            <StyledValue>HKB, JNB</StyledValue>
          </StyledDiv>
          <StyledDiv>
            <StyledTitle>2 пересадки</StyledTitle>
            <StyledValue>HKB, JNB</StyledValue>
          </StyledDiv>
        </Col>
      </Row>
    </StyledRow>
  );
}
