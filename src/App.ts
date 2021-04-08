import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';

import { Search, Filter, TicketsList, Logo } from './components/index';
import { GlobalStyle } from './StyledApp';

const App: React.FC<{}> = () => {
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
  )
  
  };

export default App;
