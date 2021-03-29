import React from 'react';
import {Form,Row, Col, FormCheck, Input} from 'react-bootstrap';
import styled from 'styled-components';

 const StyledForm = styled.form `
  font-size: 20px;
  box-shadow: 1px 1px 4px 1px #e0e0e0;
  display: flex;
  align-items: left;
  flex-direction: column;
  border-radius: 6px;
  background-color: white;
  width: 85%;
  padding-right:0;
  padding-bottom: 10px;
  padding-top:30px;
  padding-left: 0px;
  margin-left:60px;

  & h5 {
    margin-bottom: 10px;
    margin-left:25px;
  }
 `

const StyledCheckbox = styled(Form.Check) `
  /* -ms-transform: scale(1.7); /* IE */
  /* -moz-transform: scale(1.7); 
  -webkit-transform: scale(1.7); 
  -o-transform: scale(1.7);  */
  /* transform: scale(1.5); */
  padding-left: 25px;
  padding-bottom: 10px;
  padding-top:10px;
  width:100%;
  &:hover {
    background-color: #F1FCFF;
  }
  
`


export function Search() {

  return (
    
    <StyledForm  >
  
    <div>
      <h5>Количество Пересадок</h5>
     <div><StyledCheckbox inline label="Все" type="checkbox"/></div>
      <div><StyledCheckbox inline label="Без пересадок" type="checkbox" /></div>
      <div><StyledCheckbox inline label="1 пересадка" type="checkbox" /></div>
      <div><StyledCheckbox inline label="2 пересадки" type="checkbox" /></div>
      <div><StyledCheckbox inline label="3 пересадки" type="checkbox" /></div>
      </div>
      </StyledForm>
    
   

  )
}