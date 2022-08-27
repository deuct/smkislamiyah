import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FooterBot from "../components/FooterBot";
import HeaderImg from "../components/HeaderImg";
import NavbarTop from "../components/NavbarTop";

function DetailPost() {
  return (
    <>
      <NavbarTop />
      <HeaderImg />
      <Container>
        <Row>
          <Col>Test detail posting</Col>
        </Row>
      </Container>
      <div className="footer-lock mt-5" style={{ height: "50px" }}>
        <FooterBot />
      </div>
    </>
  );
}

export default DetailPost;
