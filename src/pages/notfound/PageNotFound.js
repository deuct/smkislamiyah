import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <Container>
      <Row className="text-center">
        <Col xs={12} lg={12} md={12}>
          <div id="not-found">
            <img src={require("../../images/404error.png")} width={"550px"} />
            <h1
              className="fw-bold"
              style={{ fontSize: "1.6rem", color: "RGB(68, 110, 194)" }}
            >
              404
            </h1>
            <h2
              className="fw-bold"
              style={{ fontSize: "1.4rem", color: "RGB(68, 110, 194)" }}
            >
              The page cannot be found!
            </h2>
            <br />
            <Link to={"/"}>
              <Button>Go to Homepage</Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default PageNotFound;
