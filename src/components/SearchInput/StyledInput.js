import styled from "styled-components";
import { Form } from "react-bootstrap";

export const StyledCheckbox = styled(Form.Check)`
  padding-left: 25px;
  padding-bottom: 10px;
  padding-top: 10px;
  width: 100%;
  &:hover {
    background-color: #f1fcff;
  }
`;