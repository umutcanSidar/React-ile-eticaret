import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    name: "",
    password: "",
  });

  const submitted = (e) => {
    e.preventDefault();
    axios
      .post("http://3.18.62.175:8080/v1/auth/register", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section className="register">
      <Container>
        <Row>
          <Col lg="8" md="4">
            <figure className="mt-4">
              <img src="https://picsum.photos/350/300?random=3" width={"100%"} alt="" />
            </figure>
          </Col>
          <Col lg="4" md="8">
            <div className="us-register-form">
              <form className="row align-items-center">
                <div className="mt-3">
                  <label htmlFor="name" className="form-label">
                    Name/Surname <sup>*</sup>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    aria-describedby="emailHelp"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                  {/* <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div> */}
                </div>
                <div className="mt-3">
                  <label htmlFor="username" className="form-label">
                    Username <sup>*</sup>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mt-3">
                  <label htmlFor="email" className="form-label">
                    Email address <sup>*</sup>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    aria-describedby="emailHelp"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                  {/* <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div> */}
                </div>
                <div className="mt-3">
                  <label htmlFor="password" className="form-label">
                    Password <sup>*</sup>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mt-3">
                  <button
                    type="submit"
                    onClick={(e) => submitted(e)}
                    className="btn btn-primary"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;
