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
      {/* Navbar styling ketika di halaman tertentu */}
      <input
        type="text"
        id="navbar-id"
        value="bkk-listing"
        style={{ display: "none" }}
        readOnly
      />
      {/* <div id="navbar-id">test</div> */}
      <div id="navbar-bgz"></div>
      <Container style={{ marginTop: "5vh" }}>
        <Row id="title-bkk">
          <Col xs={4}>
            <h1>BKK</h1>
            <h1>Bursa Kerja Khusus</h1>
          </Col>
          <Col xs={8}>
            <h3>Bursa Kerja Khusus</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis a consectetur provident dolor odit, at laborum
              aliquam eos suscipit magni labore,              
            </p>
            <a href="#">More information...</a>
          </Col>
        </Row>
        <Row id="breadcrumb"><p>Home &gt; BKK</p></Row>
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
        <Row id="list-job">
          <Col xs={4} id="list-job-left">
            <Row>
              <div className="card-bkk">
                <Col xs={2}>
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
                    <a className="cbkk-MI">More Information</a>
                  </div>
                </Col>
              </div>
            </Row>
            <Row>
              <div className="card-bkk">
                <Col xs={2}>
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
                    <a className="cbkk-MI">More Information</a>
                  </div>
                </Col>
              </div>
            </Row>
            <Row>
              <div className="card-bkk">
                <Col xs={2}>
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
                    <a className="cbkk-MI">More Information</a>
                  </div>
                </Col>
              </div>
            </Row>
            <Row>
              <div className="card-bkk">
                <Col xs={2}>
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
                    <a href="#" className="cbkk-MI" >More Information</a>
                  </div>
                </Col>
              </div>
            </Row>
            <Row>
              <div className="card-bkk">
                <Col xs={2}>
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
                    <a className="cbkk-MI">More Information</a>
                  </div>
                </Col>
              </div>
            </Row>
            <Row className="text-center">
              <Col>
                <Button className="btn-loadmore mx-auto">Load More</Button>
              </Col>
            </Row>
          </Col>
          <Col xs={8}>
            <Row className="bkkdetail-title">
              <img src={PepsiLogo} className="comp-logo-detail" />
              <h1>PT PEPSI</h1>
              <h3>Co - Worker</h3>
              <span className="status st-open">Open</span>
            </Row>
            <Row className="bkkdetail-body">
              <div className="detail-intro">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur accusantium aut provident nulla nemo? Quod rem eum
                magni deserunt corrupti porro accusantium quidem facilis
                voluptate!
              </div>
              <div className="bkk-d-desc">
                <h2>JOB REQUIREMENT : </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque, dolorum dolor amet magni itaque placeat! Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Exercitationem
                  ipsum assumenda id velit tempore sunt ex obcaecati aut natus
                  quasi.
                </p>
              </div>
              <div className="bkk-d-desc">
                <h2>JOB DESCRIPTION : </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                  et necessitatibus qui labore! Perspiciatis quae soluta minima
                  nostrum nisi, sunt repellendus odio ut rem velit!
                </p>
              </div>
              <div className="bkk-d-desc">
                <h2>COMPANY ADDRESS : </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </Row>
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
