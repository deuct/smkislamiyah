import React from "react";
import "../../style/programs.css";

import {
  Row,
  Col,
  Button,
  InputGroup,
  Form,
  Container,
  Card,
} from "react-bootstrap";
import { IoSearch, IoPlayBackSharp } from "react-icons/io5";

import programsCard from "../../images/programs-card.jpg";

import NavbarTop from "../components/NavbarTop";
import FooterBot from "../components/FooterBot";
import HeaderImg from "../components/HeaderImg";

function Programs() {
  return (
    <>
      <NavbarTop />
      <input
        type="text"
        id="navbar-id"
        value="programs"
        style={{ display: "none" }}
        readOnly
      />
      <div id="navbar-bgz" style={{ height: "13vh" }}></div>
      <Container>
        <Row id="title-programs" className="justify-content-center">
          <Col xs={10} md={10} sm={12} className="text-center">
            <h1>Programs</h1>
            <h1>SMK Islamiyah Ciputat</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis,
              quisquam velit modi sed ut quibusdam alias libero delectus in
              facilis blanditi.
            </p>
          </Col>
        </Row>
        <Row id="breadcrumb">
          <Col xs={12}>
            <p>
              Home &gt; Organization &gt;
              <span style={{ color: "yellow" }}> Programs</span>
            </p>
          </Col>
        </Row>
        <Row>
          <div id="programs-intro">
            <h1>Programs Keahlian</h1>
            <p>
              Tentukan program keahlian seru sesuai passionmu dari SMK Islamiyah
              Ciputat!
            </p>
          </div>
        </Row>
        <Row id="list-programs" className="my-5">
          <Col xs="6" md="4">
            <div className="card-programs">
              <img src={programsCard} />
              <div className="card-programs-body">
                <h1>Accounting</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugit, voluptate.
                </p>
                <a href="#" className="btn-details-program">
                  Details
                </a>
              </div>
            </div>
          </Col>
          <Col xs="6" md="4">
            <div className="card-programs">
              <img src={programsCard} />
              <div className="card-programs-body">
                <h1>TKJ</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugit, voluptate.
                </p>
                <a href="#" className="btn-details-program">
                  Details
                </a>
              </div>
            </div>
          </Col>
          <Col xs="6" md="4">
            <div className="card-programs">
              <img src={programsCard} />
              <div className="card-programs-body">
                <h1>Digital Marketing</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugit, voluptate.
                </p>
                <a href="#" className="btn-details-program">
                  Details
                </a>
              </div>
            </div>
          </Col>
          <Col xs="6" md="4">
            <div className="card-programs">
              <img src={programsCard} />
              <div className="card-programs-body">
                <h1>Designer Graphic</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugit, voluptate.
                </p>
                <a href="#" className="btn-details-program">
                  Details
                </a>
              </div>
            </div>
          </Col>
          <Col xs="6" md="4">
            <div className="card-programs">
              <img src={programsCard} />
              <div className="card-programs-body">
                <h1>Content Creator</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugit, voluptate.
                </p>
                <a href="#" className="btn-details-program">
                  Details
                </a>
              </div>
            </div>
          </Col>
          <Col xs="6" md="4">
            <div className="card-programs">
              <img src={programsCard} />
              <div className="card-programs-body">
                <h1>Tata Boga</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugit, voluptate.
                </p>
                <a href="#" className="btn-details-program">
                  Details
                </a>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="my-3">
          <a href="#" className="mt-2 mb-4">
            <IoPlayBackSharp /> Back to Homepage
          </a>
        </Row>
      </Container>
      <div className="footer-lock mt-5" style={{ height: "50px" }}>
        <FooterBot />
      </div>
    </>
  );
}

export default Programs;
