import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { heroData } from "../../utils/data";

const Hero = () => {
  return (
    <Container fluid className="px-0 mt-5">
      <Row>
        <Col md={8} className="justify-center hero-bg">
          <div className="p-5 my-2 card-bg d-flex justify-content-center align-items-start flex-column">
            <h1 className="p-1 h3 bg-warning font-weight-bold">
              Terry's Taco Joint
            </h1>
            <p className="p-1 bg-warning font-weight-bold">
              Pretty Good Tacos!
            </p>
          </div>
        </Col>

        <Col md={4}>
          {heroData.map(({ id, price, name }) => (
            <div
              className="p-5 my-2 bg-warning d-flex justify-content-center flex-column align-items-center"
              key={id}
            >
              <h3 className="display-4"> {price} </h3>
              <p className="font-weight-bold"> {name} </p>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
