import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function NavbarNew() {
  return (
      <Navbar bg="light" expand="lg">
        <Container className='navbarnew'>
          <Navbar.Brand href="/">NetfLTUC</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to={'/'}>Home</Link>
              <Link to={'/FavList'}>FavList</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}