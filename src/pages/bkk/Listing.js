import React from "react";

import NavbarTop from "../components/NavbarTop";
import FooterBot from "../components/FooterBot";
import HeaderImg from "../components/HeaderImg";

import { Container, InputGroup, Row, Col, Button, Form } from "react-bootstrap";

import { IoSearch } from "react-icons/io5";
import PepsiLogo from "../../images/pepsi-logo.png";

import "../../style/bkk-listing.css";

function Listing() {
  return (
    <>
      <NavbarTop />
      <HeaderImg title="BKK" />
      <Container>
        <Row id="search-bar" className="justify-content-center">
          <Col xs={12}>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Search job..."
                aria-label="Search job..."
                aria-describedby="basic-addon2"
              />
              <Button variant="outline-secondary" id="button-addon2">
                <IoSearch />
              </Button>
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Row>
              <div className="card-bkk">
                <Col xs={2} className="d-inline-block">
                  <img src={PepsiLogo} className="cbkk-img" />
                </Col>
                <Col xs={10} className="d-inline-block">
                  <div className="cbkk-fill">
                    <h1>Pepsi Ltd.</h1>
                    <h2>Co - Workers</h2>
                    <span className="status st-open">Open</span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Nisi numquam deleniti laborum molestiae sint eum ullam
                      voluptas magnam, odit quis quibusdam dolores eaque beatae.
                      Aspernatur?
                    </p>
                    <Button className="cbkk-btn">More Information</Button>
                  </div>
                </Col>
              </div>
            </Row>
            <Row>
              <div className="card-bkk">
                <Col xs={2} className="d-inline-block">
                  <img src={PepsiLogo} className="cbkk-img" />
                </Col>
                <Col xs={10} className="d-inline-block">
                  <div className="cbkk-fill">
                    <h1>Pepsi Ltd.</h1>
                    <h2>Co - Workers</h2>
                    <span className="status st-close">Close</span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Nisi numquam deleniti laborum molestiae sint eum ullam
                      voluptas magnam, odit quis quibusdam dolores eaque beatae.
                      Aspernatur?
                    </p>
                    <Button className="cbkk-btn">More Information</Button>
                  </div>
                </Col>
              </div>
            </Row>
            <Row>
              <div className="card-bkk">
                <Col xs={2} className="d-inline-block">
                  <img src={PepsiLogo} className="cbkk-img" />
                </Col>
                <Col xs={10} className="d-inline-block">
                  <div className="cbkk-fill">
                    <h1>Pepsi Ltd.</h1>
                    <h2>Co - Workers</h2>
                    <span className="status st-open">Open</span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Nisi numquam deleniti laborum molestiae sint eum ullam
                      voluptas magnam, odit quis quibusdam dolores eaque beatae.
                      Aspernatur?
                    </p>
                    <Button className="cbkk-btn">More Information</Button>
                  </div>
                </Col>
              </div>
            </Row>
            <Row>
              <div className="card-bkk">
                <Col xs={2} className="d-inline-block">
                  <img src={PepsiLogo} className="cbkk-img" />
                </Col>
                <Col xs={10} className="d-inline-block">
                  <div className="cbkk-fill">
                    <h1>Pepsi Ltd.</h1>
                    <h2>Co - Workers</h2>
                    <span className="status st-open">Open</span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Nisi numquam deleniti laborum molestiae sint eum ullam
                      voluptas magnam, odit quis quibusdam dolores eaque beatae.
                      Aspernatur?
                    </p>
                    <Button className="cbkk-btn">More Information</Button>
                  </div>
                </Col>
              </div>
            </Row>
          </Col>
        </Row>
        <Row className="text-center">
          <Col>
            <Button className="btn-loadmore mx-auto">Load More</Button>
          </Col>
        </Row>
        <Row className="text-center mb-3">
          <Col>
            <Button variant="link" className="mx-auto">
              Back to Homepage
            </Button>
          </Col>
        </Row>
      </Container>
      <div className="footer-lock mt-5" style={{ height: "50px" }}>
        <FooterBot />
      </div>
    </>
  );
}

export default Listing;
