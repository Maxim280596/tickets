import styled from 'styled-components';

import { WHITE_COLOR, BOX_COLOR, HOVER_BTN_COLOR } from './GlobalConstStyles';

export const StyledButtonPrice = styled.button`
  width: 50%;
  min-height: 50px;
  margin-bottom: 20px;
  border-radius: 10px 0 0 10px;
  background-color: ${WHITE_COLOR};
  border: 1px solid ${BOX_COLOR};
  box-shadow: 1px 1px 4px 1px ${BOX_COLOR};
  &:hover {
    background-color: ${HOVER_BTN_COLOR};
    color: ${WHITE_COLOR};
  }
`;

export const StyledButtonFast = styled.button`
  width: 50%;
  min-height: 50px;
  margin-bottom: 20px;
  border-radius: 0 10px 10px 0;
  background-color: ${WHITE_COLOR};
  box-shadow: 1px 1px 4px 1px ${BOX_COLOR};
  border: 1px solid ${BOX_COLOR};
  &:hover {
    background-color: ${HOVER_BTN_COLOR};
    color: ${WHITE_COLOR};
  }
`;
