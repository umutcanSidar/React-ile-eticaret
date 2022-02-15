import React from "react";

import { Link } from "react-router-dom";

import { Col, Container, ListGroup, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="mt-3">
      <Container>
        <Row>
          <Col>
            <Link className="logo" to="/">
              E-Commerce with React
            </Link>
          </Col>
          <Col>
            <ListGroup variant="dark">
              <ListGroup.Item className="custom-list-item">
                An item
              </ListGroup.Item>
              <ListGroup.Item className="custom-list-item">
                An item
              </ListGroup.Item>
              <ListGroup.Item className="custom-list-item">
                An item
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            <ListGroup variant="dark">
              <ListGroup.Item className="custom-list-item">
                An item
              </ListGroup.Item>
              <ListGroup.Item className="custom-list-item">
                An item
              </ListGroup.Item>
              <ListGroup.Item className="custom-list-item">
                An item
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
