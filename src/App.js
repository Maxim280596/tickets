import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import { Container, Button, Col, Row} from "react-bootstrap";
import {Search} from './components/Search';
import {Filter} from './components/Filter';
import {TicketsList} from './components/TicketsList';

function App() {
  return (
    <div className="App">
      <Container >
        <Row>
        <Col lg={3}>
        
        <Search />
        
       
        </Col>
        <Col lg={9}>
       
        <Filter />
        <TicketsList/>
        
        </Col>
        </Row>
        
      </Container>
    </div>
  );
}

export default App;
