import React from 'react';
import {Button, Col, Row} from 'react-bootstrap';
import styled from 'styled-components';


const StyledButton = styled.button `
  width:50%;
  height:25%;
  margin-bottom: 20px;
  border-radius:10px;
  
`;


export  function Filter () {


  return(
    < >
    
    <StyledButton variant="primary" size="lg">Самый дешевый</StyledButton>
    <StyledButton variant="primary" size="lg">Самый быстрый</StyledButton>
    
    </>
  )
}