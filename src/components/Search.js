import React from 'react';
import {Form,Row, Col, FormCheck} from 'react-bootstrap';
import styled from 'styled-components';

 const StyledForm = styled.form `
  font-size: 20px;
  box-shadow: 0 0 10px;
  padding: 10px;
  border-radius: 10px;
 `

// const StyledForm = styled.form `
// font-size: 20px;
// `
export function Search() {

  return (
    
    <StyledForm  >
  
    
      <h5>Количество Пересадок</h5>
      <FormCheck inline label="Все" type="checkbox" /><br/>
      <Form.Check inline label="Без пересадок" type="checkbox" /><br/>
      <Form.Check inline label="1 пересадка" type="checkbox" /><br/>
      <Form.Check inline label="2 пересадки" type="checkbox" /><br/>
      <Form.Check inline label="3 пересадки" type="checkbox" /><br/>
      
      </StyledForm>
    
   

  )
}