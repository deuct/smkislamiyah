import React from "react";
import { Row, Col } from "react-bootstrap";

function FooterBot() {
  return (
    <>
      <Row id="footer" className="align-items-center text-center">
        <Col className="mt-4">
          <p>&copy; 2022 SMK Islamiyah Ciputat</p>
        </Col>
      </Row>
    </>
  );
}

export default FooterBot;
