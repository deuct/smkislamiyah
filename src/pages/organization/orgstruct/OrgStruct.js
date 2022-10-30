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
        value="orgstruct"
        style={{ display: "none" }}
        readOnly
      />
      <div id="navbar-bgz"></div>
      <Container>
        <Row className="text-center">
          <Col xs={12}>
            <h1>Organization Structure</h1>
            <h1>SMK Islamiyah Ciputat</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis a consectetur provident dolor odit, at laborum
              aliquam eos suscipit magni labore,
            </p>
          </Col>
        </Row>
        <Row id="breadcrumb">
          <p>Home &gt; Organization &gt; Organization Structure</p>
        </Row>
        <div class="tree">
          <ul>
            <li>
              <a href="#">
                <img src={require("../../../images/1.jpg")} />
                <span>Headmaster</span>
              </a>
              <ul>
                <li>
                  <a href="#">
                    <img src={require("../../../images/2.jpg")} />
                    <span>Wakil</span>
                  </a>
                  <ul>
                    <li>
                      <a href="#">
                        <img src={require("../../../images/3.jpg")} />
                        <span>Guru</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src={require("../../../images/4.jpg")} />
                        <span>Guru</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    <img src={require("../../../images/5.jpg")} />
                    <span>Wakil</span>
                  </a>
                  <ul>
                    <li>
                      <a href="#">
                        <img src={require("../../../images/6.jpg")} />
                        <span>Guru</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src={require("../../../images/7.jpg")} />
                        <span>Guru</span>
                      </a>
                      <ul>
                        <li>
                          <a href="#">
                            <img src={require("../../../images/3.jpg")} />
                            <span>Guru</span>
                          </a>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <a href="#">
                            <img src={require("../../../images/3.jpg")} />
                            <span>Staff</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">
                        <img src={require("../../../images/8.jpg")} />
                        <span>Staff</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    <img src={require("../../../images/5.jpg")} />
                    <span>Wakil</span>
                  </a>
                  <ul>
                    <li>
                      <a href="#">
                        <img src={require("../../../images/6.jpg")} />
                        <span>Guru</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src={require("../../../images/7.jpg")} />
                        <span>Guru</span>
                      </a>
                      <ul>
                        <li>
                          <a href="#">
                            <img src={require("../../../images/3.jpg")} />
                            <span>Guru</span>
                          </a>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <a href="#">
                            <img src={require("../../../images/3.jpg")} />
                            <span>Staff</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">
                        <img src={require("../../../images/8.jpg")} />
                        <span>Staff</span>
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
