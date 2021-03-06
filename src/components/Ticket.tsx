import React from 'react';
import { Row, Col } from 'react-bootstrap';

import {
  StyledDiv,
  StyledRow,
  StyledPrice,
  StyledImg,
  StyledTitle,
  StyledValue,
} from '../styled/StyledTicket';
import { getTimeToString, getDurationToString } from '../helpers';
import { TicketsProps } from '../types';

export const Ticket = ({
  price,
  origin,
  destination,
  originBack,
  destinationBack,
  stops,
  stopsBack,
  stopsCity,
  stopsCityBack,
  departureDate,
  duration,
  departureDateBack,
  durationBack,
}: TicketsProps) => (
  <StyledRow>
    <Row>
      <Col lg={4} sm={5} xs={5}>
        <StyledPrice>{price} р.</StyledPrice>
      </Col>
      <Col
        lg={{ span: 4, offset: 4 }}
        sm={{ span: 4, offset: 3 }}
        xs={{ span: 5, offset: 2 }}
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
          <StyledTitle>
            {origin}-{destination}
          </StyledTitle>
          <StyledValue>{getTimeToString(departureDate, duration)}</StyledValue>
        </StyledDiv>
        <StyledDiv>
          <StyledTitle>
            {originBack}-{destinationBack}
          </StyledTitle>
          <StyledValue>
            {getTimeToString(departureDateBack, durationBack)}
          </StyledValue>
        </StyledDiv>
      </Col>
      <Col lg={4} sm={4} xs={4}>
        <StyledDiv>
          <StyledTitle>В пути</StyledTitle>
          <StyledValue>{getDurationToString(duration)}</StyledValue>
        </StyledDiv>
        <StyledDiv>
          <StyledTitle>В пути</StyledTitle>
          <StyledValue>{getDurationToString(durationBack)}</StyledValue>
        </StyledDiv>
      </Col>
      <Col lg={4} sm={4} xs={4}>
        <StyledDiv>
          <StyledTitle>{stops} пересадки</StyledTitle>
          <StyledValue>{stopsCity}</StyledValue>
        </StyledDiv>
        <StyledDiv>
          <StyledTitle>{stopsBack} пересадки</StyledTitle>
          <StyledValue>{stopsCityBack}</StyledValue>
        </StyledDiv>
      </Col>
    </Row>
  </StyledRow>
);

