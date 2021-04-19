import styled from 'styled-components';
import { Col } from 'react-bootstrap';

import {
  WHITE_COLOR,
  BOX_COLOR,
  BLUE_COLOR,
  GREY_COLOR,
  PRICE_MEDIA_525px,
  PRICE_MEDIA_425px,
  PRICE_MEDIA_335px,
  IMG_MEDIA_535px,
  IMG_MEDIA_326px,
  TICKET_MEDIA_500px,
  TICKET_MEDIA_426px,
  TICKET_MEDIA_360px,
  TITLE_MEDIA_373px,
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

  @media (max-width: ${PRICE_MEDIA_525px}) {
    font-size: 30px;
    padding: 10px;
  }
  @media (max-width: ${PRICE_MEDIA_425px}) {
    font-size: 20px;
    padding: 10px;
  }
  @media (max-width: ${PRICE_MEDIA_335px}) {
    font-size: 18px;
    padding: 8px;
  }
`;

export const StyledImg = styled.img`
  width: 100%;
  height: auto;
  padding: 20px;
  align-items: flex-start;

  @media (max-width: ${IMG_MEDIA_535px}) {
    padding: 10px;
  }
  @media (max-width: ${IMG_MEDIA_326px}) {
    padding: 8px;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 15px;
  padding-left: 20px;
  @media (max-width: ${TICKET_MEDIA_500px}) {
    padding-left: 10px;
  }
  @media (max-width: ${TICKET_MEDIA_426px}) {
    padding-left: 2px;
    padding-right: 2px;
  }
  @media (max-width: ${TICKET_MEDIA_360px}) {
    padding-left: 2px;
    padding-right: 2px;
  }
`;

export const StyledTitle = styled.span`
  color: ${GREY_COLOR};
  font-weight: 400;
  margin-bottom: 0;
  @media (max-width: ${TITLE_MEDIA_373px}) {
    font-size: 12px;
  }
`;
export const StyledValue = styled.span`
  font-weight: 500;
  margin-bottom: 0;
  @media (max-width: ${TITLE_MEDIA_373px}) {
    font-size: 12px;
  }
`;
