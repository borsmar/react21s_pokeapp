import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Nav } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import LinkContainer from "react-router-bootstrap/LinkContainer";

const Header = () =>{

      return (
        <div>
            <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">PokeApp</Navbar.Brand>
          <NavbarToggle aria-controls='basic-navbar-nav'></NavbarToggle>
          <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className="me-auto">
            <LinkContainer to="/">
            <Nav.Link href="#home">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="pokemons">
            <Nav.Link href="#link">Pokemons</Nav.Link>
            </LinkContainer>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </div>
    );
};

export default Header