import React, { useState } from "react";

import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const Header = () => {
  const [basket, setBasket] = useState("");
  // TODO: Sepet oluşturulacak.
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="/">E-Commerce with React</Navbar.Brand>
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <NavDropdown
              menuVariant="dark"
              title={
                basket ? (
                  <ion-icon name="basket"></ion-icon>
                ) : (
                  <ion-icon name="basket-outline"></ion-icon>
                )
              }
              id="basic-nav-dropdown"
            >
              {basket ? (
                <NavDropdown.Item>{basket}</NavDropdown.Item>
              ) : (
                <div className="basketContainer">
                  <Nav.Item>Sepetiniz boş</Nav.Item>
                </div>
              )}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
