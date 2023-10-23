import React from 'react'
// import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import '../styles/new_css/main.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/fonts.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function NavbarBS() {
  return (
    <Navbar expand="lg" className="custom-nav">
      <Container fluid>
        <Navbar.Brand href="#" className='brand'>Wise Guy<br/>Collections</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Form className="d-flex custom-search">
            <Form.Control
              type="search"
              placeholder="Wise Guy Collections: Embrace the power of the underworld's arsenal."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="dark">Search</Button>
          </Form>
          <div className="custom-dropdown">
        {[DropdownButton].map((DropdownType, idx) => (
          <div >
          <DropdownType
            as={ButtonGroup}
            key={idx}
            id={`dropdown-button-drop-${idx}`}
            title="Drop large"
            variant='dark'
           size='large'
          >
            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
            <Dropdown.Item eventKey="4">Action</Dropdown.Item>
            <Dropdown.Item eventKey="5">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="6">Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="7">Action</Dropdown.Item>
            <Dropdown.Item eventKey="8">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="9">Something else here</Dropdown.Item>
            <Dropdown.Item eventKey="10">Action</Dropdown.Item>
            <Dropdown.Item eventKey="11">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="12">Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="13">Separated link</Dropdown.Item>
          </DropdownType>
          </div>
        ))}
      </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarBS;