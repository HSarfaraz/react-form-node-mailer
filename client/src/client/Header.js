import React from "react";
import { Navbar, Nav, Card } from "react-bootstrap";

const Header = () => {
  return (
    <Card className="shadow mx-2 mb-2">
      <Card.Body>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">
            {" "}
            {/* Company Logo{" "} */}
            <img src="https://via.placeholder.com/50" className="rounded" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#productlist">Product List</Nav.Link>
              <Nav.Link href="#availableproducts">Available Products</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Card.Body>
    </Card>
  );
};

export default Header;
