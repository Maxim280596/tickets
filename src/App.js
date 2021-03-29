import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import { Container, Button, Col, Row} from "react-bootstrap";
import {Search} from './components/Search';
import {Filter} from './components/Filter';
import {TicketsList} from './components/TicketsList';
import {Logo} from './components/Logo';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color:#f3f7fa  ;
  }

  label {
    font-size:16px;
    padding-left:5px;
  }

  input {
    transform: scale(1.5); 
    
  }
`


function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Container >
        <Row>
          <Logo/>
        </Row>
        <Row>
        <Col lg={4}>
        
        <Search />
        
       
        </Col>
        <Col lg={8}>
       
        <Filter />
        <TicketsList/>
        
        </Col>
        </Row>
        
      </Container>
    </div>
  );
}

export default App;
