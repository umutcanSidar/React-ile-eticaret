import React from "react";
import { Col, Container, Row, Breadcrumb } from "react-bootstrap";
import ProductCards from "../components/ProductCards";

const Products = () => {
  return (
    <Container>
      <Row className="mt-3">
        <Col>
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Products</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <ProductCards />
    </Container>
  );
};

export default Products;
