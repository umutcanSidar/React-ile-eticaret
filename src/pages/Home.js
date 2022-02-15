import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import ProductCards from "../components/ProductCards";
import SliderContent from "../components/Slider";

const Home = () => {
  return (
    <Container>
      <Row>
        <Col>
          <SliderContent />
        </Col>
      </Row>
      <ProductCards />
    </Container>
  );
};

export default Home;
