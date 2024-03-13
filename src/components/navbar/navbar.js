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
      /*#785e4b*/
      style={{ backgroundColor: "#ddd" , position: "sticky", top: "0"}}  
    >
      <Container className="navbar-container">
    
          <Navbar.Brand as={Link} to="/" className="logo">
            <img style={{filter: "invert(100%)"}} src={logo} alt="logo" className="logo-image" />
          </Navbar.Brand>
     
      
          <Nav className="ml-auto">
           
            <Nav.Link as={Link} to="/Visit" className="nav-link">
              <span className="hover-underline-animation">
                VISIT
              </span>
            </Nav.Link>
          
            <Nav.Link as={Link} to="/MuseumGallery" className="nav-link">
              <span className="hover-underline-animation">
                EXHIBITIONS
              </span>
            </Nav.Link>
            {/*
            <Nav.Link as={Link} to="/Learn" className="nav-link">
              <span className="hover-underline-animation">
                LEARN
              </span>
            </Nav.Link>
            <Nav.Link as={Link} to="/GetInvolved" className="nav-link">
              <span className="hover-underline-animation">
                GET INVOLVED
              </span>
            </Nav.Link>
            
            <Nav.Link as={Link} to="/Support" className="nav-link">
              <span className="hover-underline-animation">
                SUPPORT
              </span>
            </Nav.Link>*/}
            <Nav.Link as={Link} to="/About" className="nav-link">
              <span className="hover-underline-animation">
                ABOUT
              </span>
            </Nav.Link>
          </Nav>
     
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
