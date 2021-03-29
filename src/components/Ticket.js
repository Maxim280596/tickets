import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";

const StyledRow = styled.div`
  border-radius: 6px;
  box-shadow: 1px 1px 4px 1px #e0e0e0;
  text-align: center;
  margin-bottom: 20px;
  background-color: white;
`;
const StyledPrice = styled(Col)`
  align-items: center;
  color: #2196F3;
  font-size: 35px;
  padding: 20px;
`;

const StyledImg = styled.img`
  width:100%;
  height:100%;
  padding: 20px;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
`;

const StyledTitle = styled.span`
  color: #B6C2C9;
  font-weight: 400;
  margin-bottom:0;
`;

export function Ticket() {
  return (
    <StyledRow>
      <Row>
        <Col lg={4}>
          <StyledPrice>1780 UAH</StyledPrice>
        </Col>
        <Col lg={{ span: 4, offset: 4 }}>
          <div>
            <StyledImg
              src="https://upload.wikimedia.org/wikipedia/commons/c/c2/S7_new_logo.svg"
              alt="s7 airlines logo"
            />
          </div>
        </Col>

        <Col lg={4}>
          <StyledDiv>
            <StyledTitle>HWT-KWT</StyledTitle>
            <span>10:45-08:00</span>
          </StyledDiv>
          <StyledDiv>
            <StyledTitle>HWT-KWT</StyledTitle>
            <span>10:45-08:00</span>
          </StyledDiv>
        </Col>
        <Col lg={4}>
          <StyledDiv>
            <StyledTitle>В пути</StyledTitle>
            <span>10:45-08:00</span>
          </StyledDiv>
          <StyledDiv>
            <StyledTitle>В пути</StyledTitle>
            <span>10:45-08:00</span>
          </StyledDiv>
        </Col>
        <Col lg={4}>
          <StyledDiv>
            <StyledTitle>2 пересадки</StyledTitle>
            <span>10:45-08:00</span>
          </StyledDiv>
          <StyledDiv>
            <StyledTitle>2 пересадки</StyledTitle>
            <span>10:45-08:00</span>
          </StyledDiv>
        </Col>
      </Row>
    </StyledRow>
  );
}
