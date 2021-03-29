import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from "react-bootstrap";
import { Search } from "./components/Search/Search";
import { Filter } from "./components/Filter/Filter";
import { TicketsList } from "./components/TicketList/TicketsList";
import { Logo } from "./components/Logo/Logo";
import { GlobalStyle } from "./StyledApp";

function App() {
  return (
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
  );
}

export default App;
