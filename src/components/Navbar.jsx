import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Btn from "./Btn";

export default class LocalNavbar extends Component {
  render() {
    return (
      <div>
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="#home" className="Atomic">
              Atomic
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">About</Nav.Link>
                <Nav.Link href="#link">Services</Nav.Link>
                <Nav.Link href="#link">Gallery</Nav.Link>
                <Nav.Link href="#link">Blog</Nav.Link>
                <Nav.Link href="#link">FAQs</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>

          <Btn Button1="Login" Button2="SignUp" />
        </Navbar>
      </div>
    );
  }
}
