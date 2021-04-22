import styled from 'styled-components';
import { Form } from 'react-bootstrap';

import { HOVER_INPUT_COLOR } from './GlobalConstStyles';

export const StyledCheckbox = styled(Form.Check)`
  padding-left: 40px;
  padding-bottom: 8.3px;
  width: 100%;
  margin-top: 0.5rem;
  &:hover {
    background-color: ${HOVER_INPUT_COLOR};
  }
`;
