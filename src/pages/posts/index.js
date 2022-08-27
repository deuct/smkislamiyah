import React from "react";
import "../../style/posts.css";
import {
  Row,
  Col,
  Button,
  InputGroup,
  Form,
  Container,
  Card,
} from "react-bootstrap";
import { IoSearch } from "react-icons/io5";

import programsCard from "../../images/programs-card.jpg";

import NavbarTop from "../components/NavbarTop";
import FooterBot from "../components/FooterBot";
import HeaderImg from "../components/HeaderImg";

function Post() {
  return (
    <>
      <NavbarTop />
      <HeaderImg title="Post" />
      <Container>
        <Row id="search-bar" className="justify-content-center">
          <Col xs={12}>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Search programs"
                aria-label="Search programs"
                aria-describedby="basic-addon2"
              />
              <Button variant="outline-secondary" id="button-addon2">
                <IoSearch />
              </Button>
            </InputGroup>
          </Col>
        </Row>
        <Row id="list-programs" className="my-5">
          <Col xs="4">
            <Card className="card-program">
              <Card.Img variant="top" src={programsCard} />
              <Card.Body className="cb-posts">
                <h1>TKJ</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum, obcaecati! Mollitia quis neque eos animi in inventore
                  maxime possimus porro, nam quasi, incidunt blanditiis
                  quibusdam!
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col xs="4">
            <Card className="card-program">
              <Card.Img variant="top" src={programsCard} />
              <Card.Body className="cb-posts">
                <h1>TKJ</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum, obcaecati! Mollitia quis neque eos animi in inventore
                  maxime possimus porro, nam quasi, incidunt blanditiis
                  quibusdam!
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col xs="4">
            <Card className="card-program">
              <Card.Img variant="top" src={programsCard} />
              <Card.Body className="cb-posts">
                <h1>TKJ</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum, obcaecati! Mollitia quis neque eos animi in inventore
                  maxime possimus porro, nam quasi, incidunt blanditiis
                  quibusdam!
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col xs="4">
            <Card className="card-program">
              <Card.Img variant="top" src={programsCard} />
              <Card.Body className="cb-posts">
                <h1>TKJ</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum, obcaecati! Mollitia quis neque eos animi in inventore
                  maxime possimus porro, nam quasi, incidunt blanditiis
                  quibusdam!
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col xs="4">
            <Card className="card-program">
              <Card.Img variant="top" src={programsCard} />
              <Card.Body className="cb-posts">
                <h1>TKJ</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum, obcaecati! Mollitia quis neque eos animi in inventore
                  maxime possimus porro, nam quasi, incidunt blanditiis
                  quibusdam!
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col xs="4">
            <Card className="card-program">
              <Card.Img variant="top" src={programsCard} />
              <Card.Body className="cb-posts">
                <h1>TKJ</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum, obcaecati! Mollitia quis neque eos animi in inventore
                  maxime possimus porro, nam quasi, incidunt blanditiis
                  quibusdam!
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="text-center">
          <Col>
            <Button className="btn-loadmore mx-auto">Load More</Button>
          </Col>
        </Row>
        <Row className="text-center my-5">
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

export default Post;
