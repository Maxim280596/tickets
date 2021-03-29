import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from "react-bootstrap";
import { Search } from "./components/Search/Search";
import { Filter } from "./components/Filter/Filter";
import { TicketsList } from "./components/TicketList/TicketsList";
import { Logo } from "./components/Logo/Logo";
import { GlobalStyle } from "./StyledApp";
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <GlobalStyle />
      <Container>
        <Row>
          <Logo />
        </Row>
        <Row>
          <Col lg={4}>
            <Search />
          </Col>
          <Col lg={8}>
            <Filter />
            <TicketsList />
          </Col>
        </Row>
      </Container>
      
    </div>
    </Router>
  );
}

export default App;
