import styled from 'styled-components';
import { Col } from 'react-bootstrap';

import {
  WHITE_COLOR,
  BOX_COLOR,
  BLUE_COLOR,
  GREY_COLOR,
  PRICE_MEDIA_BIG,
  PRICE_MEDIA_MEDIUM,
  PRICE_MEDIA_SMALL,
  IMG_MEDIA_BIG,
  IMG_MEDIA_SMALL,
  TICKET_MEDIA_BIG,
  TICKET_MEDIA_MEDIUM,
  TICKET_MEDIA_SMALL,
  TITLE_MEDIA_SMALL,
} from './GlobalConstStyles';

export const StyledRow = styled.div`
  border-radius: 6px;
  box-shadow: 1px 1px 4px 1px ${BOX_COLOR};
  margin-bottom: 20px;
  padding-bottom: 10px;
  background-color: ${WHITE_COLOR};
`;

export const StyledPrice = styled(Col)`
  align-items: flex-start;
  color: ${BLUE_COLOR};
  font-size: 33px;
  padding: 20px;

  @media (max-width: ${PRICE_MEDIA_BIG}) {
    font-size: 30px;
    padding: 10px;
  }
  @media (max-width: ${PRICE_MEDIA_MEDIUM}) {
    font-size: 20px;
    padding: 10px;
  }
  @media (max-width: ${PRICE_MEDIA_SMALL}) {
    font-size: 18px;
    padding: 8px;
  }
`;

export const StyledImg = styled.img`
  width: 100%;
  height: auto;
  padding: 20px;
  align-items: flex-start;

  @media (max-width: ${IMG_MEDIA_BIG}) {
    padding: 10px;
  }
  @media (max-width: ${IMG_MEDIA_SMALL}) {
    padding: 8px;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 15px;
  padding-left: 20px;
  @media (max-width: ${TICKET_MEDIA_BIG}) {
    padding-left: 10px;
  }
  @media (max-width: ${TICKET_MEDIA_MEDIUM}) {
    padding-left: 2px;
    padding-right: 2px;
  }
  @media (max-width: ${TICKET_MEDIA_SMALL}) {
    padding-left: 2px;
    padding-right: 2px;
  }
`;

export const StyledTitle = styled.span`
  color: ${GREY_COLOR};
  font-weight: 400;
  margin-bottom: 0;
  @media (max-width: ${TITLE_MEDIA_SMALL}) {
    font-size: 12px;
  }
`;
export const StyledValue = styled.span`
  font-weight: 500;
  margin-bottom: 0;
  @media (max-width: ${TITLE_MEDIA_SMALL}) {
    font-size: 12px;
  }
`;
