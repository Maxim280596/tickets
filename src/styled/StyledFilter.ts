import styled from 'styled-components';

import {
  WHITE_COLOR,
  BOX_COLOR,
  HOVER_BTN_COLOR,
  BLACK_COLOR,
} from './GlobalConstStyles';

type ButtonProps = {
  active?: boolean;
};

type ButtonPropsFast = {
  active?: boolean;
};

export const StyledButtonPrice = styled.button`
  color: ${(props: ButtonProps) => (props.active ? WHITE_COLOR : BLACK_COLOR)};
  width: 50%;
  min-height: 50px;
  margin-bottom: 20px;
  border-radius: 10px 0 0 10px;
  background: ${(props: ButtonProps) =>
    props.active ? HOVER_BTN_COLOR : WHITE_COLOR};
  border: 1px solid ${BOX_COLOR};
  box-shadow: 1px 1px 4px 1px ${BOX_COLOR};
  &:hover {
    background-color: ${HOVER_BTN_COLOR};
    color: ${WHITE_COLOR};
  }
`;

export const StyledButtonFast = styled.button`
  color: ${(props: ButtonProps) => (props.active ? WHITE_COLOR : BLACK_COLOR)};
  width: 50%;
  min-height: 50px;
  margin-bottom: 20px;
  border-radius: 0 10px 10px 0;
  background: ${(props: ButtonPropsFast) =>
    props.active ? HOVER_BTN_COLOR : WHITE_COLOR};
  box-shadow: 1px 1px 4px 1px ${BOX_COLOR};
  border: 1px solid ${BOX_COLOR};
  &:hover {
    background-color: ${HOVER_BTN_COLOR};
    color: ${WHITE_COLOR};
  }
`;
