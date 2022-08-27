import React from "react";

import NavbarTop from "../components/NavbarTop";
import FooterBot from "../components/FooterBot";
import HeaderImg from "../components/HeaderImg";

import {
  Container,
  InputGroup,
  Row,
  Col,
  Button,
  Form,
  Navbar,
} from "react-bootstrap";

import "../../style/bkk-detail.css";

import PepsiLogo from "../../images/pepsi-logo.png";

function DetailBkk() {
  return (
    <>
      <NavbarTop />
      <HeaderImg title="Pepsi Ltd." />
      <Container>
        <Row>
          <Col xs={12}>
            <Row className="justify-content-center text-center dbkk-title">
              <img src={PepsiLogo} className="dbkk-img" />
              <h1>Pepsi Ltd.</h1>
              <h2>Co - Workers</h2>
            </Row>
            <Row className="dbkk-desc">
              <h2>Job Description</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
                natus porro consectetur eius nihil. Fuga ut, doloribus aut earum
                sint tempora impedit necessitatibus, similique soluta eaque
                aliquid blanditiis quisquam officiis? Atque deleniti impedit
                repudiandae quos, iure ipsum sapiente perferendis quae rerum
                quo, inventore aspernatur commodi! Ratione suscipit beatae,
                distinctio debitis tempore nihil aliquid culpa non placeat
                repudiandae sed architecto voluptates!
              </p>
              <h2>Minimum Qualification</h2>
              <p>
                <ol>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                </ol>
              </p>
              <h2>About Company</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad
                beatae quaerat, incidunt nam commodi ipsa deserunt error
                laudantium, odio quas voluptatibus dolorem accusantium ut,
                quisquam quae perspiciatis voluptatem nulla voluptas. Odit
                deleniti consequatur, ducimus alias vel repudiandae est dolorum
                nam laborum assumenda eos officia quam nemo inventore excepturi
                quos placeat ab sapiente, et accusamus molestiae! Dolores,
                adipisci! Eligendi, magnam esse. Iure vel aliquid soluta. Porro
                alias suscipit deserunt officiis fugit, consequuntur magni
                expedita quod voluptate numquam veritatis illo neque ducimus
                nihil eligendi explicabo rem ullam recusandae placeat corrupti
                odit possimus!
              </p>
              <Row>
                <h2>Gallery</h2>
              </Row>
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

export default DetailBkk;
