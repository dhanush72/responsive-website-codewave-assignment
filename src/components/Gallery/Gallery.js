import React from "react";
import { Row, Col } from "react-bootstrap";
import { gallery } from "../../utils/data";

const Gallery = () => {
  return (
    <div className="mt-5 gallery">
      <h2 className="text-center h4 font-weight-bold">Instant Grams</h2>

      <Row className="mt-4">
        {gallery.map(({ id, src }) => (
          <Col md={3} key={id} className="mb-3">
            <img src={src} alt="" className="img-fluid" />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Gallery;
