import styled from 'styled-components';

import { WHITE_COLOR, BOX_COLOR, FORM_MEDIA_IPADPRO } from './GlobalConstStyles';

export const StyledForm = styled.form`
  font-size: 20px;
  box-shadow: 1px 1px 4px 1px ${BOX_COLOR};
  display: flex;
  align-items: left;
  flex-direction: column;
  border-radius: 6px;
  background-color: ${WHITE_COLOR};
  width: 85%;
  padding-bottom: 10px;
  padding-top: 30px;
  padding-left: 0px;
  margin-left: 60px;

  & h5 {
    font-size: 16px;
    margin-bottom: 10px;
    margin-left: 25px;
  }

  @media (max-width: ${FORM_MEDIA_IPADPRO}) {
    width: 100%;
    margin-left: 0px;
    margin-bottom: 20px;
  }
`;
