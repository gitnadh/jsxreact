import logo from './logo.svg';
import './App.css';
import './Component/Profile/ProfilePhoto.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ProfilePhoto from "./Component/Profile/ProfilePhoto.js"
import FullName from './Component/Profile/FullName.js';
import Address from "./Component/Profile/Address.js"


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Contact-us</Nav.Link>
            <NavDropdown title="About" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Education & Experiences</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Certifications
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Competences</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Languages
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    <FullName />
    <Address />
    <ProfilePhoto />
    
    
      </header>
    </div>
  );
}

export default App;
