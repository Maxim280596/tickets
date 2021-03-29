import styled from "styled-components";

export const StyledButtonPrice = styled.button`
  width: 50%;
  min-height: 50px;
  margin-bottom: 20px;
  border-radius: 10px 0 0 10px;
  background-color: white;
  border: 1px solid #e0e0e0;
  box-shadow: 1px 1px 4px 1px #e0e0e0;
  &:hover {
    background-color: #2196f3;
    color:white;
  }
`;

export const StyledButtonFast = styled.button`
  width: 50%;
  min-height: 50px;
  margin-bottom: 20px;
  border-radius: 0 10px 10px 0;
  background-color: white;
  box-shadow: 1px 1px 4px 1px #e0e0e0;
  border: 1px solid #e0e0e0;
  &:hover {
    background-color: #2196f3;
    color:white;
  }
`;
