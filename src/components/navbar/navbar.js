import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../images/white horiz.png";
import "./navbar.css";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      className="Navigation"
      style={{ backgroundColor: "#785e4b" }}
    >
      <Container className="navbar-container">
        <Navbar.Brand as={Link} to="/" className="logo">
          <img src={logo} alt="logo" className="logo-image" />
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/Visit" className="nav-link">
            VISIT
          </Nav.Link>
          <Nav.Link as={Link} to="/MuseumGallery" className="nav-link">
            EXHIBITIONS
          </Nav.Link>
          <Nav.Link as={Link} to="/Learn" className="nav-link">
            LEARN
          </Nav.Link>
          <Nav.Link as={Link} to="/GetInvolved" className="nav-link">
            GET INVOLVED
          </Nav.Link>
          <Nav.Link as={Link} to="/Support" className="nav-link">
            SUPPORT
          </Nav.Link>
          <Nav.Link as={Link} to="/About" className="nav-link">
            ABOUT
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
