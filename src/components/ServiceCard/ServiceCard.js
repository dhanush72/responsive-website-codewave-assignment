import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { serviceCard } from "../../utils/data";

const ServiceCard = () => {
  return (
    <Container fluid className="px-0">
      <Row className="mt-5">
        {serviceCard.map(({ id, icon, title, desc }) => (
          <Col lg={3} md={6} key={id}>
            <div
              className="py-4 mb-4 text-center border-0 card card-shadow card-hover d-block"
              key={id}
            >
              <span className="display-4"> {icon} </span>

              <h3 className="py-2 card-title h5 font-weight-bold"> {title} </h3>
              <p className="card-subtitle">{desc}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ServiceCard;
