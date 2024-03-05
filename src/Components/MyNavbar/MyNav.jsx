import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom"; 
const MyNav = () => {
  const session = JSON.parse(localStorage.getItem("auth"));

  return (
    <Navbar expand="lg" className="sticky-top" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/home"> 
          <h1>EPICBOOKS</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link> 
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Browse</Nav.Link>
            {session.gender === "female" && (
              <Nav.Link href="#link">Contattami</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
