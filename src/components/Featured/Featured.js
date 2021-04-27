import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FeaturedImg from "../../assets/images/queso-taco.png";

const Featured = () => {
  return (
    <Container fluid className="mt-3">
      <Row className="p-5 bg-white rounded featured">
        <Col lg={5}>
          <img src={FeaturedImg} className=" img-fluid" alt="" />
        </Col>

        <Col
          lg={7}
          className="mt-4 mt-md-0 d-flex justify-content-center align-items-start flex-column"
        >
          <h2 className="my-3 font-weight-bold h4">Featured Taco</h2>
          <p className="font-weight-bold">
            Slim Profile, easy to hold and loaded with cheese.
          </p>
          <p className="font-weight-bold">
            This is the one you have been waiting for
          </p>

          <button className="px-3 mt-1 btn btn-warning rounded-0">
            Learn More &#8594;
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default Featured;
