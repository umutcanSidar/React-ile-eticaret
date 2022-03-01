import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Col, Container, Row, Spinner } from "react-bootstrap";

import ProductCards from "../components/ProductCards";
import { datas } from "../datas";

const Product = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    const item = datas.filter((data) => data.id == productId)[0];
    console.log(item);
    setProduct(item);
  }, []);
  console.log(product);
  return (
    <Container>
      <Row>
        <Col className="mt-3">
          {product ? (
            <div className="card">
              {/* <img src={product.image.url} className="card-img-top" alt="..." /> */}
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <h4 className="card-price">{product.price.toFixed(2)} ₺</h4>
                <p className="card-text">{product.text}</p>
              </div>
            </div>
          ) : (
            <Spinner />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Product;
