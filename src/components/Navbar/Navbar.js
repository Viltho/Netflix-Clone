import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavbarNew() {
  return (
      <Navbar bg="light" expand="lg">
        <Container className='navbarnew'>
          <Navbar.Brand href="/">NetfLTUC</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link href="/">Home</Link>
              <Link href="/FavList">FavList</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}