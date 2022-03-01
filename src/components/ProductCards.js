import React, { useEffect, useState } from "react";
import { Col, Row, Card, Button, Spinner } from "react-bootstrap";

import { datas } from "../datas";

const ProductCards = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setProducts(datas);
    setLoading(false);
  }, []);

  return (
    <Row className="product-cards">
      {!loading ? (
        products.map((product, id) => (
          // TODO: Ürün detay sayfası yapılacak. 
          <Col key={id} className="mt-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.text}</Card.Text>
                <Card.Text className="price">{product.price.toFixed(2)} ₺</Card.Text>
                <Button variant="primary" className="d-flex align-items-center">
                  <span className="d-inline-block me-2">Sepete Ekle</span><ion-icon name="basket-outline"></ion-icon>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))
      ) : (
        <Spinner />
      )}
    </Row>
  );
};

export default ProductCards;
