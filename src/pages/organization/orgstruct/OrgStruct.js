import React from "react";
import "../../../style/org-struct.css";
import NavbarTop from "../../components/NavbarTop";
import FooterBot from "../../components/FooterBot";
import { Container, Row, Col } from "react-bootstrap";

function OrgStruct() {
  return (
    <>
      <NavbarTop />
      {/* Navbar styling ketika di halaman tertentu */}
      <input
        type="text"
        id="navbar-id"
        value="home"
        style={{ display: "none" }}
        readOnly
      />
      <div id="navbar-bgz"></div>
      <Container>
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
        <Row id="breadcrumb">
          <p>Home &gt; BKK</p>
        </Row>
        <div class="tree">
          <ul>
            <li>
              <a href="#">
                <img src={require("../../../images/1.jpg")} />
                <span>Child</span>
              </a>
              <ul>
                <li>
                  <a href="#">
                    <img src={require("../../../images/2.jpg")} />
                    <span>Grand Child</span>
                  </a>
                  <ul>
                    <li>
                      <a href="#">
                        <img src={require("../../../images/3.jpg")} />
                        <span>
                          Great Grand Child <br />
                          Headmaster
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src={require("../../../images/4.jpg")} />
                        <span>Great Grand Child</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    <img src={require("../../../images/5.jpg")} />
                    <span>Grand Child</span>
                  </a>
                  <ul>
                    <li>
                      <a href="#">
                        <img src={require("../../../images/6.jpg")} />
                        <span>Great Grand Child</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src={require("../../../images/7.jpg")} />
                        <span>Great Grand Child</span>
                      </a>
                      <ul>
                        <li>
                          <a href="#">
                            <img src={require("../../../images/3.jpg")} />
                            <span>Great Grand Child</span>
                          </a>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <a href="#">
                            <img src={require("../../../images/3.jpg")} />
                            <span>Great Grand Child</span>
                          </a>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <a href="#">
                            <img src={require("../../../images/3.jpg")} />
                            <span>Great Grand Child</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">
                        <img src={require("../../../images/8.jpg")} />
                        <span>Great Grand Child</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </Container>
      <FooterBot />
      {/* </div>
      </div> */}
    </>
  );
}

export default OrgStruct;
