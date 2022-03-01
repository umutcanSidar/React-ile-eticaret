import React, { useEffect, useState } from "react";

import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

import axios from "axios";
import { Link } from "react-router-dom";

const Header = () => {
  const [basket, setBasket] = useState("");

  // useEffect(() => {
  //   axios
  //     .post(
  //       "http://node-env.eba-ucq7mymu.us-east-2.elasticbeanstalk.com/v1/auth/register/",
  //       { email: "umutcansidar@gmail.com" }
  //     )
  //     .then((data, err) => {
  //       console.log(data.data);
  //     });
  // }, []);

  // TODO: Sepet state'ten çekilecek.
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Brand href="/">E-Commerce with React</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-5">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Nav>
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
            <NavDropdown
              menuVariant="dark"
              title={<ion-icon name="person-circle"></ion-icon>}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item>
                <Nav.Link to={"/profile"}>Profile</Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Nav.Link to={"/settings"}>Settings</Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Nav.Link to={"/my-orders"}>My Orders</Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Nav.Link to={"/logout"}>Logout</Nav.Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
