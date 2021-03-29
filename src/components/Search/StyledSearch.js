import { Form } from "react-bootstrap";
import styled from "styled-components";

export const StyledForm = styled.form`
  font-size: 20px;
  box-shadow: 1px 1px 4px 1px #e0e0e0;
  display: flex;
  align-items: left;
  flex-direction: column;
  border-radius: 6px;
  background-color: white;
  width: 85%;
  padding-bottom: 10px;
  padding-top: 30px;
  padding-left: 0px;
  margin-left: 60px;
  

  & h5 {
    font-size:16px;
    margin-bottom: 10px;
    margin-left: 25px;
  }

  @media (max-width: 992px) {
    width: 100%;
    margin-left: 0px;
    margin-bottom: 20px;
  }
`;

export const StyledCheckbox = styled(Form.Check)`
  padding-left: 25px;
  padding-bottom: 10px;
  padding-top: 10px;
  width: 100%;
  &:hover {
    background-color: #f1fcff;
  }
`;
